using Microsoft.EntityFrameworkCore;
using pro.Context;
using pro.Interface;
using pro.Model;
using System.Data;

namespace pro.Repository
{
    public class RVAviso : IVAviso
    {
        private readonly DBPRO _dbc;

        public RVAviso(DBPRO dbo)
        {
            _dbc = dbo;
        }

        public async Task<List<MVAviso>> GetAsync(int option, MVAviso model)
        {
            return option switch
            {
                1 => await _dbc.ViewAviso.Where(r => r.IdPaciente == model.IdPaciente).ToListAsync(),
                _ => throw new NotImplementedException()
            };
        }

    }
}
