using pro.Model;

namespace pro.Interface
{
    public interface IDecision
    {
        Task<List<MDecision>> GetAsync(int option, MDecision model);
        Task<bool> PostAsync(MDecision model);
        Task<bool> PutAsync(int option, MDecision model);
        Task<bool> DeleteAsync(int option, List<MDecision> model);
    }
}
