using Microsoft.EntityFrameworkCore;
using pro.Context;
using pro.Interface;
using pro.Model;

namespace pro.Repository
{
    public class RSubMenu : ISubMenu
    {
        private readonly DBPRO _dbc;

        public RSubMenu(DBPRO dbc)
        {
            _dbc = dbc;
        }

        public async Task<List<MSubMenu>> GetAsync(int option, MSubMenu model)
        {
            return option switch
            {
                1 => await _dbc.SubMenu.Where(r => r.Id == model.Id).ToListAsync(),
                2 => await _dbc.SubMenu.OrderBy(r => r.SubMenu).ToListAsync(),
                3 => await _dbc.SubMenu.Where(r => r.SubMenu == model.SubMenu).ToListAsync(),
                _ => throw new NotImplementedException()
            };
        }

        public async Task<bool> PostAsync(MSubMenu model)
        {
            model.FechaInserta = DateTime.Now;
            model.IdUsuarioActualiza = 0;
            model.FechaActualiza = new DateTime(1900, 1, 1);

            await _dbc.SubMenu.AddAsync(model);
            await _dbc.SaveChangesAsync();

            return true;
        }

        public async Task<bool> PutAsync(int option, MSubMenu model)
        {
            List<MSubMenu> lm;

            switch (option)
            {
                case 1:
                    lm = await GetAsync(option: 1, model);

                    lm.ForEach(_model =>
                    {
                        _model.SubMenu = model.SubMenu;
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

        public async Task<bool> DeleteAsync(int option, List<MSubMenu> model)
        {
            List<MSubMenu> lm;

            foreach (MSubMenu m in model)
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
