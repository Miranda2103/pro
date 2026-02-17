using pro.Context;
using pro.Interface.pro;
using pro.Model.pro;
using pro.Repository.pro;

namespace pro.Logic.pro
{
    public class LVRolSubMenu
    {
        private readonly IVRolSubMenu _interface;

        public LVRolSubMenu(DBPRO dbc)
        {
            _interface = new RVRolSubMenu(dbc);
        }

        public async Task<List<MVRolSubMenu>> GetAsync(int option, MVRolSubMenu model)
        {
            return await _interface.GetAsync(option, model);
        }

    }
}
