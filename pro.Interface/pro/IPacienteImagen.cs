using pro.Model;

namespace pro.Interface
{
    public interface IPacienteImagen
    {
        Task<List<MPacienteImagen>> GetAsync(int option, MPacienteImagen model);
        Task<bool> PostAsync(MPacienteImagen model);
        Task<bool> PutAsync(int option, MPacienteImagen model);
        Task<bool> DeleteAsync(int option, List<MPacienteImagen> model);
    }
}
