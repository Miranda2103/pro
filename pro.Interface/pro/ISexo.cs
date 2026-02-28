using pro.Model;

namespace pro.Interface
{
    public interface ISexo
    {
        Task<List<MSexo>> GetAsync(int option, MSexo model);
        Task<bool> PostAsync(MSexo model);
        Task<bool> PutAsync(int option, MSexo model);
        Task<bool> DeleteAsync(int option, List<MSexo> model);
    }
}
