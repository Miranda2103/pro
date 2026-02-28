using System.ComponentModel;

namespace pro.Model
{
    [DisplayName("AgendaVista")]
    public class MWAgendaVista
    {
        public long IdAgenda { get; set; }
        public long IdPaciente { get; set; }
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
        public string NombreUsuario { get; set; }
        public bool Activo { get; set; }

        public MWAgendaVista()
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
        }

    }
}
