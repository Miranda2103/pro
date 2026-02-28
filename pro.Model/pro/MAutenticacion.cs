using System.ComponentModel;

namespace pro.Model
{
    [DisplayName("Autenticacion")]
    public class MAutenticacion
    {
        public string Usuario { get; set; }
        public string Contrasena { get; set; }

        public MAutenticacion()
        {
            Usuario = string.Empty;
            Contrasena = string.Empty;
        }

    }
}
