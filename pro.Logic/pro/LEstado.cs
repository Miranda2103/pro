using pro.Context;
using pro.Interface;
using pro.Model;
using pro.Repository;

namespace pro.Logic
{
    public class LEstado
    {
        public readonly IEstado _interface;

        public LEstado(DBPRO dbc)
        {
            _interface = new REstado(dbc);
        }

        public async Task<List<MEstado>> GetAsync(int option, MEstado model)
        {
            return await _interface.GetAsync(option, model);
        }

        public async Task<bool> PostAsync(MEstado model)
        {
            return await _interface.PostAsync(model);
        }

        public async Task<bool> PutAsync(int option, MEstado model)
        {
            return await _interface.PutAsync(option, model);
        }

        public async Task<bool> DeleteAsync(int option, List<MEstado> model)
        {
            return await _interface.DeleteAsync(option, model);
        }

    }
}
