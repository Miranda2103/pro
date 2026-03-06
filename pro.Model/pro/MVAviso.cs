using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;

namespace pro.Model
{
    [DisplayName("VAviso")]
    [Table("VAviso", Schema = "dbo")]
    public class MVAviso
    {
        public long IdPaciente { get; set; }
        public string NombreCompleto { get; set; }
        public string Fecha { get; set; }
        public bool Activo { get; set; }

        public MVAviso()
        {
            NombreCompleto = string.Empty;
            Fecha = string.Empty;
        }

    }
}
