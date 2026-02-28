using pro.Model;

namespace pro.Interface
{
    public interface IEstado
    {
        Task<List<MEstado>> GetAsync(int option, MEstado model);
        Task<bool> PostAsync(MEstado model);
        Task<bool> PutAsync(int option, MEstado model);
        Task<bool> DeleteAsync(int option, List<MEstado> model);
    }
}
