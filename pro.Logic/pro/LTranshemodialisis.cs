using pro.Context;
using pro.Interface;
using pro.Model;
using pro.Repository;

namespace pro.Logic
{
    public class LTransHemodialisis
    {
        public readonly ITransHemodialisis _interface;

        public LTransHemodialisis(DBPRO dbc)
        {
            _interface = new RTransHemodialisis(dbc);
        }

        public async Task<List<MTransHemodialisis>> GetAsync(int option, MTransHemodialisis model)
        {
            return await _interface.GetAsync(option, model);
        }

        public async Task<Boolean> PostAsync(List<MTransHemodialisis> model)
        {
            return await _interface.PostAsync(model);
        }

        public async Task<bool> PutAsync(int option, MTransHemodialisis model)
        {
            return await _interface.PutAsync(option, model);
        }

        public async Task<bool> DeleteAsync(int option, List<MTransHemodialisis> model)
        {
            return await _interface.DeleteAsync(option, model);
        }

    }
}
