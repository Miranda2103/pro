using pro.Model;

namespace pro.Interface
{
    public interface IHemodialisis
    {
        Task<List<MHemodialisis>> GetAsync(int option, MHemodialisis model);
        Task<Int64> PostAsync(MHemodialisis model);
        Task<bool> PutAsync(int option, MHemodialisis model);
        Task<bool> DeleteAsync(int option, List<MHemodialisis> model);
    }
}
