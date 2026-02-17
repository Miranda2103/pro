using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using pro.Context;
using pro.Logic.pro;
using pro.Model.pro;
using System.ComponentModel.DataAnnotations;

namespace pro.Api.Controllers.pro
{
    [Authorize]
    [Route("api/pro/[controller]")]
    [ApiController]
    public class VUsuarioController : Controller
    {
        private readonly LVUsuario _logic;
        private readonly MResponse _response;

        public VUsuarioController(DBPRO dbc)
        {
            _logic = new LVUsuario(dbc);
            _response = new MResponse();
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> Get([Required] int option, [FromQuery] MVUsuario model)
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

    }
}
