using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pro.Model
{
    [DisplayName("Colonia")]
    [Table("Colonia", Schema = "prod")]
    public class MColonia
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }

        public long IdEstado { get; set; }

        public long IdMunicipio { get; set; }

        [StringLength(250)]
        public string Colonia { get; set; }

        [StringLength(5)]
        public string CodigoPostal { get; set; }

        public long IdUsuarioInserta { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime FechaInserta { get; set; }

        public long IdUsuarioActualiza { get; set; }

        public DateTime FechaActualiza { get; set; }

        public bool Activo { get; set; }

        public MColonia()
        {
            Colonia = string.Empty;
            CodigoPostal = string.Empty;
        }

    }
}
