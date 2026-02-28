using System.ComponentModel;

namespace pro.Model
{
    [DisplayName("Filtro")]
    public class MFiltro
    {
        public long IdOrganizacion { get; set; }
        public long IdRol { get; set; }
        public long IdMenu { get; set; }
        public DateTime FechaInicio { get; set; }
        public DateTime FechaFin { get; set; }
        public int Registros { get; set; }
        public int Pagina { get; set; }
        public string OrdenColumna { get; set; }
        public string OrdenValor { get; set; }
        public string Filtro { get; set; }
        public string FiltroColumna { get; set; }

        private string _filtroValor;
        public string FiltroValor { get => Uri.UnescapeDataString(_filtroValor ?? string.Empty); set => _filtroValor = value; }
        public string Formato { get; set; }

        public MFiltro()
        {
            OrdenColumna = string.Empty;
            OrdenValor = string.Empty;
            Filtro = string.Empty;
            FiltroColumna = string.Empty;
            _filtroValor = string.Empty;
            FiltroValor = string.Empty;
            Formato = string.Empty;
        }

    }
}
