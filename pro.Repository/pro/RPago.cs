using Microsoft.EntityFrameworkCore;
using pro.Context;
using pro.Interface;
using pro.Model;

namespace pro.Repository
{
    public class RPago : IPago
    {
        private readonly DBPRO _dbc;

        public RPago(DBPRO dbc)
        {
            _dbc = dbc;
        }

        public async Task<List<MPago>> GetAsync(int option, MPago model)
        {
            return option switch
            {
                1 => await _dbc.Pago.Where(r => r.Id == model.Id).ToListAsync(),
                2 => await _dbc.Pago.Where(r => r.Activo == true && r.IdAgenda == model.IdAgenda).ToListAsync(),
                _ => throw new NotImplementedException()
            };
        }

        public async Task<bool> PostAsync(MPago model)
        {
            model.FechaInserta = DateTime.Now;
            model.IdUsuarioActualiza = 0;
            model.FechaActualiza = new DateTime(1900, 1, 1);

            await _dbc.Pago.AddAsync(model);
            await _dbc.SaveChangesAsync();

            return true;
        }

        public async Task<bool> PutAsync(int option, MPago model)
        {
            List<MPago> lm;

            switch (option)
            {
                case 1:
                    lm = await GetAsync(option: 1, model);

                    lm.ForEach(_model =>
                    {
                        _model.IdFormaPago = model.IdFormaPago;
                        _model.Importe = model.Importe;

                        _model.IdUsuarioActualiza = model.IdUsuarioActualiza;
                        _model.FechaActualiza = DateTime.Now;
                    });

                    break;
            }

            await _dbc.SaveChangesAsync();

            return true;
        }

        public async Task<bool> DeleteAsync(int option, List<MPago> model)
        {
            List<MPago> lm;

            foreach (MPago m in model)
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
