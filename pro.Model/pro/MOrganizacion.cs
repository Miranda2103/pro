using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pro.Model.pro
{
    [DisplayName("Organización")]
    [Table("Organizacion", Schema = "prod")]
    public class MOrganizacion
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }

        [StringLength(250)]
        public string Organizacion { get; set; }

        [StringLength(50)]
        public string Nombre { get; set; }

        [StringLength(50)]
        public string ApellidoPaterno { get; set; }

        [StringLength(50)]
        public string ApellidoMaterno { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public string NombreCompleto { get; set; }

        [StringLength(10)]
        public string Telefono { get; set; }

        [StringLength(150)]
        public string Correo { get; set; }

        [StringLength(50)]
        public string Calle { get; set; }

        [StringLength(10)]
        public string NumeroExterior { get; set; }

        [StringLength(10)]
        public string NumeroInterior { get; set; }

        [StringLength(50)]
        public string Colonia { get; set; }

        [StringLength(50)]
        public string Municipio { get; set; }

        [StringLength(50)]
        public string Estado { get; set; }

        public long IdUsuarioInserta { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime FechaInserta { get; set; }

        public long IdUsuarioActualiza { get; set; }

        public DateTime FechaActualiza { get; set; }

        public bool Activo { get; set; }

        public MOrganizacion()
        {
            Organizacion = string.Empty;
            Nombre = string.Empty;
            ApellidoPaterno = string.Empty;
            ApellidoMaterno = string.Empty;
            NombreCompleto = string.Empty;
            Telefono = string.Empty;
            Correo = string.Empty;
            Calle = string.Empty;
            NumeroExterior = string.Empty;
            NumeroInterior = string.Empty;
            Colonia = string.Empty;
            Municipio = string.Empty;
            Estado = string.Empty;
        }


    }
}
