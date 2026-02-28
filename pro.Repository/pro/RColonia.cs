using Microsoft.EntityFrameworkCore;
using pro.Context;
using pro.Interface;
using pro.Model;

namespace pro.Repository
{
    public class RColonia : IColonia
    {
        private readonly DBPRO _dbc;

        public RColonia(DBPRO dbc)
        {
            _dbc = dbc;
        }

        public async Task<List<MColonia>> GetAsync(int option, MColonia model)
        {
            return option switch
            {
                1 => await _dbc.Colonia.Where(r => r.Id == model.Id).ToListAsync(),
                2 => await _dbc.Colonia.Where(r => r.Activo == true && r.IdEstado == model.IdEstado && r.IdMunicipio == model.IdMunicipio).OrderBy(r => r.Colonia).ToListAsync(),
                3 => await _dbc.Colonia.Where(r => r.Activo == true && r.IdEstado == model.IdEstado && r.IdMunicipio == model.IdMunicipio && r.Colonia == model.Colonia).ToListAsync(),
                _ => throw new NotImplementedException()
            };
        }

        public async Task<bool> PostAsync(MColonia model)
        {
            model.FechaInserta = DateTime.Now;
            model.IdUsuarioActualiza = 0;
            model.FechaActualiza = new DateTime(1900, 1, 1);

            await _dbc.Colonia.AddAsync(model);
            await _dbc.SaveChangesAsync();

            return true;
        }

        public async Task<bool> PutAsync(int option, MColonia model)
        {
            List<MColonia> lm;

            switch (option)
            {
                case 1:
                    lm = await GetAsync(option: 1, model);

                    lm.ForEach(_model =>
                    {
                        _model.Colonia = model.Colonia;

                        _model.IdUsuarioActualiza = model.IdUsuarioActualiza;
                        _model.FechaActualiza = DateTime.Now;
                    });

                    break;
            }

            await _dbc.SaveChangesAsync();

            return true;
        }

        public async Task<bool> DeleteAsync(int option, List<MColonia> model)
        {
            List<MColonia> lm;

            foreach (MColonia m in model)
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
