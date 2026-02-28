using Microsoft.EntityFrameworkCore;
using pro.Context;
using pro.Interface;
using pro.Model;

namespace pro.Repository
{
    public class REquipo : IEquipo
    {
        private readonly DBPRO _dbc;

        public REquipo(DBPRO dbc)
        {
            _dbc = dbc;
        }

        public async Task<List<MEquipo>> GetAsync(int option, MEquipo model)
        {
            return option switch
            {
                1 => await _dbc.Equipo.Where(r => r.Id == model.Id).ToListAsync(),
                2 => await _dbc.Equipo.Where(r => r.IdOrganizacion == model.IdOrganizacion).OrderBy(r => r.Equipo).ToListAsync(),
                3 => await _dbc.Equipo.Where(r => r.IdOrganizacion == model.IdOrganizacion && r.Equipo == model.Equipo).ToListAsync(),
                _ => throw new NotImplementedException()
            };
        }

        public async Task<bool> PostAsync(MEquipo model)
        {
            model.FechaInserta = DateTime.Now;
            model.IdUsuarioActualiza = 0;
            model.FechaActualiza = new DateTime(1900, 1, 1);

            await _dbc.Equipo.AddAsync(model);
            await _dbc.SaveChangesAsync();

            return true;
        }

        public async Task<bool> PutAsync(int option, MEquipo model)
        {
            List<MEquipo> lm;

            switch (option)
            {
                case 1:
                    lm = await GetAsync(option: 1, model);

                    lm.ForEach(_model =>
                    {
                        _model.Equipo = model.Equipo;

                        _model.IdUsuarioActualiza = model.IdUsuarioActualiza;
                        _model.FechaActualiza = DateTime.Now;
                    });

                    break;
            }

            await _dbc.SaveChangesAsync();

            return true;
        }

        public async Task<bool> DeleteAsync(int option, List<MEquipo> model)
        {
            List<MEquipo> lm;

            foreach (MEquipo m in model)
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
