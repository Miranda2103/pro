using Microsoft.AspNetCore.Mvc;
using pro.Context;
using pro.Logic.pro;
using pro.Model.pro;
using System.ComponentModel.DataAnnotations;

namespace pro.Api.Controllers.pro
{
    [Route("api/pro/[controller]")]
    [ApiController]
    public class OrganizacionController : Controller
    {
        private readonly LOrganizacion _logic;
        private readonly MResponse _response;

        public OrganizacionController(DBPRO dbc)
        {
            _logic = new LOrganizacion(dbc);
            _response = new MResponse();
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> Get([Required] int option, [FromQuery] MOrganizacion model)
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
        public async Task<IActionResult> Post(MOrganizacion model)
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
        public async Task<IActionResult> Put(int option, MOrganizacion model)
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
        public async Task<IActionResult> Delete(int option, List<MOrganizacion> model)
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

    }
}
