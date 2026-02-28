using pro.Model;

namespace pro.Interface
{
    public interface ITranshemodialisis
    {
        Task<List<MTranshemodialisis>> GetAsync(int option, MTranshemodialisis model);
        Task<Boolean> PostAsync(List<MTranshemodialisis> model);
        Task<bool> PutAsync(int option, MTranshemodialisis model);
        Task<bool> DeleteAsync(int option, List<MTranshemodialisis> model);
    }
}
