using pro.Context;
using pro.Interface;
using pro.Model;
using pro.Repository;

namespace pro.Logic
{
    public class LColonia
    {
        public readonly IColonia _interface;

        public LColonia(DBPRO dbc)
        {
            _interface = new RColonia(dbc);
        }

        public async Task<List<MColonia>> GetAsync(int option, MColonia model)
        {
            return await _interface.GetAsync(option, model);
        }

        public async Task<bool> PostAsync(MColonia model)
        {
            return await _interface.PostAsync(model);
        }

        public async Task<bool> PutAsync(int option, MColonia model)
        {
            return await _interface.PutAsync(option, model);
        }

        public async Task<bool> DeleteAsync(int option, List<MColonia> model)
        {
            return await _interface.DeleteAsync(option, model);
        }

    }
}
