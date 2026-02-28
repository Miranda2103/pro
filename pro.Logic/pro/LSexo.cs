using pro.Context;
using pro.Interface;
using pro.Model;
using pro.Repository;

namespace pro.Logic
{
    public class LSexo
    {
        public readonly ISexo _interface;

        public LSexo(DBPRO dbc)
        {
            _interface = new RSexo(dbc);
        }

        public async Task<List<MSexo>> GetAsync(int option, MSexo model)
        {
            return await _interface.GetAsync(option, model);
        }

        public async Task<bool> PostAsync(MSexo model)
        {
            return await _interface.PostAsync(model);
        }

        public async Task<bool> PutAsync(int option, MSexo model)
        {
            return await _interface.PutAsync(option, model);
        }

        public async Task<bool> DeleteAsync(int option, List<MSexo> model)
        {
            return await _interface.DeleteAsync(option, model);
        }

    }
}
