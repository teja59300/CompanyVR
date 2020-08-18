using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Create
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public string Name { get; set; }
            public string Description { get; set; }
            public string Amount { get; set; }
            public string NoOfAcres { get; set; }
            public string Location { get; set; }
            public DateTime Date { get; set; }
            public string Status { get; set; }


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
                var activity = new Activity
                {
                    Id = request.Id,
                    Name=request.Name,
                    Description=request.Description,
                    Amount=request.Amount,
                    NoOfAcres=request.NoOfAcres,
                    Location=request.Location,
                    Date=request.Date,
                    Status=request.Status
                };
                
                _context.Activities.Add(activity);
                var success = await _context.SaveChangesAsync() > 0;
                if(success) return Unit.Value;

                throw new Exception("Problem with saving changes(create Handler)");
                

            }
        }
    }
}