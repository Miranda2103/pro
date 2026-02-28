using pro.Model;

namespace pro.Interface
{
    public interface IWPaciente
    {
        Task<List<MFiltroLista>> GetFiltroListaAsync(MFiltro model);
        Task<List<MFiltroTotal>> GetFiltroTotalAsync(MFiltro model);
        Task<List<MWPacienteVista>> GetFiltroVistaAsync(MFiltro model);
        Task<List<MWPacienteExportar>> GetFiltroExportarAsync(MFiltro model);
    }
}