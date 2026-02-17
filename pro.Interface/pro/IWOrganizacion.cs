using pro.Model.pro;

namespace pro.Interface.pro
{
    public interface IWOrganizacion
    {
        Task<List<MFiltroLista>> GetFiltroListaAsync(MFiltro model);
        Task<List<MFiltroTotal>> GetFiltroTotalAsync(MFiltro model);
        Task<List<MWOrganizacionVista>> GetFiltroVistaAsync(MFiltro model);
        Task<List<MWOrganizacionExportar>> GetFiltroExportarAsync(MFiltro model);
    }
}