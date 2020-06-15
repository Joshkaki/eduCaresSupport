using eduCares.API.Models;
using Microsoft.EntityFrameworkCore;

namespace eduCares.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<value> Values { get; set; }
        public DbSet<User> Users { get; set; }

    }
}
