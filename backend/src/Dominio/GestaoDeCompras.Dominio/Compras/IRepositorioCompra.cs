using System;

namespace GestaoDeCompras.Dominio.Compras;

public interface IRepositorioCompra
{
  Task<IReadOnlyList<Compra>> ListarAsync();
  Task<Compra> RegistrarAsync(Compra compra);
}
