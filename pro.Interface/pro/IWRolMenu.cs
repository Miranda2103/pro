using pro.Model.pro;

namespace pro.Interface.pro
{
    public interface IWRolMenu
    {
        Task<List<MFiltroLista>> GetFiltroListaAsync(MFiltro model);
        Task<List<MFiltroTotal>> GetFiltroTotalAsync(MFiltro model);
        Task<List<MWRolMenuVista>> GetFiltroVistaAsync(MFiltro model);
        Task<List<MWRolMenuExportar>> GetFiltroExportarAsync(MFiltro model);
    }
}