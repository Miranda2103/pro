using pro.Model.pro;

namespace pro.Interface.pro
{
    public interface IOrganizacion
    {
        Task<List<MOrganizacion>> GetAsync(int option, MOrganizacion model);
        Task<long> PostAsync(MOrganizacion model);
        Task<bool> PutAsync(int option, MOrganizacion model);
        Task<bool> DeleteAsync(int option, List<MOrganizacion> model);
    }
}
