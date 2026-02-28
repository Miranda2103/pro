using pro.Model;

namespace pro.Interface
{
    public interface IUsuario
    {
        Task<List<MUsuario>> GetAsync(int option, MUsuario model);
        Task<long> PostAsync(MUsuario model);
        Task<bool> PutAsync(int option, MUsuario model);
        Task<bool> DeleteAsync(int option, List<MUsuario> model);
    }
}
