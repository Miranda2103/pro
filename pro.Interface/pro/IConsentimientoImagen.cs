using pro.Model;

namespace pro.Interface
{
    public interface IConsentimientoImagen
    {
        Task<List<MConsentimientoImagen>> GetAsync(int option, MConsentimientoImagen model);
        Task<Int64> PostAsync(MConsentimientoImagen model);
        Task<bool> PutAsync(int option, MConsentimientoImagen model);
        Task<bool> DeleteAsync(int option, List<MConsentimientoImagen> model);
    }
}
