using pro.Model;

namespace pro.Interface
{
    public interface IVUsuario
    {
        Task<List<MVUsuario>> GetAsync(int option, MVUsuario model);
    }
}