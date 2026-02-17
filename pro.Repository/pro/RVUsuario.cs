using Microsoft.EntityFrameworkCore;
using pro.Context;
using pro.Interface.pro;
using pro.Model.pro;
using System.Data;

namespace pro.Repository.pro
{
    public class RVUsuario : IVUsuario
    {
        private readonly DBPRO _dbc;

        public RVUsuario(DBPRO dbo)
        {
            _dbc = dbo;
        }

        public async Task<List<MVUsuario>> GetAsync(int option, MVUsuario model)
        {
            return option switch
            {
                1 => await _dbc.ViewUsuario.Where(r => r.IdOrganizacion == model.IdOrganizacion).OrderBy(r => r.Usuario).ToListAsync(),
                2 => await _dbc.ViewUsuario.Where(r => r.IdOrganizacion == model.IdOrganizacion && r.IdUsuario == model.IdUsuario).ToListAsync(),
                3 => await _dbc.ViewUsuario.Where(r => r.IdOrganizacion == model.IdOrganizacion && r.Usuario == model.Usuario && r.Contrasena == model.Contrasena).ToListAsync(),
                _ => throw new NotImplementedException()
            };
        }

    }
}
