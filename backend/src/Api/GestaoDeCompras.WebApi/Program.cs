using GestaoDeCompras.Aplicacao.Compras;
using GestaoDeCompras.Aplicacao.Obras;
using GestaoDeCompras.Dominio.Compras;
using GestaoDeCompras.Dominio.Obras;
using GestaoDeCompras.Infra.Compras;
using GestaoDeCompras.Infra.Obras;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();
builder.Services.AddCors(options =>
{
  options.AddPolicy("FrontendLocal", policy =>
  {
    policy.SetIsOriginAllowed(origem =>
        Uri.TryCreate(origem, UriKind.Absolute, out var uri) && uri.IsLoopback)
      .AllowAnyHeader()
      .AllowAnyMethod();
  });
});

builder.Services.AddScoped<IRepositorioObras, RepositorioObrasEmMemoria>();
builder.Services.AddScoped<ListarObras>();
builder.Services.AddScoped<IRepositorioCompra, RepositorioCompraEmMemoria>();
builder.Services.AddScoped<RegistrarCompra>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.MapOpenApi();
}

app.UseHttpsRedirection();
app.UseCors("FrontendLocal");

var summaries = new[]
{
    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
};

app.MapGet("/weatherforecast", () =>
{
  var forecast = Enumerable.Range(1, 5).Select(index =>
      new WeatherForecast
      (
          DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
          Random.Shared.Next(-20, 55),
          summaries[Random.Shared.Next(summaries.Length)]
      ))
      .ToArray();
  return forecast;
})
.WithName("GetWeatherForecast");

app.MapGet("/api/obras", async (ListarObras listarObras) =>
{
  var obras = await listarObras.ExecutarAsync();
  return Results.Ok(obras);
});

app.Run();

record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
  public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
