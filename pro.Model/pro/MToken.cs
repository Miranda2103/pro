using System.ComponentModel;

namespace pro.Model.pro
{
    [DisplayName("Token")]
    public class MToken
    {
        public long Id { get; set; }
        public string Usuario { get; set; }
        public string NombreUsuario { get; set; }
        public bool CambiaContrasena { get; set; }
        public long IdRol { get; set; }
        public long IdOrganizacion { get; set; }
        public string Token { get; set; }

        public MToken()
        {
            Usuario = string.Empty;
            NombreUsuario = string.Empty;
            Token = string.Empty;
        }
    }
}
