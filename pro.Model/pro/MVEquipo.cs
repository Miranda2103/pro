using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;

namespace pro.Model
{
    [DisplayName("VEquipo")]
    [Table("VEquipo", Schema = "dbo")]
    public class MVEquipo
    {
        public string Equipo { get; set; }
        public int Total { get; set; }
        public long IdOrganizacion { get; set; }
        public bool Activo { get; set; }

        public MVEquipo()
        {
            Equipo = string.Empty;
        }

    }
}
