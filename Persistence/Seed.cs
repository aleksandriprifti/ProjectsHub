using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {

            if (!userManager.Users.Any())
            {
                var users = new List<AppUser>
                {
                    new AppUser{DisplayName = "Alex", UserName = "alex", Email = "alex@test.com"},
                    new AppUser{DisplayName = "John", UserName = "john", Email = "john@test.com"},
                    new AppUser{DisplayName = "Ann", UserName = "ann", Email = "ann@test.com"},
                };

                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }
            }

            if (context.Projects.Any()) return;

            var projects = new List<Project>
            {
                new Project
                {
                    ProjectName = "ASP.NET project",
                    CreatedAt = DateTime.UtcNow.AddMonths(-2),
                    DueDate = DateTime.UtcNow.AddMonths(+4),
                    IsActive = true,

                },
                new Project
                {
                    ProjectName = "ASP.NET project",
                    CreatedAt = DateTime.UtcNow.AddMonths(-2),
                    DueDate = DateTime.UtcNow.AddMonths(+6),
                    IsActive = true,
                },
            };

            if (context.TeamMembers.Any()) return;

            var teamMembers = new List<TeamMember>
            {
                new TeamMember
                {
                    FirstName = "Alex",
                    LastName = "Prifti",
                    Email = "prifti24@gmail.com",
                    PhoneNumber = "5555555",
                },
                new TeamMember
                {
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