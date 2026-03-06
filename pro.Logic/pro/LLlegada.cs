using pro.Context;
using pro.Interface;
using pro.Model;
using pro.Repository;

namespace pro.Logic
{
    public class LLlegada
    {
        public readonly ILlegada _interface;

        public LLlegada(DBPRO dbc)
        {
            _interface = new RLlegada(dbc);
        }

        public async Task<List<MLlegada>> GetAsync(int option, MLlegada model)
        {
            return await _interface.GetAsync(option, model);
        }

        public async Task<bool> PostAsync(MLlegada model)
        {
            return await _interface.PostAsync(model);
        }

        public async Task<bool> PutAsync(int option, MLlegada model)
        {
            return await _interface.PutAsync(option, model);
        }

        public async Task<bool> DeleteAsync(int option, List<MLlegada> model)
        {
            return await _interface.DeleteAsync(option, model);
        }

    }
}
