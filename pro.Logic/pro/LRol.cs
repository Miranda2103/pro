using pro.Context;
using pro.Interface;
using pro.Model;
using pro.Repository;

namespace pro.Logic
{
    public class LRol
    {
        public readonly IRol _interface;

        public LRol(DBPRO dbc)
        {
            _interface = new RRol(dbc);
        }

        public async Task<List<MRol>> GetAsync(int option, MRol model)
        {
            return await _interface.GetAsync(option, model);
        }

        public async Task<bool> PostAsync(MRol model)
        {
            return await _interface.PostAsync(model);
        }

        public async Task<bool> PutAsync(int option, MRol model)
        {
            return await _interface.PutAsync(option, model);
        }

        public async Task<bool> DeleteAsync(int option, List<MRol> model)
        {
            return await _interface.DeleteAsync(option, model);
        }

    }
}
