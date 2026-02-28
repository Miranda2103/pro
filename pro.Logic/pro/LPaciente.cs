using pro.Context;
using pro.Interface;
using pro.Model;
using pro.Repository;

namespace pro.Logic
{
    public class LPaciente
    {
        public readonly IPaciente _interface;

        public LPaciente(DBPRO dbc)
        {
            _interface = new RPaciente(dbc);
        }

        public async Task<List<MPaciente>> GetAsync(int option, MPaciente model)
        {
            return await _interface.GetAsync(option, model);
        }

        public async Task<long> PostAsync(MPaciente model)
        {
            return await _interface.PostAsync(model);
        }

        public async Task<bool> PutAsync(int option, MPaciente model)
        {
            return await _interface.PutAsync(option, model);
        }

        public async Task<bool> DeleteAsync(int option, List<MPaciente> model)
        {
            return await _interface.DeleteAsync(option, model);
        }

    }
}
