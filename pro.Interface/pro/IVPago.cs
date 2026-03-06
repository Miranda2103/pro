using pro.Model;

namespace pro.Interface
{
    public interface IVPago
    {
        Task<List<MVPago>> GetAsync(int option, MVPago model);
    }
}