using pro.Context;
using pro.Interface;
using pro.Model;
using pro.Repository;

namespace pro.Logic
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
