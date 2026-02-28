using Microsoft.EntityFrameworkCore;
using pro.Context;
using pro.Interface;
using pro.Model;

namespace pro.Repository
{
    public class RSexo : ISexo
    {
        private readonly DBPRO _dbc;

        public RSexo(DBPRO dbc)
        {
            _dbc = dbc;
        }

        public async Task<List<MSexo>> GetAsync(int option, MSexo model)
        {
            return option switch
            {
                1 => await _dbc.Sexo.Where(r => r.Id == model.Id).ToListAsync(),
                2 => await _dbc.Sexo.Where(r => r.IdOrganizacion == model.IdOrganizacion).OrderBy(r => r.Sexo).ToListAsync(),
                3 => await _dbc.Sexo.Where(r => r.IdOrganizacion == model.IdOrganizacion && r.Sexo == model.Sexo).ToListAsync(),
                _ => throw new NotImplementedException()
            };
        }

        public async Task<bool> PostAsync(MSexo model)
        {
            model.FechaInserta = DateTime.Now;
            model.IdUsuarioActualiza = 0;
            model.FechaActualiza = new DateTime(1900, 1, 1);

            await _dbc.Sexo.AddAsync(model);
            await _dbc.SaveChangesAsync();

            return true;
        }

        public async Task<bool> PutAsync(int option, MSexo model)
        {
            List<MSexo> lm;

            switch (option)
            {
                case 1:
                    lm = await GetAsync(option: 1, model);

                    lm.ForEach(_model =>
                    {
                        _model.Sexo = model.Sexo;

                        _model.IdUsuarioActualiza = model.IdUsuarioActualiza;
                        _model.FechaActualiza = DateTime.Now;
                    });

                    break;
            }

            await _dbc.SaveChangesAsync();

            return true;
        }

        public async Task<bool> DeleteAsync(int option, List<MSexo> model)
        {
            List<MSexo> lm;

            foreach (MSexo m in model)
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
