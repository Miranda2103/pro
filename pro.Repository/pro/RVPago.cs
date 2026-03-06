using Microsoft.EntityFrameworkCore;
using pro.Context;
using pro.Interface;
using pro.Model;
using System.Data;

namespace pro.Repository
{
    public class RVPago : IVPago
    {
        private readonly DBPRO _dbc;

        public RVPago(DBPRO dbo)
        {
            _dbc = dbo;
        }

        public async Task<List<MVPago>> GetAsync(int option, MVPago model)
        {
            return option switch
            {
                1 => await _dbc.ViewPago.Where(r => r.IdAgenda == model.IdAgenda).ToListAsync(),
                _ => throw new NotImplementedException()
            };
        }

    }
}
