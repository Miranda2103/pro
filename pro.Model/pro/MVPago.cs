using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;

namespace pro.Model
{
    [DisplayName("VPago")]
    [Table("VPago", Schema = "dbo")]
    public class MVPago
    {
        public long IdPago { get; set; }
        public long IdAgenda { get; set; }
        public long IdPaciente { get; set; }
        public string NombreCompleto { get; set; }
        public string FormaPago { get; set; }
        public decimal Importe { get; set; }
        public string ImporteLetra { get; set; }
        public string Fecha { get; set; }
        public bool Activo { get; set; }

        public MVPago()
        {
            NombreCompleto = string.Empty;
            FormaPago = string.Empty;
            ImporteLetra = string.Empty;
            Fecha = string.Empty;
        }

    }
}
