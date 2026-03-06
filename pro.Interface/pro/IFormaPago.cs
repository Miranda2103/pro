using pro.Model;

namespace pro.Interface
{
    public interface IFormaPago
    {
        Task<List<MFormaPago>> GetAsync(int option, MFormaPago model);
        Task<bool> PostAsync(MFormaPago model);
        Task<bool> PutAsync(int option, MFormaPago model);
        Task<bool> DeleteAsync(int option, List<MFormaPago> model);
    }
}
