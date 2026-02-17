using Microsoft.AspNetCore.Mvc;
using pro.Context;
using pro.Logic.pro;
using pro.Model.pro;

namespace pro.Api.Controllers.pro
{
    [Route("api/pro/[controller]")]
    [ApiController]
    public class TokenController : Controller
    {
        private readonly LToken _logic;
        MResponse _response;

        public TokenController(IConfiguration configuration, DBPRO dbc)
        {
            _logic = new LToken(configuration, dbc);
            _response = new MResponse();
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Post(MAutenticacion model)
        {
            try
            {
                _response = await _logic.Post(model);
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
