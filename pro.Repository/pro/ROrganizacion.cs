using Microsoft.EntityFrameworkCore;
using pro.Context;
using pro.Interface.pro;
using pro.Model.pro;

namespace pro.Repository.pro
{
    public class ROrganizacion : IOrganizacion
    {
        private readonly DBPRO _dbc;

        public ROrganizacion(DBPRO dbc)
        {
            _dbc = dbc;
        }

        public async Task<List<MOrganizacion>> GetAsync(int option, MOrganizacion model)
        {
            return option switch
            {
                1 => await _dbc.Organizacion.Where(r => r.Id == model.Id).ToListAsync(),
                2 => await _dbc.Organizacion.OrderBy(r => r.Organizacion).ToListAsync(),
                3 => await _dbc.Organizacion.Where(r => r.Organizacion == model.Organizacion).ToListAsync(),
                _ => throw new NotImplementedException()
            };
        }

        public async Task<long> PostAsync(MOrganizacion model)
        {
            model.FechaInserta = DateTime.Now;
            model.IdUsuarioActualiza = 0;
            model.FechaActualiza = new DateTime(1900, 1, 1);

            await _dbc.Organizacion.AddAsync(model);
            await _dbc.SaveChangesAsync();

            return model.Id;
        }

        public async Task<bool> PutAsync(int option, MOrganizacion model)
        {
            List<MOrganizacion> lm;

            switch (option)
            {
                case 1:
                    lm = await GetAsync(option: 1, model);

                    lm.ForEach(_model =>
                    {
                        _model.Organizacion = model.Organizacion;
                        _model.Nombre = model.Nombre;
                        _model.ApellidoPaterno = model.ApellidoPaterno;
                        _model.ApellidoMaterno = model.ApellidoMaterno;
                        _model.Telefono = model.Telefono;
                        _model.Correo = model.Correo;
                        _model.Calle = model.Calle;
                        _model.NumeroExterior = model.NumeroExterior;
                        _model.NumeroInterior = model.NumeroInterior;
                        _model.Colonia = model.Colonia;
                        _model.Municipio = model.Municipio;
                        _model.Estado = model.Estado;

                        _model.IdUsuarioActualiza = model.IdUsuarioActualiza;
                        _model.FechaActualiza = DateTime.Now;
                    });

                    break;
            }

            await _dbc.SaveChangesAsync();

            return true;
        }

        public async Task<bool> DeleteAsync(int option, List<MOrganizacion> model)
        {
            List<MOrganizacion> lm;

            foreach (MOrganizacion m in model)
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
