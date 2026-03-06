using pro.Context;
using pro.Interface;
using pro.Model;
using pro.Repository;

namespace pro.Logic
{
    public class LVEquipo
    {
        private readonly IVEquipo _interface;

        public LVEquipo(DBPRO dbc)
        {
            _interface = new RVEquipo(dbc);
        }

        public async Task<List<MVEquipo>> GetAsync(int option, MVEquipo model)
        {
            return await _interface.GetAsync(option, model);
        }

    }
}
