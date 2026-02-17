using System.ComponentModel;

namespace pro.Model.pro
{
    [DisplayName("RolMenuView")]
    public class MVRolMenu
    {
        public long IdRol { get; set; }
        public string Rol { get; set; }
        public long IdMenu { get; set; }
        public string Menu { get; set; }
        public string Ruta { get; set; }
        public string Icono { get; set; }
        public int Orden { get; set; }
        public long IdOrganizacion { get; set; }
        public string Fecha { get; set; }
        public bool Activo { get; set; }

        public MVRolMenu()
        {
            Rol = string.Empty;
            Menu = string.Empty;
            Ruta = string.Empty;
            Icono = string.Empty;
            Fecha = string.Empty;
        }

    }
}
