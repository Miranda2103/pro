using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;

namespace pro.Model
{
    [DisplayName("VConsentimiento")]
    [Table("VConsentimiento", Schema = "dbo")]
    public class MVConsentimiento
    {
        public long IdPaciente { get; set; }
        public string NombreCompleto { get; set; }
        public string Sexo { get; set; }
        public string FechaNacimiento { get; set; }
        public int Edad { get; set; }
        public string Fecha { get; set; }
        public bool Activo { get; set; }

        public MVConsentimiento()
        {
            NombreCompleto = string.Empty;
            Sexo = string.Empty;
            FechaNacimiento = string.Empty;
            Fecha = string.Empty;
        }

    }
}
