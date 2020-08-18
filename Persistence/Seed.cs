using System;
using System.Collections.Generic;
using System.Linq;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static void SeedData(DataContext context)
        {
            if(!context.Activities.Any())
            {
                var activities = new List<Activity>()
                {
                        new Activity
                        {
                            Name = "FARMER 1",
                            Date = DateTime.Now.AddMonths(-2),
                            Description = "Activity 2 months ago",
                            NoOfAcres = "2",
                            Amount = "800",
                            Location = "Pentapadu",
                            Status = "Done",
                        },
                        new Activity
                        {
                            Name = "FARMER 2",
                            Date = DateTime.Now.AddMonths(-1),
                            Description = "Activity 1 month ago",
                            NoOfAcres = "2",
                            Amount = "1200",
                            Location = "Tadepalligudem",
                            Status = "Scheduled",
                        },
                        new Activity
                        {
                            Name = "FARMER 3",
                            Date = DateTime.Now.AddMonths(1),
                            Description = "Activity 1 month in future",
                            NoOfAcres = "2",
                            Amount = "800",
                            Location = "Tanuku",
                            Status = "Scheduled",
                        },
                        new Activity
                        {
                            Name = "FARMER 4",
                            Date = DateTime.Now.AddMonths(2),
                            Description = "Activity 2 months in future",
                            NoOfAcres = "2",
                            Amount = "800",
                            Location = "Bhimavaram",
                            Status = "Agreed",
                        },
                        new Activity
                        {
                            Name = "FARMER 5",
                            Date = DateTime.Now.AddMonths(3),
                            Description = "Activity 3 months in future",
                            NoOfAcres = "2",
                            Amount = "800",
                            Location = " Pentapadu",
                            Status = "Done",
                        },
                        new Activity
                        {
                            Name = "FARMER 6",
                            Date = DateTime.Now.AddMonths(4),
                            Description = "Activity 4 months in future",
                            NoOfAcres = "2",
                            Amount = "800",
                            Location = "  Pentapadu",
                            Status = "Done",
                        },
                        new Activity
                        {
                            Name = "FARMER 7",
                            Date = DateTime.Now.AddMonths(5),
                            Description = "Activity 5 months in future",
                            NoOfAcres = "2",
                            Amount = "800",
                            Location = "  Pentapadu",
                            Status = "Done",
                        },
                        new Activity
                        {
                            Name = "FARMER 8",
                            Date = DateTime.Now.AddMonths(6),
                            Description = "Activity 6 months in future",
                            NoOfAcres = "2",
                            Amount = "800",
                            Location = "Tanuku",
                            Status = "Agreed",
                        },
                        new Activity
                        {
                            Name = "FARMER 9",
                            Date = DateTime.Now.AddMonths(7),
                            Description = "Activity 2 months ago",
                            NoOfAcres = "2",
                            Amount = "800",
                            Location = " on the Thames",
                            Status = "Rejected",
                        },
                        new Activity
                        {
                            Name = "FARMER 10",
                            Date = DateTime.Now.AddMonths(8),
                            Description = "Activity 8 months in future",
                            NoOfAcres = "2",
                            Amount = "800",
                            Location = "Tadepalligudem",
                            Status = "Other ",
                        }
                };

                context.Activities.AddRange(activities);
                context.SaveChanges();

            }
        }
    }
}