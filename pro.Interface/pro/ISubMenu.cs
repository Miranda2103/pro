using pro.Model;

namespace pro.Interface
{
    public interface ISubMenu
    {
        Task<List<MSubMenu>> GetAsync(int option, MSubMenu model);
        Task<bool> PostAsync(MSubMenu model);
        Task<bool> PutAsync(int option, MSubMenu model);
        Task<bool> DeleteAsync(int option, List<MSubMenu> model);
    }
}
