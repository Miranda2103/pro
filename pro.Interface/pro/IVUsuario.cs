using pro.Model.pro;

namespace pro.Interface.pro
{
    public interface IVUsuario
    {
        Task<List<MVUsuario>> GetAsync(int option, MVUsuario model);
    }
}