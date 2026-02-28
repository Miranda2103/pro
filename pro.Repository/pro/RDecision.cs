using Microsoft.EntityFrameworkCore;
using pro.Context;
using pro.Interface;
using pro.Model;

namespace pro.Repository
{
    public class RDecision : IDecision
    {
        private readonly DBPRO _dbc;

        public RDecision(DBPRO dbc)
        {
            _dbc = dbc;
        }

        public async Task<List<MDecision>> GetAsync(int option, MDecision model)
        {
            return option switch
            {
                1 => await _dbc.Decision.Where(r => r.Id == model.Id).ToListAsync(),
                2 => await _dbc.Decision.Where(r => r.Activo == true).OrderByDescending(r => r.Decision).ToListAsync(),
                3 => await _dbc.Decision.Where(r => r.Activo == true && r.Decision == model.Decision).ToListAsync(),
                _ => throw new NotImplementedException()
            };
        }

        public async Task<bool> PostAsync(MDecision model)
        {
            model.FechaInserta = DateTime.Now;
            model.IdUsuarioActualiza = 0;
            model.FechaActualiza = new DateTime(1900, 1, 1);

            await _dbc.Decision.AddAsync(model);
            await _dbc.SaveChangesAsync();

            return true;
        }

        public async Task<bool> PutAsync(int option, MDecision model)
        {
            List<MDecision> lm;

            switch (option)
            {
                case 1:
                    lm = await GetAsync(option: 1, model);

                    lm.ForEach(_model =>
                    {
                        _model.Decision = model.Decision;

                        _model.IdUsuarioActualiza = model.IdUsuarioActualiza;
                        _model.FechaActualiza = DateTime.Now;
                    });

                    break;
            }

            await _dbc.SaveChangesAsync();

            return true;
        }

        public async Task<bool> DeleteAsync(int option, List<MDecision> model)
        {
            List<MDecision> lm;

            foreach (MDecision m in model)
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
