namespace GestaoDeCompras.Dominio.Obras;

public class Obra
{
  public int Id { get; set; }
  public string Titulo { get; set; } = string.Empty;
  public string Imagem { get; set; } = string.Empty;
  public string Categoria { get; set; } = string.Empty;
  public decimal Preco { get; set; }

  public Obra(int id, string titulo, string imagem, string categoria, decimal preco)
  {
    Id = id;
    Titulo = titulo;
    Imagem = imagem;
    Categoria = categoria;
    Preco = preco;
  }

}
