using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pro.Model
{
    [DisplayName("Paciente")]
    [Table("Paciente", Schema = "prod")]
    public class MPaciente
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public string Paciente { get; set; }

        [StringLength(250)]
        public string Nombre { get; set; }

        [StringLength(250)]
        public string ApellidoPaterno { get; set; }

        [StringLength(250)]
        public string ApellidoMaterno { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public string NombreCompleto { get; set; }

        public DateTime FechaNacimiento { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public int Edad { get; set; }

        public long IdSexo { get; set; }

        public long IdEstado { get; set; }

        public long IdMunicipio { get; set; }

        public long IdColonia { get; set; }

        public int CodigoPostal { get; set; }

        [StringLength(500)]
        public string Calle { get; set; }

        [StringLength(10)]
        public string NumeroInterior { get; set; }

        [StringLength(10)]
        public string NumeroExterior { get; set; }

        [StringLength(10)]
        public string TelefonoMovil { get; set; }

        [StringLength(10)]
        public string TelefonoCasa { get; set; }

        [StringLength(250)]
        public string Correo { get; set; }

        public long IdOrganizacion { get; set; }

        public long IdUsuarioInserta { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime FechaInserta { get; set; }

        public long IdUsuarioActualiza { get; set; }

        public DateTime FechaActualiza { get; set; }

        public bool Activo { get; set; }

        public MPaciente()
        {
            Paciente = string.Empty;
            Nombre = string.Empty;
            ApellidoPaterno = string.Empty;
            ApellidoMaterno = string.Empty;
            NombreCompleto = string.Empty;
            Calle = string.Empty;
            NumeroInterior = string.Empty;
            NumeroExterior = string.Empty;
            TelefonoMovil = string.Empty;
            TelefonoCasa = string.Empty;
            Correo = string.Empty;
        }

    }
}
