using Microsoft.EntityFrameworkCore;
using pro.Context;
using pro.Interface;
using pro.Model;

namespace pro.Repository
{
    public class RPagoImagen : IPagoImagen
    {
        private readonly DBPRO _dbc;

        public RPagoImagen(DBPRO dbc)
        {
            _dbc = dbc;
        }

        public async Task<List<MPagoImagen>> GetAsync(int option, MPagoImagen model)
        {
            return option switch
            {
                1 => await _dbc.PagoImagen.Where(r => r.Id == model.Id).ToListAsync(),
                2 => await _dbc.PagoImagen.Where(r => r.Activo == true && r.IdAgenda == model.IdAgenda).ToListAsync(),
                _ => throw new NotImplementedException()
            };
        }

        public async Task<Int64> PostAsync(MPagoImagen model)
        {
            model.FechaInserta = DateTime.Now;
            model.IdUsuarioActualiza = 0;
            model.FechaActualiza = new DateTime(1900, 1, 1);

            await _dbc.PagoImagen.AddAsync(model);
            await _dbc.SaveChangesAsync();

            return model.Id;
        }

        public async Task<bool> PutAsync(int option, MPagoImagen model)
        {
            List<MPagoImagen> lm;

            switch (option)
            {
                case 1:
                    lm = await GetAsync(option: 1, model);

                    lm.ForEach(_model =>
                    {
                        _model.Ruta = model.Ruta;
                        _model.Nombre = model.Nombre;
                        _model.Extension = model.Extension;

                        _model.IdUsuarioActualiza = model.IdUsuarioActualiza;
                        _model.FechaActualiza = DateTime.Now;
                    });

                    break;
            }

            await _dbc.SaveChangesAsync();

            return true;
        }

        public async Task<bool> DeleteAsync(int option, List<MPagoImagen> model)
        {
            List<MPagoImagen> lm;

            foreach (MPagoImagen m in model)
            {
                switch (option)
                {
                    case 1:
                        lm = await GetAsync(option: 2, m);

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
