using pro.Context;
using pro.Interface;
using pro.Model;
using pro.Repository;

namespace pro.Logic
{
    public class LTranshemodialisis
    {
        public readonly ITranshemodialisis _interface;

        public LTranshemodialisis(DBPRO dbc)
        {
            _interface = new RTranshemodialisis(dbc);
        }

        public async Task<List<MTranshemodialisis>> GetAsync(int option, MTranshemodialisis model)
        {
            return await _interface.GetAsync(option, model);
        }

        public async Task<Boolean> PostAsync(List<MTranshemodialisis> model)
        {
            return await _interface.PostAsync(model);
        }

        public async Task<bool> PutAsync(int option, MTranshemodialisis model)
        {
            return await _interface.PutAsync(option, model);
        }

        public async Task<bool> DeleteAsync(int option, List<MTranshemodialisis> model)
        {
            return await _interface.DeleteAsync(option, model);
        }

    }
}
