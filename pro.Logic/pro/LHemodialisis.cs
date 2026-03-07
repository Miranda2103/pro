using Microsoft.Extensions.Options;
using pro.Context;
using pro.Interface;
using pro.Model;
using pro.Repository;
//using Excel = Microsoft.Office.Interop.Excel;

namespace pro.Logic
{
    public class LHemodialisis
    {
        public readonly IHemodialisis _interface;
        public readonly IVHemodialisis _interfaceVHemodialisis;
        public readonly IVTransHemodialisis _interfaceVTransHemodialisis;
        private readonly MConfiguracion _option;

        public LHemodialisis(DBPRO dbc, IOptions<MConfiguracion> option)
        {
            _interface = new RHemodialisis(dbc);
            _interfaceVHemodialisis = new RVHemodialisis(dbc);
            _interfaceVTransHemodialisis = new RVTransHemodialisis(dbc);
            _option = option.Value;
        }

        public async Task<List<MHemodialisis>> GetAsync(int option, MHemodialisis model)
        {
            return await _interface.GetAsync(option, model);
        }

        public async Task<Int64> PostAsync(MHemodialisis model)
        {
            return await _interface.PostAsync(model);
        }

        public async Task<bool> PutAsync(int option, MHemodialisis model)
        {
            return await _interface.PutAsync(option, model);
        }

        public async Task<bool> DeleteAsync(int option, List<MHemodialisis> model)
        {
            return await _interface.DeleteAsync(option, model);
        }

        public async Task<MemoryStream> ReportHemodialisis(int idAgenda)
        {
            Byte[] vs = Array.Empty<byte>();
            string blob = string.Concat(_option.RutaReporte, "plantillas", "/", "HEMODIALISIS_ANVERSO_V1.1.xlsx");
            string fileTempFileName = string.Concat(_option.RutaReporte, "descargas", "/", "HEMODIALISIS_ANVERSO_" + (DateTime.Now.Ticks) + ".xlsx");

            if (File.Exists(fileTempFileName))
            {
                File.Delete(fileTempFileName);
            }

            File.Copy(blob, fileTempFileName, true);

            //Excel.Application xlApp = new Excel.Application();
            //Excel.Workbook xlWorkbook = xlApp.Workbooks.Open(fileTempFileName, ReadOnly: false, Editable: true, IgnoreReadOnlyRecommended: true);
            //Excel._Worksheet xlWorksheet = (Excel._Worksheet)xlWorkbook.Sheets[1];
            //Excel.Range xlRange = xlWorksheet.UsedRange;

            //MVHemodialisis mHemodialisis = new()
            //{
            //    IdAgenda = idAgenda
            //};

            //List<MVHemodialisis> lHemodialises = await _interfaceVHemodialisis.GetAsync(option: 1, mHemodialisis);
            //mHemodialisis = lHemodialises.First() ?? new MVHemodialisis();


            //xlRange.Cells[6, 3] = mHemodialisis.NombreCompleto;
            //xlRange.Cells[6, 9] = mHemodialisis.FechaNacimiento;
            //xlRange.Cells[6, 12] = mHemodialisis.Edad;
            //xlRange.Cells[6, 14] = mHemodialisis.Sexo;

            //xlRange.Cells[7, 3] = mHemodialisis.Diagnostico;
            //xlRange.Cells[7, 9] = mHemodialisis.FechaIngreso;
            //xlRange.Cells[7, 12] = mHemodialisis.Talla;
            //xlRange.Cells[7, 14] = mHemodialisis.Peso;

            //xlRange.Cells[8, 3] = mHemodialisis.TipoDe;
            //xlRange.Cells[8, 9] = mHemodialisis.FechaAn;
            //xlRange.Cells[8, 14] = mHemodialisis.Residual;

            //xlRange.Cells[9, 3] = mHemodialisis.Alergias;
            //xlRange.Cells[9, 8] = mHemodialisis.FechaPanelViral;
            //xlRange.Cells[9, 10] = mHemodialisis.AgsVHB;
            //xlRange.Cells[9, 12] = mHemodialisis.AcVHC;
            //xlRange.Cells[9, 14] = mHemodialisis.AcVIH;

            //xlRange.Cells[11, 3] = (mHemodialisis.IdDecisionSalida == 1) ? "SI" : "NO";
            //xlRange.Cells[11, 6] = (mHemodialisis.IdDecisionBaston == 1) ? "SI" : "NO";
            //xlRange.Cells[11, 9] = (mHemodialisis.IdDecisionAuditiva == 1) ? "SI" : "NO";
            //xlRange.Cells[11, 13] = (mHemodialisis.IdDecisionLinguistica == 1) ? "SI" : "NO";

            //xlRange.Cells[12, 3] = (mHemodialisis.IdDecisionAndadera == 1) ? "SI" : "NO";
            //xlRange.Cells[12, 6] = (mHemodialisis.IdDecisionCamilla == 1) ? "SI" : "NO";
            //xlRange.Cells[12, 9] = (mHemodialisis.IdDecisionVisual == 1) ? "SI" : "NO";
            //xlRange.Cells[12, 13] = (mHemodialisis.IdDecisionCreencias == 1) ? "SI" : "NO";

            //xlRange.Cells[14, 2] = mHemodialisis.Filtro;
            //xlRange.Cells[14, 4] = mHemodialisis.Tiempo;
            //xlRange.Cells[14, 6] = mHemodialisis.Qs;
            //xlRange.Cells[14, 8] = mHemodialisis.Qo;
            //xlRange.Cells[14, 10] = mHemodialisis.Temp;
            //xlRange.Cells[14, 12] = mHemodialisis.Na;
            //xlRange.Cells[14, 14] = mHemodialisis.C;

            //xlRange.Cells[15, 2] = mHemodialisis.Qa;
            //xlRange.Cells[15, 4] = mHemodialisis.Hcc;
            //xlRange.Cells[15, 6] = mHemodialisis.Anticoagulacion;
            //xlRange.Cells[15, 8] = mHemodialisis.Rodo;
            //xlRange.Cells[15, 10] = mHemodialisis.Infusion;
            //xlRange.Cells[15, 12] = mHemodialisis.Ktv;
            //xlRange.Cells[15, 14] = mHemodialisis.Uf;

            //xlRange.Cells[16, 2] = mHemodialisis.ResumenFiltro;
            //xlRange.Cells[16, 11] = mHemodialisis.FrecuenciaHemodialisis;

            //xlRange.Cells[18, 1] = mHemodialisis.IndicacionesMedicas;

            //xlRange.Cells[24, 4] = mHemodialisis.IndicacionesVerbales;
            //xlRange.Cells[24, 9] = mHemodialisis.IndicacionesTelefonicas;
            //xlRange.Cells[24, 13] = mHemodialisis.IndicacionesElectronicas;
            //xlRange.Cells[25, 4] = (mHemodialisis.IdDecisionIndicacion == 1) ? "SI" : "NO";

            //xlRange.Cells[28, 5] = (mHemodialisis.IdDecisionPaciente == 1) ? "SI" : "";
            //xlRange.Cells[28, 6] = (mHemodialisis.IdDecisionPaciente == 2) ? "NO" : "";
            //xlRange.Cells[28, 9] = (mHemodialisis.IdDecisionProcedimiento == 1) ? "SI" : "";
            //xlRange.Cells[28, 10] = (mHemodialisis.IdDecisionProcedimiento == 2) ? "NO" : "";
            //xlRange.Cells[28, 13] = (mHemodialisis.IdDecisionVerificacion == 1) ? "SI" : "";
            //xlRange.Cells[28, 14] = (mHemodialisis.IdDecisionVerificacion == 2) ? "NO" : "";

            //xlRange.Cells[29, 5] = (mHemodialisis.IdDecisionPreescripcion == 1) ? "SI" : "";
            //xlRange.Cells[29, 6] = (mHemodialisis.IdDecisionPreescripcion == 2) ? "NO" : "";
            //xlRange.Cells[29, 9] = (mHemodialisis.IdDecisionAngioacceso == 1) ? "SI" : "";
            //xlRange.Cells[29, 10] = (mHemodialisis.IdDecisionAngioacceso == 2) ? "NO" : "";
            //xlRange.Cells[29, 13] = (mHemodialisis.IdDecisionTimeOut == 1) ? "SI" : "";
            //xlRange.Cells[29, 14] = (mHemodialisis.IdDecisionTimeOut == 2) ? "NO" : "";

            //xlRange.Cells[30, 5] = (mHemodialisis.IdDecisionEquipo == 1) ? "SI" : "";
            //xlRange.Cells[30, 6] = (mHemodialisis.IdDecisionEquipo == 2) ? "NO" : "";
            //xlRange.Cells[30, 9] = (mHemodialisis.IdDecisionRiesgo == 1) ? "SI" : "";
            //xlRange.Cells[30, 10] = (mHemodialisis.IdDecisionRiesgo == 2) ? "NO" : "";
            //xlRange.Cells[30, 13] = (mHemodialisis.IdDecisionIdentifico == 1) ? "SI" : "";
            //xlRange.Cells[30, 14] = (mHemodialisis.IdDecisionIdentifico == 2) ? "NO" : "";

            //xlRange.Cells[34, 3] = mHemodialisis.PreTAPie;
            //xlRange.Cells[34, 5] = mHemodialisis.PreFCPie;
            //xlRange.Cells[34, 7] = mHemodialisis.PreTempC;

            //xlRange.Cells[35, 3] = mHemodialisis.PreTASentado;
            //xlRange.Cells[35, 5] = mHemodialisis.PreFCSentado;
            //xlRange.Cells[35, 7] = mHemodialisis.PreSaturacion;

            //xlRange.Cells[36, 3] = mHemodialisis.PreFRespiratoria;

            //xlRange.Cells[37, 3] = mHemodialisis.PrePesoEgreso;
            //xlRange.Cells[37, 5] = mHemodialisis.PrePesoActual;

            //xlRange.Cells[34, 10] = mHemodialisis.PosTAPie;
            //xlRange.Cells[34, 12] = mHemodialisis.PosFCPie;
            //xlRange.Cells[34, 14] = mHemodialisis.PosTempC;

            //xlRange.Cells[35, 10] = mHemodialisis.PosTASentado;
            //xlRange.Cells[35, 12] = mHemodialisis.PosFCSentado;
            //xlRange.Cells[35, 14] = mHemodialisis.PosSaturacion;

            //xlRange.Cells[36, 10] = mHemodialisis.PosFRespiratoria;

            //xlRange.Cells[37, 10] = mHemodialisis.PosGananciaPeso;
            //xlRange.Cells[37, 14] = mHemodialisis.PosPesoFinal;

            //xlRange.Cells[40, 3] = (mHemodialisis.IdDecisionPreExterno == 1) ? "SI" : "";
            //xlRange.Cells[40, 5] = (mHemodialisis.IdDecisionPreExterno == 2) ? "NO" : "";
            //xlRange.Cells[40, 7] = (mHemodialisis.IdDecisionTraExterno == 1) ? "SI" : "";
            //xlRange.Cells[40, 9] = (mHemodialisis.IdDecisionTraExterno == 2) ? "NO" : "";
            //xlRange.Cells[40, 11] = (mHemodialisis.IdDecisionPosExterno == 1) ? "SI" : "";
            //xlRange.Cells[40, 13] = (mHemodialisis.IdDecisionPosExterno == 2) ? "NO" : "";

            //xlRange.Cells[41, 3] = (mHemodialisis.IdDecisionPreInterno == 1) ? "SI" : "";
            //xlRange.Cells[41, 5] = (mHemodialisis.IdDecisionPreInterno == 2) ? "NO" : "";
            //xlRange.Cells[41, 7] = (mHemodialisis.IdDecisionTraInterno == 1) ? "SI" : "";
            //xlRange.Cells[41, 9] = (mHemodialisis.IdDecisionTraInterno == 2) ? "NO" : "";
            //xlRange.Cells[41, 11] = (mHemodialisis.IdDecisionPosInterno == 1) ? "SI" : "";
            //xlRange.Cells[41, 13] = (mHemodialisis.IdDecisionPosInterno == 2) ? "NO" : "";

            //xlRange.Cells[42, 3] = (mHemodialisis.IdDecisionPreCateter == 1) ? "SI" : "";
            //xlRange.Cells[42, 5] = (mHemodialisis.IdDecisionPreCateter == 2) ? "NO" : "";
            //xlRange.Cells[42, 7] = (mHemodialisis.IdDecisionTraCateter == 1) ? "SI" : "";
            //xlRange.Cells[42, 9] = (mHemodialisis.IdDecisionTraCateter == 2) ? "NO" : "";
            //xlRange.Cells[42, 11] = (mHemodialisis.IdDecisionPosCateter == 1) ? "SI" : "";
            //xlRange.Cells[42, 13] = (mHemodialisis.IdDecisionPosCateter == 2) ? "NO" : "";

            //xlRange.Cells[43, 3] = (mHemodialisis.IdDecisionPrePermeabilidad == 1) ? "SI" : "";
            //xlRange.Cells[43, 5] = (mHemodialisis.IdDecisionPrePermeabilidad == 2) ? "NO" : "";
            //xlRange.Cells[43, 7] = (mHemodialisis.IdDecisionTraPermeabilidad == 1) ? "SI" : "";
            //xlRange.Cells[43, 9] = (mHemodialisis.IdDecisionTraPermeabilidad == 2) ? "NO" : "";
            //xlRange.Cells[43, 11] = (mHemodialisis.IdDecisionPosPermeabilidad == 1) ? "SI" : "";
            //xlRange.Cells[43, 13] = (mHemodialisis.IdDecisionPosPermeabilidad == 2) ? "NO" : "";

            //xlRange.Cells[44, 3] = (mHemodialisis.IdDecisionPreInfeccion == 1) ? "SI" : "";
            //xlRange.Cells[44, 5] = (mHemodialisis.IdDecisionPreInfeccion == 2) ? "NO" : "";
            //xlRange.Cells[44, 7] = (mHemodialisis.IdDecisionTraInfeccion == 1) ? "SI" : "";
            //xlRange.Cells[44, 9] = (mHemodialisis.IdDecisionTraInfeccion == 2) ? "NO" : "";
            //xlRange.Cells[44, 11] = (mHemodialisis.IdDecisionPosInfeccion == 1) ? "SI" : "";
            //xlRange.Cells[44, 13] = (mHemodialisis.IdDecisionPosInfeccion == 2) ? "NO" : "";

            //xlRange.Cells[47, 3] = (mHemodialisis.IdDecisionPreTrill == 1) ? "SI" : "";
            //xlRange.Cells[47, 5] = (mHemodialisis.IdDecisionPreTrill == 2) ? "NO" : "";
            //xlRange.Cells[47, 7] = (mHemodialisis.IdDecisionTraTrill == 1) ? "SI" : "";
            //xlRange.Cells[47, 9] = (mHemodialisis.IdDecisionTraTrill == 2) ? "NO" : "";
            //xlRange.Cells[47, 11] = (mHemodialisis.IdDecisionPosTrill == 1) ? "SI" : "";
            //xlRange.Cells[47, 13] = (mHemodialisis.IdDecisionPosTrill == 2) ? "NO" : "";

            //xlRange.Cells[48, 3] = (mHemodialisis.IdDecisionPreEdena == 1) ? "SI" : "";
            //xlRange.Cells[48, 5] = (mHemodialisis.IdDecisionPreEdena == 2) ? "NO" : "";
            //xlRange.Cells[48, 7] = (mHemodialisis.IdDecisionTraEdena == 1) ? "SI" : "";
            //xlRange.Cells[48, 9] = (mHemodialisis.IdDecisionTraEdena == 2) ? "NO" : "";
            //xlRange.Cells[48, 11] = (mHemodialisis.IdDecisionPosEdena == 1) ? "SI" : "";
            //xlRange.Cells[48, 13] = (mHemodialisis.IdDecisionPosEdena == 2) ? "NO" : "";

            //xlRange.Cells[49, 3] = (mHemodialisis.IdDecisionPreEquimosis == 1) ? "SI" : "";
            //xlRange.Cells[49, 5] = (mHemodialisis.IdDecisionPreEquimosis == 2) ? "NO" : "";
            //xlRange.Cells[49, 7] = (mHemodialisis.IdDecisionTraEquimosis == 1) ? "SI" : "";
            //xlRange.Cells[49, 9] = (mHemodialisis.IdDecisionTraEquimosis == 2) ? "NO" : "";
            //xlRange.Cells[49, 11] = (mHemodialisis.IdDecisionPosEquimosis == 1) ? "SI" : "";
            //xlRange.Cells[49, 13] = (mHemodialisis.IdDecisionPosEquimosis == 2) ? "NO" : "";

            //xlRange.Cells[50, 3] = (mHemodialisis.IdDecisionPreHematoma == 1) ? "SI" : "";
            //xlRange.Cells[50, 5] = (mHemodialisis.IdDecisionPreHematoma == 2) ? "NO" : "";
            //xlRange.Cells[50, 7] = (mHemodialisis.IdDecisionTraHematoma == 1) ? "SI" : "";
            //xlRange.Cells[50, 9] = (mHemodialisis.IdDecisionTraHematoma == 2) ? "NO" : "";
            //xlRange.Cells[50, 11] = (mHemodialisis.IdDecisionPosHematoma == 1) ? "SI" : "";
            //xlRange.Cells[50, 13] = (mHemodialisis.IdDecisionPosHematoma == 2) ? "NO" : "";

            //xlRange.Cells[51, 3] = (mHemodialisis.IdDecisionPreAnerisma == 1) ? "SI" : "";
            //xlRange.Cells[51, 5] = (mHemodialisis.IdDecisionPreAnerisma == 2) ? "NO" : "";
            //xlRange.Cells[51, 7] = (mHemodialisis.IdDecisionTraAnerisma == 1) ? "SI" : "";
            //xlRange.Cells[51, 9] = (mHemodialisis.IdDecisionTraAnerisma == 2) ? "NO" : "";
            //xlRange.Cells[51, 11] = (mHemodialisis.IdDecisionPosAnerisma == 1) ? "SI" : "";
            //xlRange.Cells[51, 13] = (mHemodialisis.IdDecisionPosAnerisma == 2) ? "NO" : "";

            //xlRange.Cells[52, 3] = (mHemodialisis.IdDecisionPreAdecuada == 1) ? "SI" : "";
            //xlRange.Cells[52, 5] = (mHemodialisis.IdDecisionPreAdecuada == 2) ? "NO" : "";
            //xlRange.Cells[52, 7] = (mHemodialisis.IdDecisionTraAdecuada == 1) ? "SI" : "";
            //xlRange.Cells[52, 9] = (mHemodialisis.IdDecisionTraAdecuada == 2) ? "NO" : "";
            //xlRange.Cells[52, 11] = (mHemodialisis.IdDecisionPosAdecuada == 1) ? "SI" : "";
            //xlRange.Cells[52, 13] = (mHemodialisis.IdDecisionPosAdecuada == 2) ? "NO" : "";

            //xlRange.Cells[53, 3] = (mHemodialisis.IdDecisionPreDato == 1) ? "SI" : "";
            //xlRange.Cells[53, 5] = (mHemodialisis.IdDecisionPreDato == 2) ? "NO" : "";
            //xlRange.Cells[53, 7] = (mHemodialisis.IdDecisionTraDato == 1) ? "SI" : "";
            //xlRange.Cells[53, 9] = (mHemodialisis.IdDecisionTraDato == 2) ? "NO" : "";
            //xlRange.Cells[53, 11] = (mHemodialisis.IdDecisionPosDato == 1) ? "SI" : "";
            //xlRange.Cells[53, 13] = (mHemodialisis.IdDecisionPosDato == 2) ? "NO" : "";

            //xlRange.Cells[54, 3] = mHemodialisis.ObservacionFistula;

            //MVTransHemodialisis mTransHemodialisis = new()
            //{
            //    IdAgenda = idAgenda
            //};

            //List<MVTransHemodialisis> lTransHemodialises = await _interfaceVTransHemodialisis.GetAsync(option: 1, mTransHemodialisis);

            //int x = 57;

            //foreach (MVTransHemodialisis item in lTransHemodialises)
            //{
            //    xlRange.Cells[x, 1] = item.Hora;
            //    xlRange.Cells[x, 2] = item.Ta;
            //    xlRange.Cells[x, 3] = item.Fc;
            //    xlRange.Cells[x, 4] = item.Fr;
            //    xlRange.Cells[x, 5] = item.Sat;
            //    xlRange.Cells[x, 6] = item.Temp;
            //    xlRange.Cells[x, 7] = item.Qc;
            //    xlRange.Cells[x, 8] = item.Qo;
            //    xlRange.Cells[x, 9] = item.Part;
            //    xlRange.Cells[x, 10] = item.Pven;
            //    xlRange.Cells[x, 11] = item.Ptm;
            //    xlRange.Cells[x, 12] = item.TasaUf;
            //    xlRange.Cells[x, 13] = item.Uf;
            //    xlRange.Cells[x, 14] = item.Ktv;
            //    x++;
            //}

            //GC.Collect();
            //GC.WaitForPendingFinalizers();

            //xlWorkbook.Save();
            //xlWorkbook.Close();
            //xlApp.Quit();

            using (var wc = new System.Net.WebClient())
                vs = wc.DownloadData(fileTempFileName);

            return new MemoryStream(vs);
        }

    }
}
