using pro.Model;

namespace pro.Interface
{
    public interface IPaciente
    {
        Task<List<MPaciente>> GetAsync(int option, MPaciente model);
        Task<long> PostAsync(MPaciente model);
        Task<bool> PutAsync(int option, MPaciente model);
        Task<bool> DeleteAsync(int option, List<MPaciente> model);
    }
}
