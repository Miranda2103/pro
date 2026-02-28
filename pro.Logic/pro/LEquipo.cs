using pro.Context;
using pro.Interface;
using pro.Model;
using pro.Repository;

namespace pro.Logic
{
    public class LEquipo
    {
        public readonly IEquipo _interface;

        public LEquipo(DBPRO dbc)
        {
            _interface = new REquipo(dbc);
        }

        public async Task<List<MEquipo>> GetAsync(int option, MEquipo model)
        {
            return await _interface.GetAsync(option, model);
        }

        public async Task<bool> PostAsync(MEquipo model)
        {
            return await _interface.PostAsync(model);
        }

        public async Task<bool> PutAsync(int option, MEquipo model)
        {
            return await _interface.PutAsync(option, model);
        }

        public async Task<bool> DeleteAsync(int option, List<MEquipo> model)
        {
            return await _interface.DeleteAsync(option, model);
        }

    }
}
