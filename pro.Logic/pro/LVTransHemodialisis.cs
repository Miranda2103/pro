using pro.Context;
using pro.Interface;
using pro.Model;
using pro.Repository;

namespace pro.Logic
{
    public class LVTransHemodialisis
    {
        private readonly IVTransHemodialisis _interface;

        public LVTransHemodialisis(DBPRO dbc)
        {
            _interface = new RVTransHemodialisis(dbc);
        }

        public async Task<List<MVTransHemodialisis>> GetAsync(int option, MVTransHemodialisis model)
        {
            return await _interface.GetAsync(option, model);
        }

    }
}
