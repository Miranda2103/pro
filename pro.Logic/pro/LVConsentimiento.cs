using pro.Context;
using pro.Interface;
using pro.Model;
using pro.Repository;

namespace pro.Logic
{
    public class LVConsentimiento
    {
        private readonly IVConsentimiento _interface;

        public LVConsentimiento(DBPRO dbc)
        {
            _interface = new RVConsentimiento(dbc);
        }

        public async Task<List<MVConsentimiento>> GetAsync(int option, MVConsentimiento model)
        {
            return await _interface.GetAsync(option, model);
        }

    }
}
