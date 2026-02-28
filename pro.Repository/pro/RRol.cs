using Microsoft.EntityFrameworkCore;
using pro.Context;
using pro.Interface;
using pro.Model;

namespace pro.Repository
{
    public class RRol : IRol
    {
        private readonly DBPRO _dbc;

        public RRol(DBPRO dbc)
        {
            _dbc = dbc;
        }

        public async Task<List<MRol>> GetAsync(int option, MRol model)
        {
            return option switch
            {
                1 => await _dbc.Rol.Where(r => r.Id == model.Id).ToListAsync(),
                2 => await _dbc.Rol.Where(r => r.IdOrganizacion == model.IdOrganizacion).OrderBy(r => r.Rol).ToListAsync(),
                3 => await _dbc.Rol.Where(r => r.IdOrganizacion == model.IdOrganizacion && r.Rol == model.Rol).ToListAsync(),
                _ => throw new NotImplementedException()
            };
        }

        public async Task<bool> PostAsync(MRol model)
        {
            model.FechaInserta = DateTime.Now;
            model.IdUsuarioActualiza = 0;
            model.FechaActualiza = new DateTime(1900, 1, 1);

            await _dbc.Rol.AddAsync(model);
            await _dbc.SaveChangesAsync();

            return true;
        }

        public async Task<bool> PutAsync(int option, MRol model)
        {
            List<MRol> lm;

            switch (option)
            {
                case 1:
                    lm = await GetAsync(option: 1, model);

                    lm.ForEach(_model =>
                    {
                        _model.Rol = model.Rol;

                        _model.IdUsuarioActualiza = model.IdUsuarioActualiza;
                        _model.FechaActualiza = DateTime.Now;
                    });

                    break;
            }

            await _dbc.SaveChangesAsync();

            return true;
        }

        public async Task<bool> DeleteAsync(int option, List<MRol> model)
        {
            List<MRol> lm;

            foreach (MRol m in model)
            {
                switch (option)
                {
                    case 1:
                        lm = await GetAsync(option: 1, m);

                        lm.ForEach(_model =>
                        {
                            _model.IdUsuarioActualiza = m.IdUsuarioActualiza;
                            _model.FechaActualiza = DateTime.Now;
                            _model.Activo = m.Activo;
                        });

                        break;
                }
            }

            await _dbc.SaveChangesAsync();

            return true;
        }

    }
}
