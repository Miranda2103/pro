using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using pro.Model;
using System.Drawing;
using System.Drawing.Imaging;

namespace pro.Function
{
    public class FImage
    {
        private readonly MConfiguracion _option;

        public FImage(IOptions<MConfiguracion> option)
        {
            _option = option.Value;
        }

        public MPacienteImagen PacienteImagen(string paciente, long idPaciente, IFormFile file, long idOrganizacion, long idUsuarioInserta)
        {
            string ruta = string.Concat(_option.RutaPacienteImagen, paciente, "/");

            CreateDirectory(ruta);
            SaveFile(ruta, file.FileName, file);

            MemoryStream memoryStream = GetMemoryStreamAsync(file);

            Image image = Image.FromStream(memoryStream);
            memoryStream = ResizeImage(image, new Size(_option.AnchoImagen, _option.LargoImagen));

            String imagen = Convert.ToBase64String(memoryStream.ToArray());

            MPacienteImagen mPacienteImagen = new()
            {
                IdPaciente = idPaciente,
                Ruta = ruta,
                Nombre = Path.GetFileNameWithoutExtension(file.FileName),
                Extension = Path.GetExtension(file.FileName),
                Imagen = imagen,
                IdOrganizacion = idOrganizacion,
                IdUsuarioInserta = idUsuarioInserta,
                Activo = true
            };

            return mPacienteImagen;
        }

        public MPagoImagen PagoImagen(string paciente, long idPago, long idAgenda, long idPaciente, IFormFile file, long idOrganizacion, long idUsuarioInserta)
        {
            string ruta = string.Concat(_option.RutaPagoImagen, paciente, "/");

            CreateDirectory(ruta);
            SaveFile(ruta, file.FileName, file);

            MemoryStream memoryStream = GetMemoryStreamAsync(file);

            Image image = Image.FromStream(memoryStream);
            memoryStream = ResizeImage(image, new Size(_option.AnchoImagen, _option.LargoImagen));

            String imagen = Convert.ToBase64String(memoryStream.ToArray());

            MPagoImagen mPagoImagen = new()
            {
                IdPago = idPago,
                IdAgenda = idAgenda,
                IdPaciente = idPaciente,
                Ruta = ruta,
                Nombre = Path.GetFileNameWithoutExtension(file.FileName),
                Extension = Path.GetExtension(file.FileName),
                Imagen = imagen,
                IdOrganizacion = idOrganizacion,
                IdUsuarioInserta = idUsuarioInserta,
                Activo = true
            };

            return mPagoImagen;
        }

        public MConsentimientoImagen ConsentimientoImagen(string paciente, long idPago, long idAgenda, long idPaciente, IFormFile file, long idOrganizacion, long idUsuarioInserta)
        {
            string ruta = string.Concat(_option.RutaConsentimientoImagen, paciente, "/");

            CreateDirectory(ruta);
            SaveFile(ruta, file.FileName, file);

            MemoryStream memoryStream = GetMemoryStreamAsync(file);

            Image image = Image.FromStream(memoryStream);
            memoryStream = ResizeImage(image, new Size(_option.AnchoImagen, _option.LargoImagen));

            String imagen = Convert.ToBase64String(memoryStream.ToArray());

            MConsentimientoImagen mConsentimientoImagen = new()
            {
                IdPago = idPago,
                IdAgenda = idAgenda,
                IdPaciente = idPaciente,
                Ruta = ruta,
                Nombre = Path.GetFileNameWithoutExtension(file.FileName),
                Extension = Path.GetExtension(file.FileName),
                Imagen = imagen,
                IdOrganizacion = idOrganizacion,
                IdUsuarioInserta = idUsuarioInserta,
                Activo = true
            };

            return mConsentimientoImagen;
        }

        public MAvisoImagen AvisoImagen(string paciente, long idPago, long idAgenda, long idPaciente, IFormFile file, long idOrganizacion, long idUsuarioInserta)
        {
            string ruta = string.Concat(_option.RutaAvisoImagen, paciente, "/");

            CreateDirectory(ruta);
            SaveFile(ruta, file.FileName, file);

            MemoryStream memoryStream = GetMemoryStreamAsync(file);

            Image image = Image.FromStream(memoryStream);
            memoryStream = ResizeImage(image, new Size(_option.AnchoImagen, _option.LargoImagen));

            String imagen = Convert.ToBase64String(memoryStream.ToArray());

            MAvisoImagen mAvisoImagen = new()
            {
                IdPago = idPago,
                IdAgenda = idAgenda,
                IdPaciente = idPaciente,
                Ruta = ruta,
                Nombre = Path.GetFileNameWithoutExtension(file.FileName),
                Extension = Path.GetExtension(file.FileName),
                Imagen = imagen,
                IdOrganizacion = idOrganizacion,
                IdUsuarioInserta = idUsuarioInserta,
                Activo = true
            };

            return mAvisoImagen;
        }

        public static void CreateDirectory(String pathDirectory)
        {
            if (!Directory.Exists(pathDirectory))
            {
                Directory.CreateDirectory(pathDirectory);
            }
        }

        public static Boolean SaveFile(String pathDirectory, String FileName, IFormFile FormFile)
        {
            String fileNameWithPath = Path.Combine(pathDirectory, FileName);

            if (File.Exists(fileNameWithPath))
            {
                File.Delete(fileNameWithPath);
            }

            using var stream = new FileStream(fileNameWithPath, FileMode.Create);
            FormFile.CopyTo(stream);

            return true;
        }

        public static MemoryStream GetMemoryStreamAsync(IFormFile formFile)
        {
            MemoryStream ms = new();
            formFile.CopyTo(ms);
            return ms;
        }

        public static MemoryStream ResizeImage(Image image, Size size)
        {
            MemoryStream memoryStream = new();
            Image i = new Bitmap(image, size);

            i.Save(memoryStream, ImageFormat.Jpeg);
            memoryStream.Position = 0;

            return memoryStream;
        }

    }
}
