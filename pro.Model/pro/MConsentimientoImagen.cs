using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pro.Model
{
    [DisplayName("ConsentimientoImagen")]
    [Table("ConsentimientoImagen", Schema = "prod")]
    public class MConsentimientoImagen
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }

        public long IdPago { get; set; }

        public long IdAgenda { get; set; }

        public long IdPaciente { get; set; }

        [StringLength(250)]
        public string Ruta { get; set; }

        [StringLength(250)]
        public string Nombre { get; set; }

        [StringLength(5)]
        public string Extension { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public string Archivo { get; set; }

        public string Imagen { get; set; }

        public long IdOrganizacion { get; set; }

        public long IdUsuarioInserta { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime FechaInserta { get; set; }

        public long IdUsuarioActualiza { get; set; }

        public DateTime FechaActualiza { get; set; }

        public bool Activo { get; set; }

        public MConsentimientoImagen()
        {
            Ruta = string.Empty;
            Nombre = string.Empty;
            Extension = string.Empty;
            Archivo = string.Empty;
            Imagen = string.Empty;
        }

    }
}
