using pro.Model;

namespace pro.Interface
{
    public interface IWRolSubMenu
    {
        Task<List<MFiltroLista>> GetFiltroListaAsync(MFiltro model);
        Task<List<MFiltroTotal>> GetFiltroTotalAsync(MFiltro model);
        Task<List<MWRolSubMenuVista>> GetFiltroVistaAsync(MFiltro model);
        Task<List<MWRolSubMenuExportar>> GetFiltroExportarAsync(MFiltro model);
    }
}