using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pro.Model
{
    [DisplayName("Transhemodialisis")]
    [Table("Transhemodialisis", Schema = "prod")]
    public class MTranshemodialisis
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }

        public long IdAgenda { get; set; }

        [StringLength(250)]
        public string Hora { get; set; }

        [StringLength(250)]
        public string Ta { get; set; }

        [StringLength(250)]
        public string Fc { get; set; }

        [StringLength(250)]
        public string Fr { get; set; }

        [StringLength(250)]
        public string Sat { get; set; }

        [StringLength(250)]
        public string Temp { get; set; }

        [StringLength(250)]
        public string Qc { get; set; }

        [StringLength(250)]
        public string Qo { get; set; }

        [StringLength(250)]
        public string Part { get; set; }

        [StringLength(250)]
        public string Pven { get; set; }

        [StringLength(250)]
        public string Ptm { get; set; }

        [StringLength(250)]
        public string TasaUf { get; set; }

        [StringLength(250)]
        public string Uf { get; set; }

        [StringLength(250)]
        public string Ktv { get; set; }

        public long IdOrganizacion { get; set; }

        public long IdUsuarioInserta { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime FechaInserta { get; set; }

        public long IdUsuarioActualiza { get; set; }

        public DateTime FechaActualiza { get; set; }

        public bool Activo { get; set; }

        public MTranshemodialisis()
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
