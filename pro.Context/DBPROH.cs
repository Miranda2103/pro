using Microsoft.EntityFrameworkCore;

namespace pro.Context
{
    public class DBPROH : DbContext
    {
        public DBPROH(DbContextOptions<DBPROH> dbContextOptions) : base(dbContextOptions)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        }

    }
}
