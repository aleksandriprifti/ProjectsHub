using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class AppUser : IdentityUser //derived from IdentityUser
    {
        public string DisplayName { get; set; }
        public string Bio { get; set; }
    }
}