using System.ComponentModel;

namespace pro.Model.pro
{
    [DisplayName("UsuarioStoreExportar")]
    public class MWUsuarioExportar
    {
        public string Usuario { get; set; }

        [DisplayName("Nombre")]
        public string NombreCompleto { get; set; }

        public string Rol { get; set; }
        public string Fecha { get; set; }
        public string Hora { get; set; }

        [DisplayName("Usuario Alta")]
        public string User { get; set; }

        [DisplayName("Nombre Usuario")]
        public string NombreUsuario { get; set; }
        public string Activo { get; set; }


        public MWUsuarioExportar()
        {
            Usuario = string.Empty;
            NombreCompleto = string.Empty;
            Rol = string.Empty;
            Fecha = string.Empty;
            Hora = string.Empty;
            User = string.Empty;
            NombreUsuario = string.Empty;
            Activo = string.Empty;
        }

    }
}