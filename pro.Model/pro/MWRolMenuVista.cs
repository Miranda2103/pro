using System.ComponentModel;

namespace pro.Model
{
    [DisplayName("RolMenuStoreVista")]
    public class MWRolMenuVista
    {
        public long IdMenu { get; set; }
        public string Menu { get; set; }
        public string Icono { get; set; }
        public int Orden { get; set; }
        public bool Activo { get; set; }

        public MWRolMenuVista()
        {
            Menu = string.Empty;
            Icono = string.Empty;
        }

    }
}
