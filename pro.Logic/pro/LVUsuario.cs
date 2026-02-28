using pro.Context;
using pro.Interface;
using pro.Model;
using pro.Repository;

namespace pro.Logic
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
