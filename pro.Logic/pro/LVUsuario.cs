using pro.Context;
using pro.Interface.pro;
using pro.Model.pro;
using pro.Repository.pro;

namespace pro.Logic.pro
{
    public class LVUsuario
    {
        private readonly IVUsuario _interface;

        public LVUsuario(DBPRO dbc)
        {
            _interface = new RVUsuario(dbc);
        }

        public async Task<List<MVUsuario>> GetAsync(int option, MVUsuario model)
        {
            return await _interface.GetAsync(option, model);
        }

    }
}
