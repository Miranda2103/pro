using Microsoft.EntityFrameworkCore;
using pro.Context;
using pro.Interface;
using pro.Model;

namespace pro.Repository
{
    public class RLlegada : ILlegada
    {
        private readonly DBPRO _dbc;

        public RLlegada(DBPRO dbc)
        {
            _dbc = dbc;
        }

        public async Task<List<MLlegada>> GetAsync(int option, MLlegada model)
        {
            return option switch
            {
                1 => await _dbc.Llegada.Where(r => r.Id == model.Id).ToListAsync(),
                2 => await _dbc.Llegada.Where(r => r.Activo == true && r.IdAgenda == model.IdAgenda).ToListAsync(),
                _ => throw new NotImplementedException()
            };
        }

        public async Task<bool> PostAsync(MLlegada model)
        {
            model.FechaInserta = DateTime.Now;
            model.IdUsuarioActualiza = 0;
            model.FechaActualiza = new DateTime(1900, 1, 1);

            await _dbc.Llegada.AddAsync(model);
            await _dbc.SaveChangesAsync();

            return true;
        }

        public async Task<bool> PutAsync(int option, MLlegada model)
        {
            List<MLlegada> lm;

            switch (option)
            {
                case 1:
                    lm = await GetAsync(option: 1, model);

                    lm.ForEach(_model =>
                    {
                        _model.FechaLlegada = model.FechaLlegada;
                        _model.HoraLlegada = model.HoraLlegada;

                        _model.IdUsuarioActualiza = model.IdUsuarioActualiza;
                        _model.FechaActualiza = DateTime.Now;
                    });

                    break;
            }

            await _dbc.SaveChangesAsync();

            return true;
        }

        public async Task<bool> DeleteAsync(int option, List<MLlegada> model)
        {
            List<MLlegada> lm;

            foreach (MLlegada m in model)
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
