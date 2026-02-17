using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pro.Model.pro
{
    [DisplayName("SubMenu")]
    [Table("SubMenu", Schema = "prod")]
    public class MSubMenu
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }

        public long IdMenu { get; set; }

        [StringLength(50)]
        public string SubMenu { get; set; }

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

        public MSubMenu()
        {
            SubMenu = string.Empty;
            Ruta = string.Empty;
            Icono = string.Empty;
        }

    }
}
