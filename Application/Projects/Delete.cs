using MediatR;
using Persistence;

namespace Application.Projects
{
    public class Delete
    {
        public class Command : IRequest
        {
            public int Id { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _contex;
            public Handler(DataContext contex)
            {
                _contex = contex;

            }

            public async Task<Unit> Handle(Command request, CancellationToken token)
            {
                var project = await _contex.Projects.FindAsync(request.Id);

                _contex.Remove(project);

                await _contex.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}