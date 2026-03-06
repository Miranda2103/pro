using pro.Model;

namespace pro.Interface
{
    public interface IPagoImagen
    {
        Task<List<MPagoImagen>> GetAsync(int option, MPagoImagen model);
        Task<Int64> PostAsync(MPagoImagen model);
        Task<bool> PutAsync(int option, MPagoImagen model);
        Task<bool> DeleteAsync(int option, List<MPagoImagen> model);
    }
}
