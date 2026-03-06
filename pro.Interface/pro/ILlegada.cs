using pro.Model;

namespace pro.Interface
{
    public interface ILlegada
    {
        Task<List<MLlegada>> GetAsync(int option, MLlegada model);
        Task<bool> PostAsync(MLlegada model);
        Task<bool> PutAsync(int option, MLlegada model);
        Task<bool> DeleteAsync(int option, List<MLlegada> model);
    }
}
