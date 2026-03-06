using Microsoft.EntityFrameworkCore;
using pro.Context;
using pro.Interface;
using pro.Model;

namespace pro.Repository
{
    public class RConsentimientoImagen : IConsentimientoImagen
    {
        private readonly DBPRO _dbc;

        public RConsentimientoImagen(DBPRO dbc)
        {
            _dbc = dbc;
        }

        public async Task<List<MConsentimientoImagen>> GetAsync(int option, MConsentimientoImagen model)
        {
            return option switch
            {
                1 => await _dbc.ConsentimientoImagen.Where(r => r.Id == model.Id).ToListAsync(),
                2 => await _dbc.ConsentimientoImagen.Where(r => r.Activo == true && r.IdAgenda == model.IdAgenda).ToListAsync(),
                _ => throw new NotImplementedException()
            };
        }

        public async Task<Int64> PostAsync(MConsentimientoImagen model)
        {
            model.FechaInserta = DateTime.Now;
            model.IdUsuarioActualiza = 0;
            model.FechaActualiza = new DateTime(1900, 1, 1);

            await _dbc.ConsentimientoImagen.AddAsync(model);
            await _dbc.SaveChangesAsync();

            return model.Id;
        }

        public async Task<bool> PutAsync(int option, MConsentimientoImagen model)
        {
            List<MConsentimientoImagen> lm;

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

        public async Task<bool> DeleteAsync(int option, List<MConsentimientoImagen> model)
        {
            List<MConsentimientoImagen> lm;

            foreach (MConsentimientoImagen m in model)
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
