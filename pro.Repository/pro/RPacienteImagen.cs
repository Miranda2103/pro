using Microsoft.EntityFrameworkCore;
using pro.Context;
using pro.Interface;
using pro.Model;

namespace pro.Repository
{
    public class RPacienteImagen : IPacienteImagen
    {
        private readonly DBPRO _dbc;

        public RPacienteImagen(DBPRO dbc)
        {
            _dbc = dbc;
        }

        public async Task<List<MPacienteImagen>> GetAsync(int option, MPacienteImagen model)
        {
            return option switch
            {
                1 => await _dbc.PacienteImagen.Where(r => r.Id == model.Id).ToListAsync(),
                2 => await _dbc.PacienteImagen.Where(r => r.Activo == true && r.IdPaciente == model.IdPaciente).OrderBy(r => r.Id).ToListAsync(),
                3 => await _dbc.PacienteImagen.Where(r => r.Activo == true && r.IdOrganizacion == model.IdOrganizacion && r.IdPaciente == model.IdPaciente).ToListAsync(),
                _ => throw new NotImplementedException()
            };
        }

        public async Task<bool> PostAsync(MPacienteImagen model)
        {
            model.FechaInserta = DateTime.Now;
            model.IdUsuarioActualiza = 0;
            model.FechaActualiza = new DateTime(1900, 1, 1);

            await _dbc.PacienteImagen.AddAsync(model);
            await _dbc.SaveChangesAsync();

            return true;
        }

        public async Task<bool> PutAsync(int option, MPacienteImagen model)
        {
            List<MPacienteImagen> lm;

            switch (option)
            {
                case 1:
                    lm = await GetAsync(option: 1, model);

                    lm.ForEach(_model =>
                    {
                        _model.IdPaciente = model.IdPaciente;
                        _model.Ruta = model.Ruta;
                        _model.Nombre = model.Nombre;
                        _model.Extension = model.Extension;
                        _model.Archivo = model.Archivo;
                        _model.Imagen = model.Imagen;

                        _model.IdUsuarioActualiza = model.IdUsuarioActualiza;
                        _model.FechaActualiza = DateTime.Now;
                    });

                    break;
            }

            await _dbc.SaveChangesAsync();

            return true;
        }

        public async Task<bool> DeleteAsync(int option, List<MPacienteImagen> model)
        {
            List<MPacienteImagen> lm;

            foreach (MPacienteImagen m in model)
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
