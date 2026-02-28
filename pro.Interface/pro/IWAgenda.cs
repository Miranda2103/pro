using pro.Model;

namespace pro.Interface
{
    public interface IWAgenda
    {
        Task<List<MFiltroLista>> GetFiltroListaAsync(MFiltro model);
        Task<List<MFiltroTotal>> GetFiltroTotalAsync(MFiltro model);
        Task<List<MWAgendaVista>> GetFiltroVistaAsync(MFiltro model);
        Task<List<MWAgendaExportar>> GetFiltroExportarAsync(MFiltro model);
    }
}