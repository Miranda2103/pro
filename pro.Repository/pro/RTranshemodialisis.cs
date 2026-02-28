using Microsoft.EntityFrameworkCore;
using pro.Context;
using pro.Interface;
using pro.Model;

namespace pro.Repository
{
    public class RTranshemodialisis : ITranshemodialisis
    {
        private readonly DBPRO _dbc;

        public RTranshemodialisis(DBPRO dbc)
        {
            _dbc = dbc;
        }

        public async Task<List<MTranshemodialisis>> GetAsync(int option, MTranshemodialisis model)
        {
            return option switch
            {
                1 => await _dbc.Transhemodialisis.Where(r => r.Activo == true && r.IdAgenda == model.IdAgenda).ToListAsync(),
                _ => throw new NotImplementedException()
            };
        }

        public async Task<Boolean> PostAsync(List<MTranshemodialisis> model)
        {
            foreach (MTranshemodialisis m in model)
            {
                m.FechaInserta = DateTime.Now;
                m.IdUsuarioActualiza = 0;
                m.FechaActualiza = new DateTime(1900, 1, 1);
            }

            await _dbc.Transhemodialisis.AddRangeAsync(model);
            await _dbc.SaveChangesAsync();

            return true;
        }

        public async Task<bool> PutAsync(int option, MTranshemodialisis model)
        {
            List<MTranshemodialisis> lm;

            switch (option)
            {
                case 1:
                    lm = await GetAsync(option: 1, model);

                    lm.ForEach(_model =>
                    {
                        _model.Hora = model.Hora;
                        _model.Ta = model.Ta;
                        _model.Fc = model.Fc;
                        _model.Fr = model.Fr;
                        _model.Sat = model.Sat;
                        _model.Temp = model.Temp;
                        _model.Qc = model.Qc;
                        _model.Qo = model.Qo;
                        _model.Part = model.Part;
                        _model.Pven = model.Pven;
                        _model.Ptm = model.Ptm;
                        _model.TasaUf = model.TasaUf;
                        _model.Uf = model.Uf;
                        _model.Ktv = model.Ktv;

                        _model.IdUsuarioActualiza = model.IdUsuarioActualiza;
                        _model.FechaActualiza = DateTime.Now;
                    });

                    break;
            }

            await _dbc.SaveChangesAsync();

            return true;
        }

        public async Task<bool> DeleteAsync(int option, List<MTranshemodialisis> model)
        {
            List<MTranshemodialisis> lm;

            foreach (MTranshemodialisis m in model)
            {
                switch (option)
                {
                    case 1:
                        lm = await GetAsync(option: 1, m);

                        lm.ForEach(_model =>
                        {
                            _model.IdUsuarioActualiza = m.IdUsuarioActualiza;
                            _model.FechaActualiza = DateTime.Now;
                            _model.Activo = m.Activo;
                        });

                        break;
                }
            }

            await _dbc.SaveChangesAsync();

            return true;
        }

    }
}
