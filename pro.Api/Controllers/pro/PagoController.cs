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
    public class PagoController : Controller
    {
        private readonly LPago _logic;
        private readonly MResponse _response;

        public PagoController(DBPRO dbc, IOptions<MConfiguracion> option)
        {
            _logic = new LPago(dbc, option);
            _response = new MResponse();
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> Get([Required] int option, [FromQuery] MPago model)
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
        public async Task<IActionResult> Post(MPago model)
        {
            try
            {
                _response.Success = await _logic.PostAsync(model);
                return Ok(_response);
            }
            catch (Exception ex)
            {
                _response.Message = ex.Message;
                return BadRequest(_response);
            }
        }

        [HttpPut("[action]")]
        public async Task<IActionResult> Put(int option, MPago model)
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
        public async Task<IActionResult> Delete(int option, List<MPago> model)
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
        public async Task<IActionResult> PaymentDocument([FromQuery] int idAgenda)
        {
            try
            {
                MemoryStream memoryStream = await _logic.PaymentDocument(idAgenda);
                return File(memoryStream.ToArray(), "application/vnd.openxmlformats-officedocument.wordprocessingml.document");

            }
            catch (Exception ex)
            {
                _response.Message = ex.Message.ToString();
                return BadRequest(_response);
            }
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> ConsentDocument([FromQuery] int idPaciente)
        {
            try
            {
                MemoryStream memoryStream = await _logic.ConsentDocument(idPaciente);
                return File(memoryStream.ToArray(), "application/vnd.openxmlformats-officedocument.wordprocessingml.document");

            }
            catch (Exception ex)
            {
                _response.Message = ex.Message.ToString();
                return BadRequest(_response);
            }
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> NoticeDocument([FromQuery] int idPaciente)
        {
            try
            {
                MemoryStream memoryStream = await _logic.NoticeDocument(idPaciente);
                return File(memoryStream.ToArray(), "application/vnd.openxmlformats-officedocument.wordprocessingml.document");

            }
            catch (Exception ex)
            {
                _response.Message = ex.Message.ToString();
                return BadRequest(_response);
            }
        }

    }
}
