using pro.Context;
using pro.Interface;
using pro.Model;
using pro.Repository;

namespace pro.Logic
{
    public class LRolSubMenu
    {
        public readonly IRolSubMenu _interface;

        public LRolSubMenu(DBPRO dbc)
        {
            _interface = new RRolSubMenu(dbc);
        }

        public async Task<List<MRolSubMenu>> GetAsync(int option, MRolSubMenu model)
        {
            return await _interface.GetAsync(option, model);
        }

        public async Task<bool> PostAsync(List<MRolSubMenu> model)
        {
            return await _interface.PostAsync(model);
        }

        public async Task<bool> PutAsync(int option, MRolSubMenu model)
        {
            return await _interface.PutAsync(option, model);
        }

        public async Task<bool> DeleteAsync(int option, List<MRolSubMenu> model)
        {
            return await _interface.DeleteAsync(option, model);
        }

    }
}
