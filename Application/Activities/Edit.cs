using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Edit
    {
        public class Command : IRequest
        {
              public Guid Id { get; set; }
            public string Name { get; set; }
            public string Description { get; set; }
            public string Amount { get; set; }
            public string NoOfAcres { get; set; }
            public string Location { get; set; }
            public DateTime? Date { get; set; }
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
                    // command handler logic goes here
                    var activity = await _context.Activities.FindAsync(request.Id);
                    if(activity == null)
                    
                        throw new Exception("could not find an activity");
                    
                    activity.Name = request.Name ?? activity.Name;
                    activity.NoOfAcres= request.NoOfAcres ?? activity.NoOfAcres;
                    activity.Description=request.Description ?? activity.Description;
                    activity.Amount = request.Amount ?? activity.Amount;
                    activity.Location =request.Location ?? activity.Location;
                    activity.Status = request.Status ?? activity.Status;
                    activity.Date = request.Date ?? activity.Date;

        
                       
                    var success =  await _context.SaveChangesAsync() > 0;
                    if(success)
                    {
                        return Unit.Value;
                    }
                    throw new Exception("Problem saving changes");
                }
            }
    }
}