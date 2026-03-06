using Microsoft.EntityFrameworkCore;
using pro.Context;
using pro.Interface;
using pro.Model;

namespace pro.Repository
{
    public class RAvisoImagen : IAvisoImagen
    {
        private readonly DBPRO _dbc;

        public RAvisoImagen(DBPRO dbc)
        {
            _dbc = dbc;
        }

        public async Task<List<MAvisoImagen>> GetAsync(int option, MAvisoImagen model)
        {
            return option switch
            {
                1 => await _dbc.AvisoImagen.Where(r => r.Id == model.Id).ToListAsync(),
                2 => await _dbc.AvisoImagen.Where(r => r.Activo == true && r.IdAgenda == model.IdAgenda).ToListAsync(),
                _ => throw new NotImplementedException()
            };
        }

        public async Task<Int64> PostAsync(MAvisoImagen model)
        {
            model.FechaInserta = DateTime.Now;
            model.IdUsuarioActualiza = 0;
            model.FechaActualiza = new DateTime(1900, 1, 1);

            await _dbc.AvisoImagen.AddAsync(model);
            await _dbc.SaveChangesAsync();

            return model.Id;
        }

        public async Task<bool> PutAsync(int option, MAvisoImagen model)
        {
            List<MAvisoImagen> lm;

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

        public async Task<bool> DeleteAsync(int option, List<MAvisoImagen> model)
        {
            List<MAvisoImagen> lm;

            foreach (MAvisoImagen m in model)
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
