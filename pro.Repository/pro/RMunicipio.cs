using Microsoft.EntityFrameworkCore;
using pro.Context;
using pro.Interface;
using pro.Model;

namespace pro.Repository
{
    public class RMunicipio : IMunicipio
    {
        private readonly DBPRO _dbc;

        public RMunicipio(DBPRO dbc)
        {
            _dbc = dbc;
        }

        public async Task<List<MMunicipio>> GetAsync(int option, MMunicipio model)
        {
            return option switch
            {
                1 => await _dbc.Municipio.Where(r => r.Id == model.Id).ToListAsync(),
                2 => await _dbc.Municipio.Where(r => r.Activo == true && r.IdEstado == model.IdEstado).OrderBy(r => r.Municipio).ToListAsync(),
                3 => await _dbc.Municipio.Where(r => r.Activo == true && r.IdEstado == model.IdEstado && r.Municipio == model.Municipio).ToListAsync(),
                _ => throw new NotImplementedException()
            };
        }

        public async Task<bool> PostAsync(MMunicipio model)
        {
            model.FechaInserta = DateTime.Now;
            model.IdUsuarioActualiza = 0;
            model.FechaActualiza = new DateTime(1900, 1, 1);

            await _dbc.Municipio.AddAsync(model);
            await _dbc.SaveChangesAsync();

            return true;
        }

        public async Task<bool> PutAsync(int option, MMunicipio model)
        {
            List<MMunicipio> lm;

            switch (option)
            {
                case 1:
                    lm = await GetAsync(option: 1, model);

                    lm.ForEach(_model =>
                    {
                        _model.Municipio = model.Municipio;

                        _model.IdUsuarioActualiza = model.IdUsuarioActualiza;
                        _model.FechaActualiza = DateTime.Now;
                    });

                    break;
            }

            await _dbc.SaveChangesAsync();

            return true;
        }

        public async Task<bool> DeleteAsync(int option, List<MMunicipio> model)
        {
            List<MMunicipio> lm;

            foreach (MMunicipio m in model)
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
