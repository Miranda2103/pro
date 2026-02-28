using pro.Model;

namespace pro.Interface
{
    public interface IVRolSubMenu
    {
        Task<List<MVRolSubMenu>> GetAsync(int option, MVRolSubMenu model);
    }
}