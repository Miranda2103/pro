using pro.Context;
using pro.Interface;
using pro.Model;
using pro.Repository;

namespace pro.Logic
{
    public class LTipoConsulta
    {
        public readonly ITipoConsulta _interface;

        public LTipoConsulta(DBPRO dbc)
        {
            _interface = new RTipoConsulta(dbc);
        }

        public async Task<List<MTipoConsulta>> GetAsync(int option, MTipoConsulta model)
        {
            return await _interface.GetAsync(option, model);
        }

        public async Task<bool> PostAsync(MTipoConsulta model)
        {
            return await _interface.PostAsync(model);
        }

        public async Task<bool> PutAsync(int option, MTipoConsulta model)
        {
            return await _interface.PutAsync(option, model);
        }

        public async Task<bool> DeleteAsync(int option, List<MTipoConsulta> model)
        {
            return await _interface.DeleteAsync(option, model);
        }

    }
}
