using Microsoft.EntityFrameworkCore;
using pro.Context;
using pro.Function;
using pro.Interface;
using pro.Model;

namespace pro.Repository
{
    public class RUsuario : IUsuario
    {
        private readonly DBPRO _dbc;

        public RUsuario(DBPRO dbc)
        {
            _dbc = dbc;
        }

        public async Task<List<MUsuario>> GetAsync(int option, MUsuario model)
        {
            return option switch
            {
                1 => await _dbc.Usuario.Where(r => r.Id == model.Id).ToListAsync(),
                2 => await _dbc.Usuario.Where(r => r.IdOrganizacion == model.IdOrganizacion).OrderBy(r => r.Usuario).ToListAsync(),
                3 => await _dbc.Usuario.Where(r => r.IdOrganizacion == model.IdOrganizacion && r.Usuario == model.Usuario).ToListAsync(),
                4 => await _dbc.Usuario.Where(r => r.Activo == true && r.Usuario == model.Usuario && r.Contrasena == model.Contrasena).ToListAsync(),
                _ => throw new NotImplementedException()
            };
        }

        public async Task<long> PostAsync(MUsuario model)
        {
            model.Contrasena = Encryption.EncryptSHA1(model.Contrasena);

            model.FechaInserta = DateTime.Now;
            model.IdUsuarioActualiza = 0;
            model.FechaActualiza = new DateTime(1900, 1, 1);

            await _dbc.Usuario.AddAsync(model);
            await _dbc.SaveChangesAsync();

            return model.Id;
        }

        public async Task<bool> PutAsync(int option, MUsuario model)
        {
            List<MUsuario> lm;

            switch (option)
            {
                case 1:
                    lm = await GetAsync(option: 1, model);

                    lm.ForEach(_model =>
                    {
                        if (model.Contrasena.Length <= 10)
                        {
                            _model.Contrasena = Encryption.EncryptSHA1(model.Contrasena);
                            _model.CambiaContrasena = false;
                        }

                        _model.Nombre = model.Nombre;
                        _model.ApellidoPaterno = model.ApellidoPaterno;
                        _model.ApellidoMaterno = model.ApellidoMaterno;
                        _model.IdRol = model.IdRol;

                        _model.IdUsuarioActualiza = model.IdUsuarioActualiza;
                        _model.FechaActualiza = DateTime.Now;
                    });

                    break;
                case 2:
                    lm = await GetAsync(option: 1, model);

                    lm.ForEach(_model =>
                    {
                        _model.Contrasena = Encryption.EncryptSHA1(model.Contrasena);
                        _model.CambiaContrasena = true;

                        _model.IdUsuarioActualiza = model.IdUsuarioActualiza;
                        _model.FechaActualiza = DateTime.Now;
                    });

                    break;
            }

            await _dbc.SaveChangesAsync();

            return true;
        }

        public async Task<bool> DeleteAsync(int option, List<MUsuario> model)
        {
            List<MUsuario> lm;

            foreach (MUsuario m in model)
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
