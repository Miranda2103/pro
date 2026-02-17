using pro.Context;
using pro.Interface.pro;
using pro.Model.pro;
using pro.Repository.pro;

namespace pro.Logic.pro
{
    public class LSubMenu
    {
        public readonly ISubMenu _interface;

        public LSubMenu(DBPRO dbc)
        {
            _interface = new RSubMenu(dbc);
        }

        public async Task<List<MSubMenu>> GetAsync(int option, MSubMenu model)
        {
            return await _interface.GetAsync(option, model);
        }

        public async Task<bool> PostAsync(MSubMenu model)
        {
            return await _interface.PostAsync(model);
        }

        public async Task<bool> PutAsync(int option, MSubMenu model)
        {
            return await _interface.PutAsync(option, model);
        }

        public async Task<bool> DeleteAsync(int option, List<MSubMenu> model)
        {
            return await _interface.DeleteAsync(option, model);
        }

    }
}
