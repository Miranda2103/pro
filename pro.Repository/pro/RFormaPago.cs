using Microsoft.EntityFrameworkCore;
using pro.Context;
using pro.Interface;
using pro.Model;

namespace pro.Repository
{
    public class RFormaPago : IFormaPago
    {
        private readonly DBPRO _dbc;

        public RFormaPago(DBPRO dbc)
        {
            _dbc = dbc;
        }

        public async Task<List<MFormaPago>> GetAsync(int option, MFormaPago model)
        {
            return option switch
            {
                1 => await _dbc.FormaPago.Where(r => r.Id == model.Id).ToListAsync(),
                2 => await _dbc.FormaPago.Where(r => r.IdOrganizacion == model.IdOrganizacion).OrderBy(r => r.FormaPago).ToListAsync(),
                3 => await _dbc.FormaPago.Where(r => r.IdOrganizacion == model.IdOrganizacion && r.FormaPago == model.FormaPago).ToListAsync(),
                _ => throw new NotImplementedException()
            };
        }

        public async Task<bool> PostAsync(MFormaPago model)
        {
            model.FechaInserta = DateTime.Now;
            model.IdUsuarioActualiza = 0;
            model.FechaActualiza = new DateTime(1900, 1, 1);

            await _dbc.FormaPago.AddAsync(model);
            await _dbc.SaveChangesAsync();

            return true;
        }

        public async Task<bool> PutAsync(int option, MFormaPago model)
        {
            List<MFormaPago> lm;

            switch (option)
            {
                case 1:
                    lm = await GetAsync(option: 1, model);

                    lm.ForEach(_model =>
                    {
                        _model.FormaPago = model.FormaPago;

                        _model.IdUsuarioActualiza = model.IdUsuarioActualiza;
                        _model.FechaActualiza = DateTime.Now;
                    });

                    break;
            }

            await _dbc.SaveChangesAsync();

            return true;
        }

        public async Task<bool> DeleteAsync(int option, List<MFormaPago> model)
        {
            List<MFormaPago> lm;

            foreach (MFormaPago m in model)
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
