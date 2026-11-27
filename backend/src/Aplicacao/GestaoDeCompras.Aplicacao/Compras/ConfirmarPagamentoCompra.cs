using GestaoDeCompras.Dominio.Compras;

namespace GestaoDeCompras.Aplicacao.Compras;

public class ConfirmarPagamentoCompra
{
    private readonly IRepositorioCompra repositorioCompra;

    public ConfirmarPagamentoCompra(IRepositorioCompra repositorioCompra)
    {
        this.repositorioCompra = repositorioCompra;
    }

    public async Task<Compra?> ExecutarAsync(Guid compraId)
    {
        var compra = await repositorioCompra.ObterPorIdAsync(compraId);

        if (compra is null)
            return null;

        compra.ConfirmarPagamento();
        return compra;
    }
}
