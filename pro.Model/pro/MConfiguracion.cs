using System.ComponentModel;

namespace pro.Model.pro
{
    [DisplayName("Configuracion")]
    public class MConfiguracion
    {
        public string Tenant { get; set; }
        public string RutaReporte { get; set; }
        public string RutaFoto { get; set; }
        public int AnchoFoto { get; set; }
        public int LargoFoto { get; set; }

        public MConfiguracion()
        {
            Tenant = string.Empty;
            RutaReporte = string.Empty;
            RutaFoto = string.Empty;
        }
    }
}
