using System.ComponentModel;

namespace pro.Model.pro
{
    [DisplayName("RolSubMenuExportar")]
    public class MWRolSubMenuExportar
    {
        public string SubMenu { get; set; }
        public string Icono { get; set; }
        public int Orden { get; set; }
        public string Activo { get; set; }

        public MWRolSubMenuExportar()
        {
            SubMenu = string.Empty;
            Icono = string.Empty;
            Activo = string.Empty;
        }

    }
}
