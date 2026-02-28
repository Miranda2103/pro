using pro.Model;

namespace pro.Interface
{
    public interface IAgenda
    {
        Task<List<MAgenda>> GetAsync(int option, MAgenda model);
        Task<Int64> PostAsync(MAgenda model);
        Task<bool> PutAsync(int option, MAgenda model);
        Task<bool> DeleteAsync(int option, List<MAgenda> model);
    }
}
