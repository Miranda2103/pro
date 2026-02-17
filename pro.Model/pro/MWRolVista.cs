using System.ComponentModel;

namespace pro.Model.pro
{
    [DisplayName("RolStoreVista")]
    public class MWRolVista
    {
        public long IdRol { get; set; }
        public string Rol { get; set; }
        public string Fecha { get; set; }
        public string Hora { get; set; }
        public string Usuario { get; set; }
        public string NombreUsuario { get; set; }
        public bool Activo { get; set; }

        public MWRolVista()
        {
            Rol = string.Empty;
            Fecha = string.Empty;
            Hora = string.Empty;
            Usuario = string.Empty;
            NombreUsuario = string.Empty;
        }

    }
}
