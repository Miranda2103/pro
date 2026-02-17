using pro.Context;
using pro.Function;
using pro.Interface.pro;
using pro.Model.pro;
using pro.Repository.pro;

namespace pro.Logic.pro
{
    public class LWRol
    {
        private readonly IWRol _interface;

        public LWRol(DBPRO dbc)
        {
            _interface = new RWRol(dbc);
        }

        public async Task<List<MFiltroLista>> GetFiltroListaAsync(MFiltro model)
        {
            return await _interface.GetFiltroListaAsync(model);
        }

        public async Task<List<MFiltroTotal>> GetFiltroTotalAsync(MFiltro model)
        {
            return await _interface.GetFiltroTotalAsync(model);
        }

        public async Task<List<MWRolVista>> GetFiltroVistaAsync(MFiltro model)
        {
            return await _interface.GetFiltroVistaAsync(model);
        }

        public async Task<MemoryStream> GetFiltroExportarAsync(MFiltro model)
        {
            List<MWRolExportar> list = await _interface.GetFiltroExportarAsync(model);
            return MemoryStreamCC.Export(model, list);
        }

    }
}
