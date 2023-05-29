using Application.TeamMembers;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [AllowAnonymous]
    public class TeamMembersController : BaseApiContorller
    {
        [HttpGet] // api/projects
        public async Task<ActionResult<List<TeamMember>>> GetMembers()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpPost]
        public async Task<IActionResult> CreateMember(TeamMember teamMember)
        {
            return Ok(await Mediator.Send(new Create.Command { TeamMember = teamMember }));
        }
    }
}