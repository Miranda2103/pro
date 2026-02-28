using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pro.Model
{
    [DisplayName("Hemodialisis")]
    [Table("Hemodialisis", Schema = "prod")]
    public class MHemodialisis
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }

        public long IdAgenda { get; set; }

        [StringLength(250)]
        public string Diagnostico { get; set; }

        public DateTime FechaIngreso { get; set; }

        [StringLength(250)]
        public string Talla { get; set; }

        [StringLength(250)]
        public string Peso { get; set; }

        [StringLength(250)]
        public string TipoDe { get; set; }

        public DateTime FechaAn { get; set; }

        [StringLength(250)]
        public string Residual { get; set; }

        [StringLength(250)]
        public string Alergias { get; set; }

        public DateTime FechaPanelViral { get; set; }

        [StringLength(250)]
        public string AgsVHB { get; set; }

        [StringLength(250)]
        public string AcVHC { get; set; }

        [StringLength(250)]
        public string AcVIH { get; set; }

        public long IdDecisionSalida { get; set; }

        public long IdDecisionBaston { get; set; }

        public long IdDecisionAuditiva { get; set; }

        public long IdDecisionLinguistica { get; set; }

        public long IdDecisionAndadera { get; set; }

        public long IdDecisionCamilla { get; set; }

        public long IdDecisionVisual { get; set; }

        public long IdDecisionCreencias { get; set; }

        [StringLength(250)]
        public string Filtro { get; set; }

        [StringLength(250)]
        public string Tiempo { get; set; }

        [StringLength(250)]
        public string Qs { get; set; }

        [StringLength(250)]
        public string Qo { get; set; }

        [StringLength(250)]
        public string Temp { get; set; }

        [StringLength(250)]
        public string Na { get; set; }

        [StringLength(250)]
        public string C { get; set; }

        [StringLength(250)]
        public string Qa { get; set; }

        [StringLength(250)]
        public string Hcc { get; set; }

        [StringLength(250)]
        public string Anticoagulacion { get; set; }

        [StringLength(250)]
        public string Rodo { get; set; }

        [StringLength(250)]
        public string Infusion { get; set; }

        [StringLength(250)]
        public string Ktv { get; set; }

        [StringLength(250)]
        public string Uf { get; set; }

        [StringLength(250)]
        public string ResumenFiltro { get; set; }

        [StringLength(250)]
        public string FrecuenciaHemodialisis { get; set; }

        [StringLength(1000)]
        public string IndicacionesMedicas { get; set; }

        [StringLength(250)]
        public string IndicacionesVerbales { get; set; }

        [StringLength(250)]
        public string IndicacionesTelefonicas { get; set; }

        [StringLength(250)]
        public string IndicacionesElectronicas { get; set; }

        public long IdDecisionIndicacion { get; set; }

        public long IdDecisionPaciente { get; set; }

        public long IdDecisionProcedimiento { get; set; }

        public long IdDecisionVerificacion { get; set; }

        public long IdDecisionPreescripcion { get; set; }

        public long IdDecisionAngioacceso { get; set; }

        public long IdDecisionTimeOut { get; set; }

        public long IdDecisionEquipo { get; set; }

        public long IdDecisionRiesgo { get; set; }

        public long IdDecisionIdentifico { get; set; }

        [StringLength(250)]
        public string PreTAPie { get; set; }

        [StringLength(250)]
        public string PreFCPie { get; set; }

        [StringLength(250)]
        public string PreTempC { get; set; }

        [StringLength(250)]
        public string PreTASentado { get; set; }

        [StringLength(250)]
        public string PreFCSentado { get; set; }

        [StringLength(250)]
        public string PreSaturacion { get; set; }

        [StringLength(250)]
        public string PreFRespiratoria { get; set; }

        [StringLength(250)]
        public string PrePesoEgreso { get; set; }

        [StringLength(250)]
        public string PrePesoActual { get; set; }

        [StringLength(250)]
        public string PosTAPie { get; set; }

        [StringLength(250)]
        public string PosFCPie { get; set; }

        [StringLength(250)]
        public string PosTempC { get; set; }

        [StringLength(250)]
        public string PosTASentado { get; set; }

        [StringLength(250)]
        public string PosFCSentado { get; set; }

        [StringLength(250)]
        public string PosSaturacion { get; set; }

        [StringLength(250)]
        public string PosFRespiratoria { get; set; }

        [StringLength(250)]
        public string PosGananciaPeso { get; set; }

        [StringLength(250)]
        public string PosPesoFinal { get; set; }

        public long IdDecisionPreExterno { get; set; }

        public long IdDecisionPreInterno { get; set; }

        public long IdDecisionPreCateter { get; set; }

        public long IdDecisionPrePermeabilidad { get; set; }

        public long IdDecisionPreInfeccion { get; set; }

        public long IdDecisionTraExterno { get; set; }

        public long IdDecisionTraInterno { get; set; }

        public long IdDecisionTraCateter { get; set; }

        public long IdDecisionTraPermeabilidad { get; set; }

        public long IdDecisionTraInfeccion { get; set; }

        public long IdDecisionPosExterno { get; set; }

        public long IdDecisionPosInterno { get; set; }

        public long IdDecisionPosCateter { get; set; }

        public long IdDecisionPosPermeabilidad { get; set; }

        public long IdDecisionPosInfeccion { get; set; }

        [StringLength(250)]
        public string ObservacionCateter { get; set; }

        public long IdDecisionPreTrill { get; set; }

        public long IdDecisionPreEdena { get; set; }

        public long IdDecisionPreEquimosis { get; set; }

        public long IdDecisionPreHematoma { get; set; }

        public long IdDecisionPreAnerisma { get; set; }

        public long IdDecisionPreAdecuada { get; set; }

        public long IdDecisionPreDato { get; set; }

        public long IdDecisionTraTrill { get; set; }

        public long IdDecisionTraEdena { get; set; }

        public long IdDecisionTraEquimosis { get; set; }

        public long IdDecisionTraHematoma { get; set; }

        public long IdDecisionTraAnerisma { get; set; }

        public long IdDecisionTraAdecuada { get; set; }

        public long IdDecisionTraDato { get; set; }

        public long IdDecisionPosTrill { get; set; }

        public long IdDecisionPosEdena { get; set; }

        public long IdDecisionPosEquimosis { get; set; }

        public long IdDecisionPosHematoma { get; set; }

        public long IdDecisionPosAnerisma { get; set; }

        public long IdDecisionPosAdecuada { get; set; }

        public long IdDecisionPosDato { get; set; }

        [StringLength(250)]
        public string ObservacionFistula { get; set; }

        public long IdOrganizacion { get; set; }

        public long IdUsuarioInserta { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime FechaInserta { get; set; }

        public long IdUsuarioActualiza { get; set; }

        public DateTime FechaActualiza { get; set; }

        public bool Activo { get; set; }

        public MHemodialisis()
        {
            Diagnostico = string.Empty;
            Talla = string.Empty;
            Peso = string.Empty;
            TipoDe = string.Empty;
            Residual = string.Empty;
            Alergias = string.Empty;
            AgsVHB = string.Empty;
            AcVHC = string.Empty;
            AcVIH = string.Empty;
            Filtro = string.Empty;
            Tiempo = string.Empty;
            Qs = string.Empty;
            Qo = string.Empty;
            Temp = string.Empty;
            Na = string.Empty;
            C = string.Empty;
            Qa = string.Empty;
            Hcc = string.Empty;
            Anticoagulacion = string.Empty;
            Rodo = string.Empty;
            Infusion = string.Empty;
            Ktv = string.Empty;
            Uf = string.Empty;
            ResumenFiltro = string.Empty;
            FrecuenciaHemodialisis = string.Empty;
            IndicacionesMedicas = string.Empty;
            IndicacionesVerbales = string.Empty;
            IndicacionesTelefonicas = string.Empty;
            IndicacionesElectronicas = string.Empty;
            PreTAPie = string.Empty;
            PreFCPie = string.Empty;
            PreTempC = string.Empty;
            PreTASentado = string.Empty;
            PreFCSentado = string.Empty;
            PreSaturacion = string.Empty;
            PreFRespiratoria = string.Empty;
            PrePesoEgreso = string.Empty;
            PrePesoActual = string.Empty;
            PosTAPie = string.Empty;
            PosFCPie = string.Empty;
            PosTempC = string.Empty;
            PosTASentado = string.Empty;
            PosFCSentado = string.Empty;
            PosSaturacion = string.Empty;
            PosFRespiratoria = string.Empty;
            PosGananciaPeso = string.Empty;
            PosPesoFinal = string.Empty;
            ObservacionCateter = string.Empty;
            ObservacionFistula = string.Empty;
        }

    }
}
