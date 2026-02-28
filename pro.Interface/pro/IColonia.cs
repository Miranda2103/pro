using pro.Model;

namespace pro.Interface
{
    public interface IColonia
    {
        Task<List<MColonia>> GetAsync(int option, MColonia model);
        Task<bool> PostAsync(MColonia model);
        Task<bool> PutAsync(int option, MColonia model);
        Task<bool> DeleteAsync(int option, List<MColonia> model);
    }
}
