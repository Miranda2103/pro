using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pro.Model
{
    [DisplayName("TipoConsulta")]
    [Table("TipoConsulta", Schema = "prod")]
    public class MTipoConsulta
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }

        [StringLength(50)]
        public string TipoConsulta { get; set; }

        public long IdOrganizacion { get; set; }

        public long IdUsuarioInserta { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime FechaInserta { get; set; }

        public long IdUsuarioActualiza { get; set; }

        public DateTime FechaActualiza { get; set; }

        public bool Activo { get; set; }

        public MTipoConsulta()
        {
            TipoConsulta = string.Empty;
        }

    }
}
