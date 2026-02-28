using pro.Model;

namespace pro.Interface
{
    public interface IMunicipio
    {
        Task<List<MMunicipio>> GetAsync(int option, MMunicipio model);
        Task<bool> PostAsync(MMunicipio model);
        Task<bool> PutAsync(int option, MMunicipio model);
        Task<bool> DeleteAsync(int option, List<MMunicipio> model);
    }
}
