using pro.Model;

namespace pro.Interface
{
    public interface IRolSubMenu
    {
        Task<List<MRolSubMenu>> GetAsync(int option, MRolSubMenu model);
        Task<bool> PostAsync(List<MRolSubMenu> model);
        Task<bool> PutAsync(int option, MRolSubMenu model);
        Task<bool> DeleteAsync(int option, List<MRolSubMenu> model);
    }
}
