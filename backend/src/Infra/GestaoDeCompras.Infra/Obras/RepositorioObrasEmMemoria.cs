using GestaoDeCompras.Dominio.Obras;

namespace GestaoDeCompras.Infra.Obras;

public class RepositorioObrasEmMemoria : IRepositorioObras
{

  private static readonly IReadOnlyList<Obra> Obras = new List<Obra>
  {
    new Obra(1, "Obra 01", "/img/pintura-1-fundo-preenchido.jpeg",
      "Desenho em folha A4", 39.90m),
    new Obra(2, "Obra 02", "/img/imagem-2-fundo-preenchido.jpeg",
      "Tela grande", 110.00m),
    new Obra(3, "Obra 03", "/img/imagem-3-fundo-preenchido.jpeg",
      "Desenho em folha A4", 39.90m),
    new Obra(4, "Obra 04", "/img/imagem-4-fundo-preenchido.jpeg",
      "Desenho em folha A4", 39.90m),
    new Obra(5, "Obra 05", "/img/imagem-5-fundo-preenchido.jpeg",
      "Tela pequena", 45.00m),
    new Obra(6, "Obra 06", "/img/imagem-6-fundo-preenchido.jpeg",
      "Desenho em folha A4", 39.90m),
    new Obra(7, "Obra 07", "/img/imagem7-fundo-preenchido.jpeg",
      "Mandala", 50.00m),
    new Obra(8, "Obra 08", "/img/imagem-8-fundo-preenchido.jpeg",
      "Mandala", 50.00m),
    new Obra(9, "Obra 09", "/img/imagem-9-fundo-preenchido.jpeg",
      "Arte em madeira", 50.00m),
    new Obra(10, "Obra 10", "/img/imagem-10-fundo-preenchido.jpeg",
      "Conjunto desenho em folha", 39.90m),
    new Obra(11, "Obra 11", "/img/imagem-12-fundo-preenchido.jpeg",
      "Mandala", 50.00m)
  }.AsReadOnly();

  public Task<IReadOnlyList<Obra>> ListarAsync()
  {
    return Task.FromResult(Obras);
  }

}
