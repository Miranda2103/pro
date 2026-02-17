using pro.Model.pro;

namespace pro.Interface.pro
{
    public interface IRol
    {
        Task<List<MRol>> GetAsync(int option, MRol model);
        Task<bool> PostAsync(MRol model);
        Task<bool> PutAsync(int option, MRol model);
        Task<bool> DeleteAsync(int option, List<MRol> model);
    }
}
