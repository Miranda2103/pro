using pro.Model;

namespace pro.Interface
{
    public interface IRolMenu
    {
        Task<List<MRolMenu>> GetAsync(int option, MRolMenu model);
        Task<bool> PostAsync(List<MRolMenu> model);
        Task<bool> PutAsync(int option, MRolMenu model);
        Task<bool> DeleteAsync(int option, List<MRolMenu> model);
    }
}
