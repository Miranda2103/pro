using Microsoft.EntityFrameworkCore;
using pro.Context;
using pro.Interface.pro;
using pro.Model.pro;

namespace pro.Repository.pro
{
    public class RRolSubMenu : IRolSubMenu
    {
        private readonly DBPRO _dbc;

        public RRolSubMenu(DBPRO dbc)
        {
            _dbc = dbc;
        }

        public async Task<List<MRolSubMenu>> GetAsync(int option, MRolSubMenu model)
        {
            return option switch
            {
                1 => await _dbc.RolSubMenu.Where(r => r.IdRol == model.IdRol && r.Activo == true).ToListAsync(),
                _ => throw new NotImplementedException()
            };
        }

        public async Task<bool> PostAsync(List<MRolSubMenu> model)
        {
            model.ForEach(_model =>
            {
                _model.FechaInserta = DateTime.Now;
                _model.IdUsuarioActualiza = 0;
                _model.FechaActualiza = new DateTime(1900, 1, 1);                
            });

            await _dbc.RolSubMenu.AddRangeAsync(model);
            await _dbc.SaveChangesAsync();

            return true;
        }

        public async Task<bool> PutAsync(int option, MRolSubMenu model)
        {
            List<MRolSubMenu> lm;

            switch (option)
            {
                case 1:
                    lm = await GetAsync(option: 1, model);

                    lm.ForEach(_model =>
                    {
                        _model.IdRol = model.IdRol;
                        _model.IdMenu = model.IdMenu;

                        _model.IdUsuarioActualiza = model.IdUsuarioActualiza;
                        _model.FechaActualiza = DateTime.Now;
                    });

                    break;
            }

            await _dbc.SaveChangesAsync();

            return true;
        }

        public async Task<bool> DeleteAsync(int option, List<MRolSubMenu> model)
        {
            List<MRolSubMenu> lm;

            foreach (MRolSubMenu m in model)
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
