using pro.Model;

namespace pro.Interface
{
    public interface IVAviso
    {
        Task<List<MVAviso>> GetAsync(int option, MVAviso model);
    }
}