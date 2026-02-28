using pro.Context;
using pro.Interface;
using pro.Model;
using pro.Repository;

namespace pro.Logic
{
    public class LAgenda
    {
        public readonly IAgenda _interface;

        public LAgenda(DBPRO dbc)
        {
            _interface = new RAgenda(dbc);
        }

        public async Task<List<MAgenda>> GetAsync(int option, MAgenda model)
        {
            return await _interface.GetAsync(option, model);
        }

        public async Task<Int64> PostAsync(MAgenda model)
        {
            return await _interface.PostAsync(model);
        }

        public async Task<bool> PutAsync(int option, MAgenda model)
        {
            return await _interface.PutAsync(option, model);
        }

        public async Task<bool> DeleteAsync(int option, List<MAgenda> model)
        {
            return await _interface.DeleteAsync(option, model);
        }

    }
}
