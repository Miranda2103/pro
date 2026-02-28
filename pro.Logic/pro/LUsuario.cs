using pro.Context;
using pro.Interface;
using pro.Model;
using pro.Repository;

namespace pro.Logic
{
    public class LUsuario
    {
        private readonly IUsuario _interface;

        public LUsuario(DBPRO dbc)
        {
            _interface = new RUsuario(dbc);
        }

        public async Task<List<MUsuario>> GetAsync(int option, MUsuario model)
        {
            return await _interface.GetAsync(option, model);
        }

        public async Task<long> PostAsync(MUsuario model)
        {
            return await _interface.PostAsync(model);
        }

        public async Task<bool> PutAsync(int option, MUsuario model)
        {
            return await _interface.PutAsync(option, model);
        }

        public async Task<bool> DeleteAsync(int option, List<MUsuario> model)
        {
            return await _interface.DeleteAsync(option, model);
        }

    }
}
