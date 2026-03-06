using pro.Model;

namespace pro.Interface
{
    public interface ITipoConsulta
    {
        Task<List<MTipoConsulta>> GetAsync(int option, MTipoConsulta model);
        Task<bool> PostAsync(MTipoConsulta model);
        Task<bool> PutAsync(int option, MTipoConsulta model);
        Task<bool> DeleteAsync(int option, List<MTipoConsulta> model);
    }
}
