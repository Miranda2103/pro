using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using pro.Context;
using pro.Function;
using pro.Interface;
using pro.Model;
using pro.Repository;

namespace pro.Logic
{
    public class LPagoImagen
    {
        public readonly IPagoImagen _interface;
        private readonly FImage _imagen;

        public LPagoImagen(DBPRO dbc, IOptions<MConfiguracion> option)
        {
            _interface = new RPagoImagen(dbc);
            _imagen = new FImage(option);
        }

        public async Task<List<MPagoImagen>> GetAsync(int option, MPagoImagen model)
        {
            return await _interface.GetAsync(option, model);
        }

        public async Task<Int64> PostAsync(string paciente, long idPago, long idAgenda, long idPaciente, IFormFile file, long idOrganizacion, long idUsuarioInserta)
        {
            MPagoImagen model = _imagen.PagoImagen(paciente, idPago, idAgenda, idPaciente, file, idOrganizacion, idUsuarioInserta);
            return await _interface.PostAsync(model);
        }

        public async Task<bool> PutAsync(int option, MPagoImagen model)
        {
            return await _interface.PutAsync(option, model);
        }

        public async Task<bool> DeleteAsync(int option, List<MPagoImagen> model)
        {
            return await _interface.DeleteAsync(option, model);
        }

    }
}
