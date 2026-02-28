using pro.Context;
using pro.Interface;
using pro.Model;
using pro.Repository;

namespace pro.Logic
{
    public class LVRolMenu
    {
        private readonly IVRolMenu _interface;

        public LVRolMenu(DBPRO dbc)
        {
            _interface = new RVRolMenu(dbc);
        }

        public async Task<List<MVRolMenu>> GetAsync(int option, MVRolMenu model)
        {
            return await _interface.GetAsync(option, model);
        }

    }
}
