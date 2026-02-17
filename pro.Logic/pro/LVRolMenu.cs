using pro.Context;
using pro.Interface.pro;
using pro.Model.pro;
using pro.Repository.pro;

namespace pro.Logic.pro
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
