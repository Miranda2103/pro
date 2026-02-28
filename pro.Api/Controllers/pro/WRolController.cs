using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using pro.Context;
using pro.Logic;
using pro.Model;

namespace pro.Api.Controllers
{
    [Authorize]
    [Route("api/pro/[controller]")]
    [ApiController]
    public class WRolController : Controller
    {
        private readonly LWRol _logic;
        private readonly MResponse _response;

        public WRolController(DBPRO dbc)
        {
            _logic = new LWRol(dbc);
            _response = new MResponse();
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetFiltroLista([FromQuery] MFiltro model)
        {
            try
            {
                _response.Data = await _logic.GetFiltroListaAsync(model);
                _response.Success = true;

                return Ok(_response);
            }
            catch (Exception ex)
            {
                _response.Message = ex.Message;
                return BadRequest(_response);
            }
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetFiltroTotal([FromQuery] MFiltro model)
        {
            try
            {
                _response.Data = await _logic.GetFiltroTotalAsync(model);
                _response.Success = true;

                return Ok(_response);
            }
            catch (Exception ex)
            {
                _response.Message = ex.Message;
                return BadRequest(_response);
            }
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetFiltroVista([FromQuery] MFiltro model)
        {
            try
            {
                _response.Data = await _logic.GetFiltroVistaAsync(model);
                _response.Success = true;

                return Ok(_response);
            }
            catch (Exception ex)
            {
                _response.Message = ex.Message;
                return BadRequest(_response);
            }
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetFiltroExportar([FromQuery] MFiltro model)
        {
            try
            {
                MemoryStream memoryStream = await _logic.GetFiltroExportarAsync(model);
                return File(memoryStream.ToArray(), model.Formato == ".csv" ? "text/csv" : "application/vnd.ms-excel");
            }
            catch (Exception ex)
            {
                _response.Message = ex.Message.ToString();
                return BadRequest(_response);
            }
        }

    }
}
