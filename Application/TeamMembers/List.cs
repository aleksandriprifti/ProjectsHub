using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.TeamMembers
{
    public class List
    {
        // class for query
        public class Query : IRequest<List<TeamMember>> { };

        public class Handler : IRequestHandler<Query, List<TeamMember>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;

            }

            public async Task<List<TeamMember>> Handle(Query request, CancellationToken token)
            {

                return await _context.TeamMembers.ToListAsync();
            }
        }
    }
}