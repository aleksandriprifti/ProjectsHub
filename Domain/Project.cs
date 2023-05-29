using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{
    public class Project
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string ProjectName { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime DueDate { get; set; }
        public bool IsActive { get; set; }

        //Relationship
        //public int TeamMemberId { get; set; }
        public ICollection<TeamMember> TeamMember { get; set; }

    }
}