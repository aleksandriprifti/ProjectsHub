using Application.Projects;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;

namespace API.Controllers
{

    [AllowAnonymous]
    public class ProjectsController : BaseApiContorller
    {

        [HttpGet] // api/projects
        public async Task<ActionResult<List<Project>>> GetProjects()
        {
            return await Mediator.Send(new List.Query());
        }

        [Authorize]
        [HttpGet("{id}")] //api/projects/id
        public async Task<ActionResult<Project>> GetProject(Guid id)
        {
            return await Mediator.Send(new Details.Query { Id = id });
        }

        [HttpPost]
        public async Task<IActionResult> CreateProject(Project project)
        {
            return Ok(await Mediator.Send(new Create.Command { Project = project }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditProject(Guid Id, Project project)
        {
            project.Id = Id;
            return Ok(await Mediator.Send(new Edit.Command { Project = project }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProject(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}