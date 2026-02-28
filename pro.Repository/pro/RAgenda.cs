using Microsoft.EntityFrameworkCore;
using pro.Context;
using pro.Interface;
using pro.Model;

namespace pro.Repository
{
    public class RAgenda : IAgenda
    {
        private readonly DBPRO _dbc;

        public RAgenda(DBPRO dbc)
        {
            _dbc = dbc;
        }

        public async Task<List<MAgenda>> GetAsync(int option, MAgenda model)
        {
            return option switch
            {
                1 => await _dbc.Agenda.Where(r => r.Id == model.Id).ToListAsync(),
                2 => await _dbc.Agenda.Where(r => r.Activo == true && r.IdOrganizacion == model.IdOrganizacion).OrderBy(r => r.FechaAgenda).ToListAsync(),
                _ => throw new NotImplementedException()
            };
        }

        public async Task<Int64> PostAsync(MAgenda model)
        {
            model.FechaInserta = DateTime.Now;
            model.IdUsuarioActualiza = 0;
            model.FechaActualiza = new DateTime(1900, 1, 1);

            await _dbc.Agenda.AddAsync(model);
            await _dbc.SaveChangesAsync();

            return model.Id;
        }

        public async Task<bool> PutAsync(int option, MAgenda model)
        {
            List<MAgenda> lm;

            switch (option)
            {
                case 1:
                    lm = await GetAsync(option: 1, model);

                    lm.ForEach(_model =>
                    {
                        _model.Comentario = model.Comentario;
                        _model.FechaAgenda = model.FechaAgenda;
                        _model.FechaInicio = model.FechaInicio;
                        _model.FechaFin = model.FechaFin;

                        _model.IdUsuarioActualiza = model.IdUsuarioActualiza;
                        _model.FechaActualiza = DateTime.Now;
                    });

                    break;
            }

            await _dbc.SaveChangesAsync();

            return true;
        }

        public async Task<bool> DeleteAsync(int option, List<MAgenda> model)
        {
            List<MAgenda> lm;

            foreach (MAgenda m in model)
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
