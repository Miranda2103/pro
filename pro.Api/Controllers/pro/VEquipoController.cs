using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using pro.Context;
using pro.Logic;
using pro.Model;
using System.ComponentModel.DataAnnotations;

namespace pro.Api.Controllers
{
    [Authorize]
    [Route("api/pro/[controller]")]
    [ApiController]
    public class VEquipoController : Controller
    {
        private readonly LVEquipo _logic;
        private readonly MResponse _response;

        public VEquipoController(DBPRO dbc)
        {
            _logic = new LVEquipo(dbc);
            _response = new MResponse();
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> Get([Required] int option, [FromQuery] MVEquipo model)
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
