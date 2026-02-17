using System.ComponentModel;

namespace pro.Model.pro
{
    [DisplayName("RolMenuStoreExportar")]
    public class MWRolMenuExportar
    {
        public string Menu { get; set; }
        public string Icono { get; set; }
        public int Orden { get; set; }
        public string Activo { get; set; }

        public MWRolMenuExportar()
        {
            Menu = string.Empty;
            Icono = string.Empty;
            Activo = string.Empty;
        }

    }
}
