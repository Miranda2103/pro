using pro.Context;
using pro.Interface;
using pro.Model;
using pro.Repository;

namespace pro.Logic
{
    public class LVHemodialisis
    {
        private readonly IVHemodialisis _interface;

        public LVHemodialisis(DBPRO dbc)
        {
            _interface = new RVHemodialisis(dbc);
        }

        public async Task<List<MVHemodialisis>> GetAsync(int option, MVHemodialisis model)
        {
            return await _interface.GetAsync(option, model);
        }

    }
}
