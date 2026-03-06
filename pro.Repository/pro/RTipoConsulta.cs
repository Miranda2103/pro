using Microsoft.EntityFrameworkCore;
using pro.Context;
using pro.Interface;
using pro.Model;

namespace pro.Repository
{
    public class RTipoConsulta : ITipoConsulta
    {
        private readonly DBPRO _dbc;

        public RTipoConsulta(DBPRO dbc)
        {
            _dbc = dbc;
        }

        public async Task<List<MTipoConsulta>> GetAsync(int option, MTipoConsulta model)
        {
            return option switch
            {
                1 => await _dbc.TipoConsulta.Where(r => r.Id == model.Id).ToListAsync(),
                2 => await _dbc.TipoConsulta.Where(r => r.IdOrganizacion == model.IdOrganizacion).OrderBy(r => r.TipoConsulta).ToListAsync(),
                3 => await _dbc.TipoConsulta.Where(r => r.IdOrganizacion == model.IdOrganizacion && r.TipoConsulta == model.TipoConsulta).ToListAsync(),
                _ => throw new NotImplementedException()
            };
        }

        public async Task<bool> PostAsync(MTipoConsulta model)
        {
            model.FechaInserta = DateTime.Now;
            model.IdUsuarioActualiza = 0;
            model.FechaActualiza = new DateTime(1900, 1, 1);

            await _dbc.TipoConsulta.AddAsync(model);
            await _dbc.SaveChangesAsync();

            return true;
        }

        public async Task<bool> PutAsync(int option, MTipoConsulta model)
        {
            List<MTipoConsulta> lm;

            switch (option)
            {
                case 1:
                    lm = await GetAsync(option: 1, model);

                    lm.ForEach(_model =>
                    {
                        _model.TipoConsulta = model.TipoConsulta;

                        _model.IdUsuarioActualiza = model.IdUsuarioActualiza;
                        _model.FechaActualiza = DateTime.Now;
                    });

                    break;
            }

            await _dbc.SaveChangesAsync();

            return true;
        }

        public async Task<bool> DeleteAsync(int option, List<MTipoConsulta> model)
        {
            List<MTipoConsulta> lm;

            foreach (MTipoConsulta m in model)
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
