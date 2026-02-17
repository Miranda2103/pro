using System.ComponentModel;

namespace pro.Model.pro
{
    [DisplayName("RolSubMenuVista")]
    public class MWRolSubMenuVista
    {
        public long IdSubMenu { get; set; }
        public string SubMenu { get; set; }
        public string Icono { get; set; }
        public int Orden { get; set; }
        public bool Activo { get; set; }

        public MWRolSubMenuVista()
        {
            SubMenu = string.Empty;
            Icono = string.Empty;
        }

    }
}
