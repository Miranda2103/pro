using pro.Context;
using pro.Interface;
using pro.Model;
using pro.Repository;

namespace pro.Logic
{
    public class LVAviso
    {
        private readonly IVAviso _interface;

        public LVAviso(DBPRO dbc)
        {
            _interface = new RVAviso(dbc);
        }

        public async Task<List<MVAviso>> GetAsync(int option, MVAviso model)
        {
            return await _interface.GetAsync(option, model);
        }

    }
}
