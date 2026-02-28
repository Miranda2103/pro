using pro.Context;
using pro.Function;
using pro.Interface;
using pro.Model;
using pro.Repository;

namespace pro.Logic
{
    public class LWRolSubMenu
    {
        private readonly IWRolSubMenu _interface;

        public LWRolSubMenu(DBPRO dbc)
        {
            _interface = new RWRolSubMenu(dbc);
        }

        public async Task<List<MFiltroLista>> GetFiltroListaAsync(MFiltro model)
        {
            return await _interface.GetFiltroListaAsync(model);
        }

        public async Task<List<MFiltroTotal>> GetFiltroTotalAsync(MFiltro model)
        {
            return await _interface.GetFiltroTotalAsync(model);
        }

        public async Task<List<MWRolSubMenuVista>> GetFiltroVistaAsync(MFiltro model)
        {
            return await _interface.GetFiltroVistaAsync(model);
        }

        public async Task<MemoryStream> GetFiltroExportarAsync(MFiltro model)
        {
            List<MWRolSubMenuExportar> list = await _interface.GetFiltroExportarAsync(model);
            return MemoryStreamCC.Export(model, list);
        }

    }
}
