using Microsoft.Extensions.Options;
using pro.Context;
using pro.Interface;
using pro.Model;
using pro.Repository;
//using Word = Microsoft.Office.Interop.Word;

namespace pro.Logic
{
    public class LPago
    {
        public readonly IPago _interface;
        public readonly IVPago _interfaceVPago;
        public readonly IVConsentimiento _interfaceVConsentimiento;
        public readonly IVAviso _interfaceVAviso;
        private readonly MConfiguracion _option;

        public LPago(DBPRO dbc, IOptions<MConfiguracion> option)
        {
            _interface = new RPago(dbc);
            _interfaceVPago = new RVPago(dbc);
            _interfaceVConsentimiento = new RVConsentimiento(dbc);
            _interfaceVAviso = new RVAviso(dbc);
            _option = option.Value;
        }

        public async Task<List<MPago>> GetAsync(int option, MPago model)
        {
            return await _interface.GetAsync(option, model);
        }

        public async Task<bool> PostAsync(MPago model)
        {
            return await _interface.PostAsync(model);
        }

        public async Task<bool> PutAsync(int option, MPago model)
        {
            return await _interface.PutAsync(option, model);
        }

        public async Task<bool> DeleteAsync(int option, List<MPago> model)
        {
            return await _interface.DeleteAsync(option, model);
        }

        public async Task<MemoryStream> PaymentDocument(int idAgenda)
        {
            Byte[] vs = Array.Empty<byte>();
            string fileName = "RECIBO_PAGO";
            string extension = ".docx";
            string blob = string.Concat(_option.RutaReporte, "plantillas", "/", fileName, extension);
            string fileTemp = string.Concat(_option.RutaReporte, "descargas", "/", fileName + "_" + (DateTime.Now.Ticks) + extension);

            if (File.Exists(fileTemp))
            {
                File.Delete(fileTemp);
            }

            File.Copy(blob, fileTemp, true);

            MVPago mPago = new()
            {
                IdAgenda = idAgenda
            };
            
            List<MVPago> lVPago = await _interfaceVPago.GetAsync(option: 1, mPago);
            mPago = lVPago.First() ?? new MVPago();

            //var wordApp = new Word.Application();
            //var doc = wordApp.Documents.Open(fileTemp);

            //object replaceAll = Word.WdReplace.wdReplaceAll;
            //Word.Find findObject = wordApp.Selection.Find;
            
            //findObject.ClearFormatting();
            //findObject.Text = "[FECHA]";
            //findObject.Replacement.Text = mPago.Fecha;
            //findObject.Replacement.ClearFormatting();
            //findObject.Execute(Replace: ref replaceAll);

            //findObject.ClearFormatting();
            //findObject.Text = "[NOMBRE_PACIENTE]";
            //findObject.Replacement.ClearFormatting();
            //findObject.Replacement.Text = mPago.NombreCompleto;
            //findObject.Execute(Replace: ref replaceAll);

            //findObject.ClearFormatting();
            //findObject.Text = "[IMPORTE]";
            //findObject.Replacement.ClearFormatting();
            //findObject.Replacement.Text = mPago.Importe.ToString();
            //findObject.Execute(Replace: ref replaceAll);

            //findObject.ClearFormatting();
            //findObject.Text = "[IMPORTE_LETRA]";
            //findObject.Replacement.ClearFormatting();
            //findObject.Replacement.Text = mPago.ImporteLetra;
            //findObject.Execute(Replace: ref replaceAll);

            //doc.Save();
            //doc.Close();
            //wordApp.Quit();

            using (var wc = new System.Net.WebClient())
                vs = wc.DownloadData(fileTemp);

            return new MemoryStream(vs);
        }

        public async Task<MemoryStream> ConsentDocument(int idPaciente)
        {
            Byte[] vs = Array.Empty<byte>();
            string fileName = "CONSENTIMIENTO_INFORMADO";
            string extension = ".docx";
            string blob = string.Concat(_option.RutaReporte, "plantillas", "/", fileName, extension);
            string fileTemp = string.Concat(_option.RutaReporte, "descargas", "/", fileName + "_" + (DateTime.Now.Ticks) + extension);

            if (File.Exists(fileTemp))
            {
                File.Delete(fileTemp);
            }

            File.Copy(blob, fileTemp, true);

            MVConsentimiento mVConsentimiento = new()
            {
                IdPaciente = idPaciente
            };

            List<MVConsentimiento> lVConsentimiento = await _interfaceVConsentimiento.GetAsync(option: 1, mVConsentimiento);
            mVConsentimiento = lVConsentimiento.First() ?? new MVConsentimiento();

            //var wordApp = new Word.Application();
            //var doc = wordApp.Documents.Open(fileTemp);

            //object replaceAll = Word.WdReplace.wdReplaceAll;
            //Word.Find findObject = wordApp.Selection.Find;

            //findObject.ClearFormatting();
            //findObject.Text = "[FECHA]";
            //findObject.Replacement.Text = mVConsentimiento.Fecha;
            //findObject.Replacement.ClearFormatting();
            //findObject.Execute(Replace: ref replaceAll);

            //findObject.ClearFormatting();
            //findObject.Text = "[NOMBRE_PACIENTE]";
            //findObject.Replacement.ClearFormatting();
            //findObject.Replacement.Text = mVConsentimiento.NombreCompleto;
            //findObject.Execute(Replace: ref replaceAll);

            //findObject.ClearFormatting();
            //findObject.Text = "[GENERO]";
            //findObject.Replacement.ClearFormatting();
            //findObject.Replacement.Text = mVConsentimiento.Sexo;
            //findObject.Execute(Replace: ref replaceAll);

            //findObject.ClearFormatting();
            //findObject.Text = "[FECHA_NACIMIENTO]";
            //findObject.Replacement.ClearFormatting();
            //findObject.Replacement.Text = mVConsentimiento.FechaNacimiento;
            //findObject.Execute(Replace: ref replaceAll);

            //findObject.ClearFormatting();
            //findObject.Text = "[EDAD]";
            //findObject.Replacement.ClearFormatting();
            //findObject.Replacement.Text = mVConsentimiento.Edad.ToString();
            //findObject.Execute(Replace: ref replaceAll);

            //doc.Save();
            //doc.Close();
            //wordApp.Quit();

            using (var wc = new System.Net.WebClient())
                vs = wc.DownloadData(fileTemp);

            return new MemoryStream(vs);
        }

        public async Task<MemoryStream> NoticeDocument(int idPaciente)
        {
            Byte[] vs = Array.Empty<byte>();
            string fileName = "AVISO_HORARIO";
            string extension = ".docx";
            string blob = string.Concat(_option.RutaReporte, "plantillas", "/", fileName, extension);
            string fileTemp = string.Concat(_option.RutaReporte, "descargas", "/", fileName + "_" + (DateTime.Now.Ticks) + extension);

            if (File.Exists(fileTemp))
            {
                File.Delete(fileTemp);
            }

            File.Copy(blob, fileTemp, true);

            MVAviso mVAviso = new()
            {
                IdPaciente = idPaciente
            };

            List<MVAviso> lVAviso = await _interfaceVAviso.GetAsync(option: 1, mVAviso);
            mVAviso = lVAviso.First() ?? new MVAviso();

            //var wordApp = new Word.Application();
            //var doc = wordApp.Documents.Open(fileTemp);

            //object replaceAll = Word.WdReplace.wdReplaceAll;
            //Word.Find findObject = wordApp.Selection.Find;

            //findObject.ClearFormatting();
            //findObject.Text = "[NOMBRE_PACIENTE]";
            //findObject.Replacement.ClearFormatting();
            //findObject.Replacement.Text = mVAviso.NombreCompleto;
            //findObject.Execute(Replace: ref replaceAll);

            //doc.Save();
            //doc.Close();
            //wordApp.Quit();

            using (var wc = new System.Net.WebClient())
                vs = wc.DownloadData(fileTemp);

            return new MemoryStream(vs);
        }

    }
}
