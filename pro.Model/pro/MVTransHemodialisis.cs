using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;

namespace pro.Model
{
    [DisplayName("VTransHemodialisis")]
    [Table("VTransHemodialisis", Schema = "prod")]
    public class MVTransHemodialisis
    {
        public long IdAgenda { get; set; }
        public string Hora { get; set; }
        public string Ta { get; set; }
        public string Fc { get; set; }
        public string Fr { get; set; }
        public string Sat { get; set; }
        public string Temp { get; set; }
        public string Qc { get; set; }
        public string Qo { get; set; }
        public string Part { get; set; }
        public string Pven { get; set; }
        public string Ptm { get; set; }
        public string TasaUf { get; set; }
        public string Uf { get; set; }
        public string Ktv { get; set; }
        public bool Activo { get; set; }

        public MVTransHemodialisis()
        {
            Hora = string.Empty;
            Ta = string.Empty;
            Fc = string.Empty;
            Fr = string.Empty;
            Sat = string.Empty;
            Temp = string.Empty;
            Qc = string.Empty;
            Qo = string.Empty;
            Part = string.Empty;
            Pven = string.Empty;
            Ptm = string.Empty;
            TasaUf = string.Empty;
            Uf = string.Empty;
            Ktv = string.Empty;
        }

    }
}
