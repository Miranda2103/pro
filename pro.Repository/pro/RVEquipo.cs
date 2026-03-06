using Microsoft.EntityFrameworkCore;
using pro.Context;
using pro.Interface;
using pro.Model;
using System.Data;

namespace pro.Repository
{
    public class RVEquipo : IVEquipo
    {
        private readonly DBPRO _dbc;

        public RVEquipo(DBPRO dbo)
        {
            _dbc = dbo;
        }

        public async Task<List<MVEquipo>> GetAsync(int option, MVEquipo model)
        {
            return option switch
            {
                1 => await _dbc.ViewEquipo.Where(r => r.Activo == true && r.IdOrganizacion == model.IdOrganizacion).ToListAsync(),
                _ => throw new NotImplementedException()
            };
        }

    }
}
