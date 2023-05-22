using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class TeamMembersController : BaseApiContorller
    {
        private readonly DataContext _context;
        public TeamMembersController(DataContext context)
        {
            _context = context;

        }

        [HttpGet] // api/teammembers
        public async Task<ActionResult<List<TeamMember>>> GetTeamMembers()
        {
            return await _context.TeamMembers.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<TeamMember>> GetTeamMembers(int id)
        {
            return await _context.TeamMembers.FindAsync(id);
        }
    }
}