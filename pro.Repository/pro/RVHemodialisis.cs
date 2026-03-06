using Microsoft.EntityFrameworkCore;
using pro.Context;
using pro.Interface;
using pro.Model;
using System.Data;

namespace pro.Repository
{
    public class RVHemodialisis : IVHemodialisis
    {
        private readonly DBPRO _dbc;

        public RVHemodialisis(DBPRO dbo)
        {
            _dbc = dbo;
        }

        public async Task<List<MVHemodialisis>> GetAsync(int option, MVHemodialisis model)
        {
            return option switch
            {
                1 => await _dbc.ViewHemodialisis.Where(r => r.IdAgenda == model.IdAgenda).ToListAsync(),
                _ => throw new NotImplementedException()
            };
        }

    }
}
