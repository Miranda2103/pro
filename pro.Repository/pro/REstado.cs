using Microsoft.EntityFrameworkCore;
using pro.Context;
using pro.Interface;
using pro.Model;

namespace pro.Repository
{
    public class REstado : IEstado
    {
        private readonly DBPRO _dbc;

        public REstado(DBPRO dbc)
        {
            _dbc = dbc;
        }

        public async Task<List<MEstado>> GetAsync(int option, MEstado model)
        {
            return option switch
            {
                1 => await _dbc.Estado.Where(r => r.Id == model.Id).ToListAsync(),
                2 => await _dbc.Estado.Where(r => r.Activo == true).OrderBy(r => r.Estado).ToListAsync(),
                3 => await _dbc.Estado.Where(r => r.Activo == true && r.Estado == model.Estado).ToListAsync(),
                _ => throw new NotImplementedException()
            };
        }

        public async Task<bool> PostAsync(MEstado model)
        {
            model.FechaInserta = DateTime.Now;
            model.IdUsuarioActualiza = 0;
            model.FechaActualiza = new DateTime(1900, 1, 1);

            await _dbc.Estado.AddAsync(model);
            await _dbc.SaveChangesAsync();

            return true;
        }

        public async Task<bool> PutAsync(int option, MEstado model)
        {
            List<MEstado> lm;

            switch (option)
            {
                case 1:
                    lm = await GetAsync(option: 1, model);

                    lm.ForEach(_model =>
                    {
                        _model.Estado = model.Estado;

                        _model.IdUsuarioActualiza = model.IdUsuarioActualiza;
                        _model.FechaActualiza = DateTime.Now;
                    });

                    break;
            }

            await _dbc.SaveChangesAsync();

            return true;
        }

        public async Task<bool> DeleteAsync(int option, List<MEstado> model)
        {
            List<MEstado> lm;

            foreach (MEstado m in model)
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
