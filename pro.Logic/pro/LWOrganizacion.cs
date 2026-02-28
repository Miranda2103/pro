using pro.Context;
using pro.Function;
using pro.Interface;
using pro.Model;
using pro.Repository;

namespace pro.Logic
{
    public class LWOrganizacion
    {
        private readonly IWOrganizacion _interface;

        public LWOrganizacion(DBPRO dbc)
        {
            _interface = new RWOrganizacion(dbc);
        }

        public async Task<List<MFiltroLista>> GetFiltroListaAsync(MFiltro model)
        {
            return await _interface.GetFiltroListaAsync(model);
        }

        public async Task<List<MFiltroTotal>> GetFiltroTotalAsync(MFiltro model)
        {
            return await _interface.GetFiltroTotalAsync(model);
        }

        public async Task<List<MWOrganizacionVista>> GetFiltroVistaAsync(MFiltro model)
        {
            return await _interface.GetFiltroVistaAsync(model);
        }

        public async Task<MemoryStream> GetFiltroExportarAsync(MFiltro model)
        {
            List<MWOrganizacionExportar> list = await _interface.GetFiltroExportarAsync(model);
            return MemoryStreamCC.Export(model, list);
        }

    }
}
