using pro.Context;
using pro.Interface;
using pro.Model;
using pro.Repository;

namespace pro.Logic
{
    public class LFormaPago
    {
        public readonly IFormaPago _interface;

        public LFormaPago(DBPRO dbc)
        {
            _interface = new RFormaPago(dbc);
        }

        public async Task<List<MFormaPago>> GetAsync(int option, MFormaPago model)
        {
            return await _interface.GetAsync(option, model);
        }

        public async Task<bool> PostAsync(MFormaPago model)
        {
            return await _interface.PostAsync(model);
        }

        public async Task<bool> PutAsync(int option, MFormaPago model)
        {
            return await _interface.PutAsync(option, model);
        }

        public async Task<bool> DeleteAsync(int option, List<MFormaPago> model)
        {
            return await _interface.DeleteAsync(option, model);
        }

    }
}
