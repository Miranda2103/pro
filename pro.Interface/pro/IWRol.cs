using pro.Model;

namespace pro.Interface
{
    public interface IWRol
    {
        Task<List<MFiltroLista>> GetFiltroListaAsync(MFiltro model);
        Task<List<MFiltroTotal>> GetFiltroTotalAsync(MFiltro model);
        Task<List<MWRolVista>> GetFiltroVistaAsync(MFiltro model);
        Task<List<MWRolExportar>> GetFiltroExportarAsync(MFiltro model);
    }
}