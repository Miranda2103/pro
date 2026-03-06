using pro.Context;
using pro.Interface;
using pro.Model;
using pro.Repository;

namespace pro.Logic
{
    public class LVPago
    {
        private readonly IVPago _interface;

        public LVPago(DBPRO dbc)
        {
            _interface = new RVPago(dbc);
        }

        public async Task<List<MVPago>> GetAsync(int option, MVPago model)
        {
            return await _interface.GetAsync(option, model);
        }

    }
}
