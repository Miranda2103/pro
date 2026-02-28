using Microsoft.EntityFrameworkCore;
using pro.Context;
using pro.Interface;
using pro.Model;
using System.Data;

namespace pro.Repository
{
    public class RVRolMenu : IVRolMenu
    {
        private readonly DBPRO _dbc;

        public RVRolMenu(DBPRO dbo)
        {
            _dbc = dbo;
        }

        public async Task<List<MVRolMenu>> GetAsync(int option, MVRolMenu model)
        {
            return option switch
            {
                1 => await _dbc.ViewRolMenu.Where(r => r.IdOrganizacion == model.IdOrganizacion && r.Activo == true && r.IdRol == model.IdRol).OrderBy(r => r.Orden).ToListAsync(),
                _ => throw new NotImplementedException()
            };
        }

    }
}
