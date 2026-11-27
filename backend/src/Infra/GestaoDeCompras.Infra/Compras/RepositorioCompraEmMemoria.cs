using GestaoDeCompras.Dominio.Compras;

namespace GestaoDeCompras.Infra.Compras;

public class RepositorioCompraEmMemoria : IRepositorioCompra
{
    private static readonly List<Compra> Compras = new();

    public Task<IReadOnlyList<Compra>> ListarAsync()
    {
        IReadOnlyList<Compra> resultado = Compras.ToList();
        return Task.FromResult(resultado);
    }

    public Task<Compra> RegistrarAsync(Compra compra)
    {
        Compras.Add(compra);
        return Task.FromResult(compra);
    }
}
