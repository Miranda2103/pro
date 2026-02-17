using System.ComponentModel;

namespace pro.Model.pro
{
    [DisplayName("FiltroLista")]
    public class MFiltroLista
    {
        public string Id { get; set; }
        public string Valor { get; set; }
        public int Lista { get; set; }

        public MFiltroLista()
        {
            Id = string.Empty;
            Valor = string.Empty;
        }

    }
}
