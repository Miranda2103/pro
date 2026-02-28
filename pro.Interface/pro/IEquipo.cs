using pro.Model;

namespace pro.Interface
{
    public interface IEquipo
    {
        Task<List<MEquipo>> GetAsync(int option, MEquipo model);
        Task<bool> PostAsync(MEquipo model);
        Task<bool> PutAsync(int option, MEquipo model);
        Task<bool> DeleteAsync(int option, List<MEquipo> model);
    }
}
