using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;

namespace pro.Model
{
    [DisplayName("Pago")]
    [Table("Pago", Schema = "prod")]
    public class MPago
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }

        public long IdPaciente { get; set; }

        public long IdAgenda { get; set; }

        public long IdFormaPago { get; set; }

        public decimal Importe { get; set; }

        public long IdOrganizacion { get; set; }

        public long IdUsuarioInserta { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime FechaInserta { get; set; }

        public long IdUsuarioActualiza { get; set; }

        public DateTime FechaActualiza { get; set; }

        public bool Activo { get; set; }

        public MPago()
        {
            
        }

    }
}
