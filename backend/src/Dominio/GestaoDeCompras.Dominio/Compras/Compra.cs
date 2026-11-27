using System;
using GestaoDeCompras.Dominio.Obras;

namespace GestaoDeCompras.Dominio.Compras;

public class Compra
{
  public Guid Id { get; private set; }
  public DateTimeOffset CriadoEm { get; private set; }
  public IReadOnlyList<Obra> Obras { get; private set; }
  public decimal Total => Obras.Sum(obra => obra.Preco);
  public string Status { get; private set; } = string.Empty;

  public Compra(IReadOnlyList<Obra> obras)
  {
    Id = Guid.NewGuid();
    CriadoEm = DateTimeOffset.UtcNow;
    Obras = obras;
    Status = "Aguardando confirmação";
  }
}
