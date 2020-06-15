using System.Threading.Tasks;
using eduCares.API.Models;

namespace eduCares.API.Data
{
    public interface IAuthRepository
    {
        Task<User> Register(User user, string password);

        Task<User> Login(string username, string password);
        
        Task<bool> UserExists(string username);
    }
}