using pro.Model;

namespace pro.Interface
{
    public interface IVTransHemodialisis
    {
        Task<List<MVTransHemodialisis>> GetAsync(int option, MVTransHemodialisis model);
    }
}