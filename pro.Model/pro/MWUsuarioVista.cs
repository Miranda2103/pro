using System.ComponentModel;

namespace pro.Model
{
    [DisplayName("UsuarioStoreVista")]
    public class MWUsuarioVista
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
        public string Organizacion { get; set; }
        public string Fecha { get; set; }
        public string Hora { get; set; }
        public string User { get; set; }
        public string NombreUsuario { get; set; }
        public bool Activo { get; set; }

        public MWUsuarioVista()
        {
            Usuario = string.Empty;
            Contrasena = string.Empty;
            Nombre = string.Empty;
            ApellidoPaterno = string.Empty;
            ApellidoMaterno = string.Empty;
            NombreCompleto = string.Empty;
            Rol = string.Empty;
            Organizacion = string.Empty;
            Fecha = string.Empty;
            Hora = string.Empty;
            User = string.Empty;
            NombreUsuario = string.Empty;
        }

    }
}
