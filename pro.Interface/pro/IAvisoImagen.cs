using pro.Model;

namespace pro.Interface
{
    public interface IAvisoImagen
    {
        Task<List<MAvisoImagen>> GetAsync(int option, MAvisoImagen model);
        Task<Int64> PostAsync(MAvisoImagen model);
        Task<bool> PutAsync(int option, MAvisoImagen model);
        Task<bool> DeleteAsync(int option, List<MAvisoImagen> model);
    }
}
