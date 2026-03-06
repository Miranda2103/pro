using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using pro.Context;
using pro.Logic;
using pro.Model;
using System.ComponentModel.DataAnnotations;

namespace pro.Api.Controllers
{
    [Authorize]
    [Route("api/pro/[controller]")]
    [ApiController]
    public class AvisoImagenController : Controller
    {
        private readonly LAvisoImagen _logic;
        private readonly MResponse _response;

        public AvisoImagenController(DBPRO dbc, IOptions<MConfiguracion> option)
        {
            _logic = new LAvisoImagen(dbc, option);
            _response = new MResponse();
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> Get([Required] int option, [FromQuery] MAvisoImagen model)
        {
            try
            {
                _response.Data = await _logic.GetAsync(option, model);
                _response.Success = true;

                return Ok(_response);
            }
            catch (Exception ex)
            {
                _response.Message = ex.Message;
                return BadRequest(_response);
            }
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Post([FromForm] string paciente, [FromForm] long idPago, [FromForm] long idAgenda, [FromForm] long idPaciente, [FromForm] IFormFile file, [FromForm] long idOrganizacion, [FromForm] long idUsuarioInserta)
        {
            try
            {
                _response.Data = await _logic.PostAsync(paciente, idPago, idAgenda, idPaciente, file, idOrganizacion, idUsuarioInserta);
                _response.Success = true;

                return Ok(_response);
            }
            catch (Exception ex)
            {
                _response.Message = ex.Message;
                return BadRequest(_response);
            }
        }

        [HttpPut("[action]")]
        public async Task<IActionResult> Put(int option, MAvisoImagen model)
        {
            try
            {
                _response.Success = await _logic.PutAsync(option, model);
                return Ok(_response);
            }
            catch (Exception ex)
            {
                _response.Message = ex.Message;
                return BadRequest(_response);
            }
        }

        [HttpDelete("[action]")]
        public async Task<IActionResult> Delete(int option, List<MAvisoImagen> model)
        {
            try
            {
                _response.Success = await _logic.DeleteAsync(option, model);
                return Ok(_response);
            }
            catch (Exception ex)
            {
                _response.Message = ex.Message;
                return BadRequest(_response);
            }
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> NoticeImage([FromQuery] string archivo)
        {
            try
            {
                if (System.IO.File.Exists(archivo))
                {
                    Byte[] bytes = await System.IO.File.ReadAllBytesAsync(archivo);
                    return File(bytes, "image/" + Path.GetExtension(archivo).Replace(".", ""), Path.GetFileName(archivo));
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception ex)
            {
                _response.Message = ex.Message.ToString();
                return BadRequest(_response);
            }
        }

    }
}
