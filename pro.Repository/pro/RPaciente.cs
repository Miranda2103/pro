using Microsoft.EntityFrameworkCore;
using pro.Context;
using pro.Interface;
using pro.Model;

namespace pro.Repository
{
    public class RPaciente : IPaciente
    {
        private readonly DBPRO _dbc;

        public RPaciente(DBPRO dbc)
        {
            _dbc = dbc;
        }

        public async Task<List<MPaciente>> GetAsync(int option, MPaciente model)
        {
            return option switch
            {
                1 => await _dbc.Paciente.Where(r => r.Id == model.Id).ToListAsync(),
                2 => await _dbc.Paciente.Where(r => r.Activo == true && r.IdOrganizacion == model.IdOrganizacion).OrderBy(r => r.Paciente).ToListAsync(),
                3 => await _dbc.Paciente.Where(r => r.Activo == true && r.IdOrganizacion == model.IdOrganizacion && r.Paciente == model.Paciente).ToListAsync(),
                _ => throw new NotImplementedException()
            };
        }

        public async Task<long> PostAsync(MPaciente model)
        {
            model.FechaInserta = DateTime.Now;
            model.IdUsuarioActualiza = 0;
            model.FechaActualiza = new DateTime(1900, 1, 1);

            await _dbc.Paciente.AddAsync(model);
            await _dbc.SaveChangesAsync();

            return model.Id;
        }

        public async Task<bool> PutAsync(int option, MPaciente model)
        {
            List<MPaciente> lm;

            switch (option)
            {
                case 1:
                    lm = await GetAsync(option: 1, model);

                    lm.ForEach(_model =>
                    {
                        _model.Paciente = model.Paciente;

                        _model.IdUsuarioActualiza = model.IdUsuarioActualiza;
                        _model.FechaActualiza = DateTime.Now;
                    });

                    break;
            }

            await _dbc.SaveChangesAsync();

            return true;
        }

        public async Task<bool> DeleteAsync(int option, List<MPaciente> model)
        {
            List<MPaciente> lm;

            foreach (MPaciente m in model)
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
