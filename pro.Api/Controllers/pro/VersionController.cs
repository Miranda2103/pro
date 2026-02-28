using Microsoft.AspNetCore.Mvc;
using pro.Logic;
using pro.Model;

namespace pro.Api.Controllers
{
    [Route("api/pro/[controller]")]
    [ApiController]
    public class VersionController : Controller
    {
        private readonly MResponse _response;

        public VersionController()
        {
            _response = new MResponse();
        }

        [HttpGet("[action]")]
        public IActionResult Get()
        {
            try
            {
                _response.Data = LVersion.Get();
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
