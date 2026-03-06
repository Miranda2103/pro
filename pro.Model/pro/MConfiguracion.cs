using System.ComponentModel;

namespace pro.Model
{
    [DisplayName("Configuracion")]
    public class MConfiguracion
    {
        public string Tenant { get; set; }
        public string RutaReporte { get; set; }
        public string RutaPacienteImagen { get; set; }
        public string RutaPagoImagen { get; set; }
        public string RutaConsentimientoImagen { get; set; }
        public string RutaAvisoImagen { get; set; }
        public int AnchoImagen { get; set; }
        public int LargoImagen { get; set; }

        public MConfiguracion()
        {
            Tenant = string.Empty;
            RutaReporte = string.Empty;
            RutaPacienteImagen = string.Empty;
            RutaPagoImagen = string.Empty;
            RutaConsentimientoImagen = string.Empty;
            RutaAvisoImagen = string.Empty;
        }
    }
}
