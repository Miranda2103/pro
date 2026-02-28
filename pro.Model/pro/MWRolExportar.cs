using System.ComponentModel;

namespace pro.Model
{
    [DisplayName("RolStoreExportar")]
    public class MWRolExportar
    {
        public string Rol { get; set; }
        public string Fecha { get; set; }
        public string Hora { get; set; }
        public string Usuario { get; set; }

        [DisplayName("Nombre Usuario")]
        public string NombreUsuario { get; set; }

        public string Activo { get; set; }

        public MWRolExportar()
        {
            Rol = string.Empty;
            Fecha = string.Empty;
            Hora = string.Empty;
            Usuario = string.Empty;
            NombreUsuario = string.Empty;
            Activo = string.Empty;
        }

    }
}
