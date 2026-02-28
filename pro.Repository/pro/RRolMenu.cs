using Microsoft.EntityFrameworkCore;
using pro.Context;
using pro.Interface;
using pro.Model;

namespace pro.Repository
{
    public class RRolMenu : IRolMenu
    {
        private readonly DBPRO _dbc;

        public RRolMenu(DBPRO dbc)
        {
            _dbc = dbc;
        }

        public async Task<List<MRolMenu>> GetAsync(int option, MRolMenu model)
        {
            return option switch
            {
                1 => await _dbc.RolMenu.Where(r => r.IdRol == model.IdRol && r.Activo == true).ToListAsync(),
                _ => throw new NotImplementedException()
            };
        }

        public async Task<bool> PostAsync(List<MRolMenu> model)
        {
            model.ForEach(_model =>
            {
                _model.FechaInserta = DateTime.Now;
                _model.IdUsuarioActualiza = 0;
                _model.FechaActualiza = new DateTime(1900, 1, 1);                
            });

            await _dbc.RolMenu.AddRangeAsync(model);
            await _dbc.SaveChangesAsync();

            return true;
        }

        public async Task<bool> PutAsync(int option, MRolMenu model)
        {
            List<MRolMenu> lm;

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

        public async Task<bool> DeleteAsync(int option, List<MRolMenu> model)
        {
            List<MRolMenu> lm;

            foreach (MRolMenu m in model)
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
