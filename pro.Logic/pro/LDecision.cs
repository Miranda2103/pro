using pro.Context;
using pro.Interface;
using pro.Model;
using pro.Repository;

namespace pro.Logic
{
    public class LDecision
    {
        public readonly IDecision _interface;

        public LDecision(DBPRO dbc)
        {
            _interface = new RDecision(dbc);
        }

        public async Task<List<MDecision>> GetAsync(int option, MDecision model)
        {
            return await _interface.GetAsync(option, model);
        }

        public async Task<bool> PostAsync(MDecision model)
        {
            return await _interface.PostAsync(model);
        }

        public async Task<bool> PutAsync(int option, MDecision model)
        {
            return await _interface.PutAsync(option, model);
        }

        public async Task<bool> DeleteAsync(int option, List<MDecision> model)
        {
            return await _interface.DeleteAsync(option, model);
        }

    }
}
