using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Project> Projects {get; set;}
        public DbSet<TeamMember> TeamMembers {get; set;}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<TeamMember>()
                .HasOne(teamMember => teamMember.Project)
                .WithMany(project => project.TeamMembers)
                .HasForeignKey(teamMember => teamMember.Id);
        }
    }
}