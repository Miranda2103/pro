using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pro.Model.pro
{
    [DisplayName("Menu")]
    [Table("Menu", Schema = "prod")]
    public class MMenu
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }

        [StringLength(50)]
        public string Menu { get; set; }

        [StringLength(50)]
        public string Ruta { get; set; }

        [StringLength(50)]
        public string Icono { get; set; }

        public int Orden { get; set; }

        public long IdUsuarioInserta { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime FechaInserta { get; set; }

        public long IdUsuarioActualiza { get; set; }

        public DateTime FechaActualiza { get; set; }

        public bool Activo { get; set; }

        public MMenu()
        {
            Menu = string.Empty;
            Ruta = string.Empty;
            Icono = string.Empty;
        }

    }
}
