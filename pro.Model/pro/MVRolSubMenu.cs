using System.ComponentModel;

namespace pro.Model.pro
{
    [DisplayName("RolSubMenuView")]
    public class MVRolSubMenu
    {
        public long IdRol { get; set; }
        public string Rol { get; set; }
        public long IdMenu { get; set; }
        public string Menu { get; set; }
        public long IdSubMenu { get; set; }
        public string SubMenu { get; set; }
        public string SubMenuR { get; set; }
        public string Ruta { get; set; }
        public string Icono { get; set; }
        public int Orden { get; set; }
        public long IdOrganizacion { get; set; }
        public string Fecha { get; set; }
        public bool Activo { get; set; }

        public MVRolSubMenu()
        {
            Rol = string.Empty;
            Menu = string.Empty;
            SubMenu = string.Empty;
            SubMenuR = string.Empty;
            Ruta = string.Empty;
            Icono = string.Empty;
            Fecha = string.Empty;
        }

    }
}
