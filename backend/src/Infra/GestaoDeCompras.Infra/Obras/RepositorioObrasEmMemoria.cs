using GestaoDeCompras.Dominio.Obras;

namespace GestaoDeCompras.Infra.Obras;

public class RepositorioObrasEmMemoria : IRepositorioObras
{

  private static readonly IReadOnlyList<Obra> Obras = new List<Obra>
  {
    new Obra(1, "Obra 01", "/img/pintura-1-fundo-preenchido.jpeg",
      "Desenho em folha A4", 39.90m),
    new Obra(2, "Obra 02", "/img/imagem-2-fundo-preenchido.jpeg",
      "Tela grande", 110.00m)
  }.AsReadOnly();

  public Task<IReadOnlyList<Obra>> ListarAsync()
  {
    return Task.FromResult(Obras);
  }

}
