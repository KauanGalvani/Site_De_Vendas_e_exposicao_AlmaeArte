namespace GestaoDeCompras.Dominio.Obras;

public interface IRepositorioObras
{
    Task<IReadOnlyList<Obra>> ListarAsync();
}
