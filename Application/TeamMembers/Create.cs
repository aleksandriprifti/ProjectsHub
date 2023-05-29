using Domain;
using MediatR;
using Persistence;

namespace Application.TeamMembers
{
    public class Create
    {
        public class Command : IRequest
        {
            public TeamMember TeamMember { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;

            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.TeamMembers.Add(request.TeamMember);
                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}