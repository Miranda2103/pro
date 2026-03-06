using pro.Model;

namespace pro.Interface
{
    public interface IVConsentimiento
    {
        Task<List<MVConsentimiento>> GetAsync(int option, MVConsentimiento model);
    }
}