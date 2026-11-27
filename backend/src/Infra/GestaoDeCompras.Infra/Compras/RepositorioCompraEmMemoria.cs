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

    public Task<Compra?> ObterPorIdAsync(Guid id)
    {
        var compra = Compras.FirstOrDefault(item => item.Id == id);
        return Task.FromResult(compra);
    }

    public Task<Compra> RegistrarAsync(Compra compra)
    {
        Compras.Add(compra);
        return Task.FromResult(compra);
    }
}
