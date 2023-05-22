using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Projects.Any()) return;

            var projects = new List<Project>
            {
                new Project
                {
                    Id = 1,
                    ProjectName = "ASP.NET project",
                    CreatedAt = DateTime.UtcNow.AddMonths(-2),
                    DueDate = DateTime.UtcNow.AddMonths(+4),
                    IsActive = true,

                },
                new Project
                {
                    Id = 2,
                    ProjectName = "ASP.NET project",
                    CreatedAt = DateTime.UtcNow.AddMonths(-2),
                    DueDate = DateTime.UtcNow.AddMonths(+6),
                    IsActive = true,
                },
            };

            if(context.TeamMembers.Any()) return;

            var teamMembers = new List<TeamMember>
            {
                new TeamMember
                {
                    Id = 1,
                    FirstName = "Alex",
                    LastName = "Prifti",
                    Email = "prifti24@gmail.com",
                    PhoneNumber = "5555555",

                },
                new TeamMember
                {
                    Id = 2,
                    FirstName = "Genti",
                    LastName = "Demo",
                    Email = "genti.demo@gmail.com",
                    PhoneNumber = "123456",

                },
            };

            await context.Projects.AddRangeAsync(projects);
            await context.TeamMembers.AddRangeAsync(teamMembers);
            await context.SaveChangesAsync();
        }
    }
}