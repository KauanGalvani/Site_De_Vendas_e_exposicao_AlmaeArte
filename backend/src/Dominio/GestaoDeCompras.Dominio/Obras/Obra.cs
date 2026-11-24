namespace GestaoDeCompras.Dominio.Feature;

public class Obra
{
  public int Id { get; set; }
  public string Titulo { get; set; } = string.Empty;
  public string Imagem { get; set; } = string.Empty;
  public string Categoria { get; set; } = string.Empty;
  public decimal Preco { get; set; }
}
