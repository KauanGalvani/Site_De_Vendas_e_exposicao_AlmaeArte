using System;
using GestaoDeCompras.Dominio.Obras;

namespace GestaoDeCompras.Aplicacao.Obras;

public class ListarObras
{
  private readonly IRepositorioObras repositorioObras;

  public ListarObras(IRepositorioObras repositorioObras)
  {
    this.repositorioObras = repositorioObras;
  }

  public Task<IReadOnlyList<Obra>> ExecutarAsync()
  {
    return this.repositorioObras.ListarAsync();
  }
}
