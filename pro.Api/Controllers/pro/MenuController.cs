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
    public class MenuController : Controller
    {
        private readonly LMenu _logic;
        private readonly MResponse _response;

        public MenuController(DBPRO dbc)
        {
            _logic = new LMenu(dbc);
            _response = new MResponse();
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> Get([Required] int option, [FromQuery] MMenu model)
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
        public async Task<IActionResult> Post(MMenu model)
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
        public async Task<IActionResult> Put(int option, MMenu model)
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
        public async Task<IActionResult> Delete(int option, List<MMenu> model)
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
