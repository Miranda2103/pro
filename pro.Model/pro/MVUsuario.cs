using System.ComponentModel;

namespace pro.Model.pro
{
    [DisplayName("UsuarioView")]
    public class MVUsuario
    {
        public long IdUsuario { get; set; }
        public string Usuario { get; set; }
        public string Contrasena { get; set; }
        public string Nombre { get; set; }
        public string ApellidoPaterno { get; set; }
        public string ApellidoMaterno { get; set; }
        public string NombreCompleto { get; set; }
        public bool CambiaContrasena { get; set; }
        public long IdRol { get; set; }
        public string Rol { get; set; }
        public long IdOrganizacion { get; set; }
        public string TipoCarteras { get; set; }
        public string Carteras { get; set; }
        public string Fecha { get; set; }
        public bool Activo { get; set; }

        public MVUsuario()
        {
            Usuario = string.Empty;
            Contrasena = string.Empty;
            Nombre = string.Empty;
            ApellidoPaterno = string.Empty;
            ApellidoMaterno = string.Empty;
            NombreCompleto = string.Empty;
            Rol = string.Empty;
            TipoCarteras = string.Empty;
            Carteras = string.Empty;
            Fecha = string.Empty;
        }

    }
}
