using System.ComponentModel;

namespace pro.Model.pro
{
    [DisplayName("OrganizacionStoreVista")]
    public class MWOrganizacionVista
    {
        public long IdOrganizacion { get; set; }
        public string Organizacion { get; set; }
        public string Nombre { get; set; }
        public string ApellidoPaterno { get; set; }
        public string ApellidoMaterno { get; set; }
        public string NombreCompleto { get; set; }
        public string Telefono { get; set; }
        public string Correo { get; set; }
        public string Calle { get; set; }
        public string NumeroExterior { get; set; }
        public string NumeroInterior { get; set; }
        public string Colonia { get; set; }
        public string Municipio { get; set; }
        public string Estado { get; set; }
        public string Fecha { get; set; }
        public string Hora { get; set; }
        public string Usuario { get; set; }
        public string NombreUsuario { get; set; }
        public bool Activo { get; set; }

        public MWOrganizacionVista()
        {
            Organizacion = string.Empty;
            Nombre = string.Empty;
            ApellidoPaterno = string.Empty;
            ApellidoMaterno = string.Empty;
            NombreCompleto = string.Empty;
            Telefono = string.Empty;
            Correo = string.Empty;
            Calle = string.Empty;
            NumeroExterior = string.Empty;
            NumeroInterior = string.Empty;
            Colonia = string.Empty;
            Municipio = string.Empty;
            Estado = string.Empty;
            Fecha = string.Empty;
            Hora = string.Empty;
            Usuario = string.Empty;
            NombreUsuario = string.Empty;
        }

    }
}
