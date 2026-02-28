using System.ComponentModel;

namespace pro.Model
{
    [DisplayName("PacienteExportar")]
    public class MWPacienteExportar
    {
        public string Paciente { get; set; }
        public string Nombre { get; set; }
        public string ApellidoPaterno { get; set; }
        public string ApellidoMaterno { get; set; }
        public string NombreCompleto { get; set; }
        public string FechaNacimiento { get; set; }
        public int Edad { get; set; }
        public long IdSexo { get; set; }
        public long IdEstado { get; set; }
        public long IdMunicipio { get; set; }
        public long IdColonia { get; set; }
        public int CodigoPostal { get; set; }
        public string Calle { get; set; }
        public string NumeroInterior { get; set; }
        public string NumeroExterior { get; set; }
        public string TelefonoMovil { get; set; }
        public string TelefonoCasa { get; set; }
        public string Correo { get; set; }
        public string Fecha { get; set; }
        public string Hora { get; set; }
        public string Usuario { get; set; }

        [DisplayName("Nombre Usuario")]
        public string NombreUsuario { get; set; }

        public string Activo { get; set; }

        public MWPacienteExportar()
        {
            Paciente = string.Empty;
            Nombre = string.Empty;
            ApellidoPaterno = string.Empty;
            ApellidoMaterno = string.Empty;
            NombreCompleto = string.Empty;
            FechaNacimiento = string.Empty;
            Calle = string.Empty;
            NumeroInterior = string.Empty;
            NumeroExterior = string.Empty;
            TelefonoMovil = string.Empty;
            TelefonoCasa = string.Empty;
            Correo = string.Empty;
            Fecha = string.Empty;
            Hora = string.Empty;
            Usuario = string.Empty;
            NombreUsuario = string.Empty;
            Activo = string.Empty;
        }

    }
}
