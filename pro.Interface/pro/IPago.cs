using pro.Model;

namespace pro.Interface
{
    public interface IPago
    {
        Task<List<MPago>> GetAsync(int option, MPago model);
        Task<bool> PostAsync(MPago model);
        Task<bool> PutAsync(int option, MPago model);
        Task<bool> DeleteAsync(int option, List<MPago> model);
    }
}
