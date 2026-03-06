using Microsoft.EntityFrameworkCore;
using pro.Context;
using pro.Interface;
using pro.Model;
using System.Data;

namespace pro.Repository
{
    public class RVTransHemodialisis : IVTransHemodialisis
    {
        private readonly DBPRO _dbc;

        public RVTransHemodialisis(DBPRO dbo)
        {
            _dbc = dbo;
        }

        public async Task<List<MVTransHemodialisis>> GetAsync(int option, MVTransHemodialisis model)
        {
            return option switch
            {
                1 => await _dbc.ViewTransHemodialisis.Where(r => r.IdAgenda == model.IdAgenda).ToListAsync(),
                _ => throw new NotImplementedException()
            };
        }

    }
}
