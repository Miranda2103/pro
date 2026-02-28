using pro.Context;
using pro.Interface;
using pro.Model;
using pro.Repository;

namespace pro.Logic
{
    public class LHemodialisis
    {
        public readonly IHemodialisis _interface;

        public LHemodialisis(DBPRO dbc)
        {
            _interface = new RHemodialisis(dbc);
        }

        public async Task<List<MHemodialisis>> GetAsync(int option, MHemodialisis model)
        {
            return await _interface.GetAsync(option, model);
        }

        public async Task<Int64> PostAsync(MHemodialisis model)
        {
            return await _interface.PostAsync(model);
        }

        public async Task<bool> PutAsync(int option, MHemodialisis model)
        {
            return await _interface.PutAsync(option, model);
        }

        public async Task<bool> DeleteAsync(int option, List<MHemodialisis> model)
        {
            return await _interface.DeleteAsync(option, model);
        }

    }
}
