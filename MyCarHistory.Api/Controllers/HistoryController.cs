using Microsoft.AspNetCore.Mvc;

namespace MyCarHistory.Api.Controllers
{
    [Route("api/history")]
    public class HistoryController : Controller
    {
        public HistoryController()
        {
        }

        [Route("")]
        [HttpGet]
        public IActionResult GetHistory()
        {
            var history = new int[] { 1, 2, 3 };
            return Ok(history);
        }
    }
}
