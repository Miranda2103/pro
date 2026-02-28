using pro.Context;
using pro.Interface;
using pro.Model;
using pro.Repository;

namespace pro.Logic
{
    public class LOrganizacion
    {
        private readonly IOrganizacion _interface;

        public LOrganizacion(DBPRO dbc)
        {
            _interface = new ROrganizacion(dbc);
        }

        public async Task<List<MOrganizacion>> GetAsync(int option, MOrganizacion model)
        {
            return await _interface.GetAsync(option, model);
        }

        public async Task<long> PostAsync(MOrganizacion model)
        {
            return await _interface.PostAsync(model);
        }

        public async Task<bool> PutAsync(int option, MOrganizacion model)
        {
            return await _interface.PutAsync(option, model);
        }

        public async Task<bool> DeleteAsync(int option, List<MOrganizacion> model)
        {
            return await _interface.DeleteAsync(option, model);
        }

    }
}
