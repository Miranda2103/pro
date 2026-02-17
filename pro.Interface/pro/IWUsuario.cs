using pro.Model.pro;

namespace pro.Interface.pro
{
    public interface IWUsuario
    {
        Task<List<MFiltroLista>> GetFiltroListaAsync(MFiltro model);
        Task<List<MFiltroTotal>> GetFiltroTotalAsync(MFiltro model);
        Task<List<MWUsuarioVista>> GetFiltroVistaAsync(MFiltro model);
        Task<List<MWUsuarioExportar>> GetFiltroExportarAsync(MFiltro model);
    }
}