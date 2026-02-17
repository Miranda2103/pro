using pro.Context;
using pro.Interface.pro;
using pro.Model.pro;
using pro.Repository.pro;

namespace pro.Logic.pro
{
    public class LMenu
    {
        public readonly IMenu _interface;

        public LMenu(DBPRO dbc)
        {
            _interface = new RMenu(dbc);
        }

        public async Task<List<MMenu>> GetAsync(int option, MMenu model)
        {
            return await _interface.GetAsync(option, model);
        }

        public async Task<bool> PostAsync(MMenu model)
        {
            return await _interface.PostAsync(model);
        }

        public async Task<bool> PutAsync(int option, MMenu model)
        {
            return await _interface.PutAsync(option, model);
        }

        public async Task<bool> DeleteAsync(int option, List<MMenu> model)
        {
            return await _interface.DeleteAsync(option, model);
        }

    }
}
