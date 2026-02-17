using pro.Context;
using pro.Interface.pro;
using pro.Model.pro;
using pro.Repository.pro;

namespace pro.Logic.pro
{
    public class LRolMenu
    {
        public readonly IRolMenu _interface;

        public LRolMenu(DBPRO dbc)
        {
            _interface = new RRolMenu(dbc);
        }

        public async Task<List<MRolMenu>> GetAsync(int option, MRolMenu model)
        {
            return await _interface.GetAsync(option, model);
        }

        public async Task<bool> PostAsync(List<MRolMenu> model)
        {
            return await _interface.PostAsync(model);
        }

        public async Task<bool> PutAsync(int option, MRolMenu model)
        {
            return await _interface.PutAsync(option, model);
        }

        public async Task<bool> DeleteAsync(int option, List<MRolMenu> model)
        {
            return await _interface.DeleteAsync(option, model);
        }

    }
}
