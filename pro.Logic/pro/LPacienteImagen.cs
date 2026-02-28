using DocumentFormat.OpenXml.Wordprocessing;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using pro.Context;
using pro.Function;
using pro.Interface;
using pro.Model;
using pro.Repository;

namespace pro.Logic
{
    public class LPacienteImagen
    {
        public readonly IPacienteImagen _interface;
        private readonly MConfiguracion _option;
        private readonly FImage _image;

        public LPacienteImagen(DBPRO dbc, IOptions<MConfiguracion> option)
        {
            _interface = new RPacienteImagen(dbc);
            _option = option.Value;
            _image = new FImage(option);
        }

        public async Task<List<MPacienteImagen>> GetAsync(int option, MPacienteImagen model)
        {
            return await _interface.GetAsync(option, model);
        }

        public async Task<bool> PostAsync(string paciente, long idPaciente, IFormFile file, long idOrganizacion, long idUsuarioInserta)
        {
            MPacienteImagen model = _image.PacienteImagen(paciente, idPaciente, file, idOrganizacion, idUsuarioInserta);
            return await _interface.PostAsync(model);
        }

        public async Task<bool> PutAsync(int option, MPacienteImagen model)
        {
            return await _interface.PutAsync(option, model);
        }

        public async Task<bool> DeleteAsync(int option, List<MPacienteImagen> model)
        {
            return await _interface.DeleteAsync(option, model);
        }

    }
}
