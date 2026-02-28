using System.ComponentModel;

namespace pro.Model
{
    [DisplayName("AgendaExportar")]
    public class MWAgendaExportar
    {
        public string Paciente { get; set; }
        public string NombreCompleto { get; set; }
        public string Comentario { get; set; }
        public string FechaInicio { get; set; }
        public string HoraInicio { get; set; }
        public string FechaFin { get; set; }
        public string HoraFin { get; set; }
        public string Fecha { get; set; }
        public string Hora { get; set; }
        public string Usuario { get; set; }

        [DisplayName("Nombre Usuario")]
        public string NombreUsuario { get; set; }

        public string Activo { get; set; }

        public MWAgendaExportar()
        {
            Paciente = string.Empty;
            NombreCompleto = string.Empty;
            Comentario = string.Empty;
            FechaInicio = string.Empty;
            HoraInicio = string.Empty;
            FechaFin = string.Empty;
            HoraFin = string.Empty;
            Fecha = string.Empty;
            Hora = string.Empty;
            Usuario = string.Empty;
            NombreUsuario = string.Empty;
            Activo = string.Empty;
        }

    }
}
