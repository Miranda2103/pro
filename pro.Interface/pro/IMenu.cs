using pro.Model.pro;

namespace pro.Interface.pro
{
    public interface IMenu
    {
        Task<List<MMenu>> GetAsync(int option, MMenu model);
        Task<bool> PostAsync(MMenu model);
        Task<bool> PutAsync(int option, MMenu model);
        Task<bool> DeleteAsync(int option, List<MMenu> model);
    }
}
