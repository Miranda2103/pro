using pro.Model;

namespace pro.Interface
{
    public interface ITransHemodialisis
    {
        Task<List<MTransHemodialisis>> GetAsync(int option, MTransHemodialisis model);
        Task<Boolean> PostAsync(List<MTransHemodialisis> model);
        Task<bool> PutAsync(int option, MTransHemodialisis model);
        Task<bool> DeleteAsync(int option, List<MTransHemodialisis> model);
    }
}
