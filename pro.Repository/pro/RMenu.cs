using Microsoft.EntityFrameworkCore;
using pro.Context;
using pro.Interface;
using pro.Model;

namespace pro.Repository
{
    public class RMenu : IMenu
    {
        private readonly DBPRO _dbc;

        public RMenu(DBPRO dbc)
        {
            _dbc = dbc;
        }

        public async Task<List<MMenu>> GetAsync(int option, MMenu model)
        {
            return option switch
            {
                1 => await _dbc.Menu.Where(r => r.Id == model.Id).ToListAsync(),
                2 => await _dbc.Menu.OrderBy(r => r.Menu).ToListAsync(),
                3 => await _dbc.Menu.Where(r => r.Menu == model.Menu).ToListAsync(),
                _ => throw new NotImplementedException()
            };
        }

        public async Task<bool> PostAsync(MMenu model)
        {
            model.FechaInserta = DateTime.Now;
            model.IdUsuarioActualiza = 0;
            model.FechaActualiza = new DateTime(1900, 1, 1);

            await _dbc.Menu.AddAsync(model);
            await _dbc.SaveChangesAsync();

            return true;
        }

        public async Task<bool> PutAsync(int option, MMenu model)
        {
            List<MMenu> lm;

            switch (option)
            {
                case 1:
                    lm = await GetAsync(option: 1, model);

                    lm.ForEach(_model =>
                    {
                        _model.Menu = model.Menu;
                        _model.Icono = model.Icono;
                        _model.Orden = model.Orden;

                        _model.IdUsuarioActualiza = model.IdUsuarioActualiza;
                        _model.FechaActualiza = DateTime.Now;
                    });

                    break;
            }

            await _dbc.SaveChangesAsync();

            return true;
        }

        public async Task<bool> DeleteAsync(int option, List<MMenu> model)
        {
            List<MMenu> lm;

            foreach (MMenu m in model)
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
