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
    public class HemodialisisController : Controller
    {
        private readonly LHemodialisis _logic;
        private readonly MResponse _response;

        public HemodialisisController(DBPRO dbc, IOptions<MConfiguracion> option)
        {
            _logic = new LHemodialisis(dbc, option);
            _response = new MResponse();
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> Get([Required] int option, [FromQuery] MHemodialisis model)
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
        public async Task<IActionResult> Post(MHemodialisis model)
        {
            try
            {
                _response.Data = await _logic.PostAsync(model);
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
        public async Task<IActionResult> Put(int option, MHemodialisis model)
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
        public async Task<IActionResult> Delete(int option, List<MHemodialisis> model)
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
        public async Task<IActionResult> ReportHemodialisis([FromQuery] int idAgenda)
        {
            try
            {
                MemoryStream memoryStream = await _logic.ReportHemodialisis(idAgenda);
                return File(memoryStream.ToArray(), "application/vnd.ms-excel");
            }
            catch (Exception ex)
            {
                _response.Message = ex.Message.ToString();
                return BadRequest(_response);
            }
        }

    }
}
