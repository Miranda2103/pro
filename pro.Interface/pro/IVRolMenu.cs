using pro.Model;

namespace pro.Interface
{
    public interface IVRolMenu
    {
        Task<List<MVRolMenu>> GetAsync(int option, MVRolMenu model);
    }
}