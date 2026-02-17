using pro.Context;
using pro.Interface.pro;
using pro.Model.pro;
using Microsoft.EntityFrameworkCore;
using System.Data;

namespace pro.Repository.pro
{
    public class RVRolSubMenu : IVRolSubMenu
    {
        private readonly DBPRO _dbc;

        public RVRolSubMenu(DBPRO dbo)
        {
            _dbc = dbo;
        }

        public async Task<List<MVRolSubMenu>> GetAsync(int option, MVRolSubMenu model)
        {
            return option switch
            {
                1 => await _dbc.ViewRolSubMenu.Where(r => r.IdOrganizacion == model.IdOrganizacion && r.Activo == true && r.IdRol == model.IdRol).OrderBy(r => r.Orden).ToListAsync(),
                _ => throw new NotImplementedException()
            };
        }

    }
}
