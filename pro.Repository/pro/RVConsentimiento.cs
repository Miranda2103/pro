using Microsoft.EntityFrameworkCore;
using pro.Context;
using pro.Interface;
using pro.Model;
using System.Data;

namespace pro.Repository
{
    public class RVConsentimiento : IVConsentimiento
    {
        private readonly DBPRO _dbc;

        public RVConsentimiento(DBPRO dbo)
        {
            _dbc = dbo;
        }

        public async Task<List<MVConsentimiento>> GetAsync(int option, MVConsentimiento model)
        {
            return option switch
            {
                1 => await _dbc.ViewConsentimiento.Where(r => r.IdPaciente == model.IdPaciente).ToListAsync(),
                _ => throw new NotImplementedException()
            };
        }

    }
}
