using pro.Model;

namespace pro.Interface
{
    public interface IVHemodialisis
    {
        Task<List<MVHemodialisis>> GetAsync(int option, MVHemodialisis model);
    }
}