using pro.Model.pro;

namespace pro.Interface.pro
{
    public interface IUsuario
    {
        Task<List<MUsuario>> GetAsync(int option, MUsuario model);
        Task<long> PostAsync(MUsuario model);
        Task<bool> PutAsync(int option, MUsuario model);
        Task<bool> DeleteAsync(int option, List<MUsuario> model);
    }
}
