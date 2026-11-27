using GestaoDeCompras.Dominio.Compras;
using GestaoDeCompras.Dominio.Obras;

namespace GestaoDeCompras.Aplicacao.Compras;

public class RegistrarCompra
{
  private readonly IRepositorioCompra repositorioCompra;
  private readonly IRepositorioObras repositorioObras;

  public RegistrarCompra(
      IRepositorioCompra repositorioCompra,
      IRepositorioObras repositorioObras)
  {
    this.repositorioCompra = repositorioCompra;
    this.repositorioObras = repositorioObras;
  }

  public async Task<Compra?> ExecutarAsync(IReadOnlyList<int> obraIds)
  {
    if (obraIds.Count == 0)
      return null;

    var obrasDisponiveis = await repositorioObras.ListarAsync();

    var obrasSelecionadas = obrasDisponiveis
        .Where(obra => obraIds.Contains(obra.Id))
        .ToList();

    if (obrasSelecionadas.Count != obraIds.Count)
      return null;

    var compra = new Compra(obrasSelecionadas);

    return await repositorioCompra.RegistrarAsync(compra);
  }
}
