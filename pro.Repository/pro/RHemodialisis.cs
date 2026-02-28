using Microsoft.EntityFrameworkCore;
using pro.Context;
using pro.Interface;
using pro.Model;

namespace pro.Repository
{
    public class RHemodialisis : IHemodialisis
    {
        private readonly DBPRO _dbc;

        public RHemodialisis(DBPRO dbc)
        {
            _dbc = dbc;
        }

        public async Task<List<MHemodialisis>> GetAsync(int option, MHemodialisis model)
        {
            return option switch
            {
                1 => await _dbc.Hemodialisis.Where(r => r.Id == model.Id).ToListAsync(),
                2 => await _dbc.Hemodialisis.Where(r => r.Activo == true && r.IdAgenda == model.IdAgenda).ToListAsync(),
                _ => throw new NotImplementedException()
            };
        }

        public async Task<Int64> PostAsync(MHemodialisis model)
        {
            model.FechaInserta = DateTime.Now;
            model.IdUsuarioActualiza = 0;
            model.FechaActualiza = new DateTime(1900, 1, 1);

            await _dbc.Hemodialisis.AddAsync(model);
            await _dbc.SaveChangesAsync();

            return model.Id;
        }

        public async Task<bool> PutAsync(int option, MHemodialisis model)
        {
            List<MHemodialisis> lm;

            switch (option)
            {
                case 1:
                    lm = await GetAsync(option: 1, model);

                    lm.ForEach(_model =>
                    {
                        _model.Diagnostico = model.Diagnostico;
                        _model.FechaIngreso = model.FechaIngreso;
                        _model.Talla = model.Talla;
                        _model.Peso = model.Peso;
                        _model.TipoDe = model.TipoDe;
                        _model.FechaAn = model.FechaAn;
                        _model.Residual = model.Residual;
                        _model.Alergias = model.Alergias;
                        _model.FechaPanelViral = model.FechaPanelViral;
                        _model.AgsVHB = model.AgsVHB;
                        _model.AcVHC = model.AcVHC;
                        _model.AcVIH = model.AcVIH;
                        _model.IdDecisionSalida = model.IdDecisionSalida;
                        _model.IdDecisionBaston = model.IdDecisionBaston;
                        _model.IdDecisionAuditiva = model.IdDecisionAuditiva;
                        _model.IdDecisionLinguistica = model.IdDecisionLinguistica;
                        _model.IdDecisionAndadera = model.IdDecisionAndadera;
                        _model.IdDecisionCamilla = model.IdDecisionCamilla;
                        _model.IdDecisionVisual = model.IdDecisionVisual;
                        _model.IdDecisionCreencias = model.IdDecisionCreencias;
                        _model.Filtro = model.Filtro;
                        _model.Tiempo = model.Tiempo;
                        _model.Qs = model.Qs;
                        _model.Qo = model.Qo;
                        _model.Temp = model.Temp;
                        _model.Na = model.Na;
                        _model.C = model.C;
                        _model.Qa = model.Qa;
                        _model.Hcc = model.Hcc;
                        _model.Anticoagulacion = model.Anticoagulacion;
                        _model.Rodo = model.Rodo;
                        _model.Infusion = model.Infusion;
                        _model.Ktv = model.Ktv;
                        _model.Uf = model.Uf;
                        _model.ResumenFiltro = model.ResumenFiltro;
                        _model.FrecuenciaHemodialisis = model.FrecuenciaHemodialisis;
                        _model.IndicacionesMedicas = model.IndicacionesMedicas;
                        _model.IndicacionesVerbales = model.IndicacionesVerbales;
                        _model.IndicacionesTelefonicas = model.IndicacionesTelefonicas;
                        _model.IndicacionesElectronicas = model.IndicacionesElectronicas;
                        _model.IdDecisionIndicacion = model.IdDecisionIndicacion;
                        _model.IdDecisionPaciente = model.IdDecisionPaciente;
                        _model.IdDecisionProcedimiento = model.IdDecisionProcedimiento;
                        _model.IdDecisionVerificacion = model.IdDecisionVerificacion;
                        _model.IdDecisionPreescripcion = model.IdDecisionPreescripcion;
                        _model.IdDecisionAngioacceso = model.IdDecisionAngioacceso;
                        _model.IdDecisionTimeOut = model.IdDecisionTimeOut;
                        _model.IdDecisionEquipo = model.IdDecisionEquipo;
                        _model.IdDecisionRiesgo = model.IdDecisionRiesgo;
                        _model.IdDecisionIdentifico = model.IdDecisionIdentifico;
                        _model.PreTAPie = model.PreTAPie;
                        _model.PreFCPie = model.PreFCPie;
                        _model.PreTempC = model.PreTempC;
                        _model.PreTASentado = model.PreTASentado;
                        _model.PreFCSentado = model.PreFCSentado;
                        _model.PreSaturacion = model.PreSaturacion;
                        _model.PreFRespiratoria = model.PreFRespiratoria;
                        _model.PrePesoEgreso = model.PrePesoEgreso;
                        _model.PrePesoActual = model.PrePesoActual;
                        _model.PosTAPie = model.PosTAPie;
                        _model.PosFCPie = model.PosFCPie;
                        _model.PosTempC = model.PosTempC;
                        _model.PosTASentado = model.PosTASentado;
                        _model.PosFCSentado = model.PosFCSentado;
                        _model.PosSaturacion = model.PosSaturacion;
                        _model.PosFRespiratoria = model.PosFRespiratoria;
                        _model.PosGananciaPeso = model.PosGananciaPeso;
                        _model.PosPesoFinal = model.PosPesoFinal;
                        _model.IdDecisionPreExterno = model.IdDecisionPreExterno;
                        _model.IdDecisionPreInterno = model.IdDecisionPreInterno;
                        _model.IdDecisionPreCateter = model.IdDecisionPreCateter;
                        _model.IdDecisionPrePermeabilidad = model.IdDecisionPrePermeabilidad;
                        _model.IdDecisionPreInfeccion = model.IdDecisionPreInfeccion;
                        _model.IdDecisionTraExterno = model.IdDecisionTraExterno;
                        _model.IdDecisionTraInterno = model.IdDecisionTraInterno;
                        _model.IdDecisionTraCateter = model.IdDecisionTraCateter;
                        _model.IdDecisionTraPermeabilidad = model.IdDecisionTraPermeabilidad;
                        _model.IdDecisionTraInfeccion = model.IdDecisionTraInfeccion;
                        _model.IdDecisionPosExterno = model.IdDecisionPosExterno;
                        _model.IdDecisionPosInterno = model.IdDecisionPosInterno;
                        _model.IdDecisionPosCateter = model.IdDecisionPosCateter;
                        _model.IdDecisionPosPermeabilidad = model.IdDecisionPosPermeabilidad;
                        _model.IdDecisionPosInfeccion = model.IdDecisionPosInfeccion;
                        _model.ObservacionCateter = model.ObservacionCateter;
                        _model.IdDecisionPreTrill = model.IdDecisionPreTrill;
                        _model.IdDecisionPreEdena = model.IdDecisionPreEdena;
                        _model.IdDecisionPreEquimosis = model.IdDecisionPreEquimosis;
                        _model.IdDecisionPreHematoma = model.IdDecisionPreHematoma;
                        _model.IdDecisionPreAnerisma = model.IdDecisionPreAnerisma;
                        _model.IdDecisionPreAdecuada = model.IdDecisionPreAdecuada;
                        _model.IdDecisionPreDato = model.IdDecisionPreDato;
                        _model.IdDecisionTraTrill = model.IdDecisionTraTrill;
                        _model.IdDecisionTraEdena = model.IdDecisionTraEdena;
                        _model.IdDecisionTraEquimosis = model.IdDecisionTraEquimosis;
                        _model.IdDecisionTraHematoma = model.IdDecisionTraHematoma;
                        _model.IdDecisionTraAnerisma = model.IdDecisionTraAnerisma;
                        _model.IdDecisionTraAdecuada = model.IdDecisionTraAdecuada;
                        _model.IdDecisionTraDato = model.IdDecisionTraDato;
                        _model.IdDecisionPosTrill = model.IdDecisionPosTrill;
                        _model.IdDecisionPosEdena = model.IdDecisionPosEdena;
                        _model.IdDecisionPosEquimosis = model.IdDecisionPosEquimosis;
                        _model.IdDecisionPosHematoma = model.IdDecisionPosHematoma;
                        _model.IdDecisionPosAnerisma = model.IdDecisionPosAnerisma;
                        _model.IdDecisionPosAdecuada = model.IdDecisionPosAdecuada;
                        _model.IdDecisionPosDato = model.IdDecisionPosDato;
                        _model.ObservacionFistula = model.ObservacionFistula;

                        _model.IdUsuarioActualiza = model.IdUsuarioActualiza;
                        _model.FechaActualiza = DateTime.Now;
                    });

                    break;
            }

            await _dbc.SaveChangesAsync();

            return true;
        }

        public async Task<bool> DeleteAsync(int option, List<MHemodialisis> model)
        {
            List<MHemodialisis> lm;

            foreach (MHemodialisis m in model)
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
