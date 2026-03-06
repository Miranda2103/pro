using pro.Model;

namespace pro.Interface
{
    public interface IVEquipo
    {
        Task<List<MVEquipo>> GetAsync(int option, MVEquipo model);
    }
}