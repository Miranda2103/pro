using pro.Model;
using Microsoft.EntityFrameworkCore;

namespace pro.Context
{
    public class DBPRO : DbContext
    {
        #region table

        public DbSet<MPaciente> Paciente { get; set; }
        public DbSet<MPacienteImagen> PacienteImagen { get; set; }
        public DbSet<MHemodialisis> Hemodialisis { get; set; }
        public DbSet<MTransHemodialisis> TransHemodialisis { get; set; }
        public DbSet<MLlegada> Llegada { get; set; }
        public DbSet<MPago> Pago { get; set; }
        public DbSet<MPagoImagen> PagoImagen { get; set; }
        public DbSet<MConsentimientoImagen> ConsentimientoImagen { get; set; }
        public DbSet<MAvisoImagen> AvisoImagen { get; set; }
        public DbSet<MAgenda> Agenda { get; set; }
        public DbSet<MOrganizacion> Organizacion { get; set; }
        public DbSet<MRol> Rol { get; set; }
        public DbSet<MRolMenu> RolMenu { get; set; }
        public DbSet<MRolSubMenu> RolSubMenu { get; set; }
        public DbSet<MMenu> Menu { get; set; }
        public DbSet<MSubMenu> SubMenu { get; set; }
        public DbSet<MUsuario> Usuario { get; set; }

        #endregion

        #region list

        public DbSet<MSexo> Sexo { get; set; }
        public DbSet<MEstado> Estado { get; set; }
        public DbSet<MMunicipio> Municipio { get; set; }
        public DbSet<MColonia> Colonia { get; set; }
        public DbSet<MDecision> Decision { get; set; }
        public DbSet<MEquipo> Equipo { get; set; }
        public DbSet<MFormaPago> FormaPago { get; set; }
        public DbSet<MTipoConsulta> TipoConsulta { get; set; }

        #endregion

        #region view

        public DbSet<MVUsuario> ViewUsuario { get; set; }
        public DbSet<MVRolMenu> ViewRolMenu { get; set; }
        public DbSet<MVRolSubMenu> ViewRolSubMenu { get; set; }
        public DbSet<MVHemodialisis> ViewHemodialisis { get; set; }
        public DbSet<MVTransHemodialisis> ViewTransHemodialisis { get; set; }
        public DbSet<MVPago> ViewPago { get; set; }
        public DbSet<MVConsentimiento> ViewConsentimiento { get; set; }
        public DbSet<MVAviso> ViewAviso { get; set; }
        public DbSet<MVEquipo> ViewEquipo { get; set; }

        #endregion

        #region store
        public DbSet<MFiltroLista> PacienteFiltro { get; set; }
        public DbSet<MFiltroTotal> PacienteTotal { get; set; }
        public DbSet<MWPacienteVista> PacienteVista { get; set; }
        public DbSet<MWPacienteExportar> PacienteExportar { get; set; }

        public DbSet<MFiltroLista> AgendaFiltro { get; set; }
        public DbSet<MFiltroTotal> AgendaTotal { get; set; }
        public DbSet<MWAgendaVista> AgendaVista { get; set; }
        public DbSet<MWAgendaExportar> AgendaExportar { get; set; }

        public DbSet<MFiltroLista> OrganizacionFiltro { get; set; }
        public DbSet<MFiltroTotal> OrganizacionTotal { get; set; }
        public DbSet<MWOrganizacionVista> OrganizacionVista { get; set; }
        public DbSet<MWOrganizacionExportar> OrganizacionExportar { get; set; }

        public DbSet<MFiltroLista> RolFiltro { get; set; }
        public DbSet<MFiltroTotal> RolTotal { get; set; }
        public DbSet<MWRolVista> RolVista { get; set; }
        public DbSet<MWRolExportar> RolExportar { get; set; }

        public DbSet<MFiltroLista> RolMenuFiltro { get; set; }
        public DbSet<MFiltroTotal> RolMenuTotal { get; set; }
        public DbSet<MWRolMenuVista> RolMenuVista { get; set; }
        public DbSet<MWRolMenuExportar> RolMenuExportar { get; set; }

        public DbSet<MFiltroLista> RolSubMenuFiltro { get; set; }
        public DbSet<MFiltroTotal> RolSubMenuTotal { get; set; }
        public DbSet<MWRolSubMenuVista> RolSubMenuVista { get; set; }
        public DbSet<MWRolSubMenuExportar> RolSubMenuExportar { get; set; }

        public DbSet<MFiltroLista> UsuarioFiltro { get; set; }
        public DbSet<MFiltroTotal> UsuarioTotal { get; set; }
        public DbSet<MWUsuarioVista> UsuarioVista { get; set; }
        public DbSet<MWUsuarioExportar> UsuarioExportar { get; set; }

        #endregion

        public DBPRO(DbContextOptions<DBPRO> dbContextOptions) : base(dbContextOptions)
        {
            #region table

            Paciente = Set<MPaciente>();
            PacienteImagen = Set<MPacienteImagen>();
            Hemodialisis = Set<MHemodialisis>();
            TransHemodialisis = Set<MTransHemodialisis>();
            Llegada = Set<MLlegada>();
            Pago = Set<MPago>();
            PagoImagen = Set<MPagoImagen>();
            ConsentimientoImagen = Set<MConsentimientoImagen>();
            AvisoImagen = Set<MAvisoImagen>();
            Agenda = Set<MAgenda>();
            Organizacion = Set<MOrganizacion>();
            Rol = Set<MRol>();
            RolMenu = Set<MRolMenu>();
            RolSubMenu = Set<MRolSubMenu>();
            Menu = Set<MMenu>();
            SubMenu = Set<MSubMenu>();
            Usuario = Set<MUsuario>();

            #endregion

            #region list

            Sexo = Set<MSexo>();
            Estado = Set<MEstado>();
            Municipio = Set<MMunicipio>();
            Colonia = Set<MColonia>();
            Decision = Set<MDecision>();
            Equipo = Set<MEquipo>();
            FormaPago = Set<MFormaPago>();
            TipoConsulta = Set<MTipoConsulta>();

            #endregion

            #region view

            ViewUsuario = Set<MVUsuario>();
            ViewRolMenu = Set<MVRolMenu>();
            ViewRolSubMenu = Set<MVRolSubMenu>();
            ViewHemodialisis = Set<MVHemodialisis>();
            ViewTransHemodialisis = Set<MVTransHemodialisis>();
            ViewPago = Set<MVPago>();
            ViewConsentimiento = Set<MVConsentimiento>();
            ViewAviso = Set<MVAviso>();
            ViewEquipo = Set<MVEquipo>();

            #endregion

            #region store

            PacienteFiltro = Set<MFiltroLista>();
            PacienteTotal = Set<MFiltroTotal>();
            PacienteVista = Set<MWPacienteVista>();
            PacienteExportar = Set<MWPacienteExportar>();

            AgendaFiltro = Set<MFiltroLista>();
            AgendaTotal = Set<MFiltroTotal>();
            AgendaVista = Set<MWAgendaVista>();
            AgendaExportar = Set<MWAgendaExportar>();

            OrganizacionFiltro = Set<MFiltroLista>();
            OrganizacionTotal = Set<MFiltroTotal>();
            OrganizacionVista = Set<MWOrganizacionVista>();
            OrganizacionExportar = Set<MWOrganizacionExportar>();

            RolFiltro = Set<MFiltroLista>();
            RolTotal = Set<MFiltroTotal>();
            RolVista = Set<MWRolVista>();
            RolExportar = Set<MWRolExportar>();

            RolMenuFiltro = Set<MFiltroLista>();
            RolMenuTotal = Set<MFiltroTotal>();
            RolMenuVista = Set<MWRolMenuVista>();
            RolMenuExportar = Set<MWRolMenuExportar>();

            RolSubMenuFiltro = Set<MFiltroLista>();
            RolSubMenuTotal = Set<MFiltroTotal>();
            RolSubMenuVista = Set<MWRolSubMenuVista>();
            RolSubMenuExportar = Set<MWRolSubMenuExportar>();

            UsuarioFiltro = Set<MFiltroLista>();
            UsuarioTotal = Set<MFiltroTotal>();
            UsuarioVista = Set<MWUsuarioVista>();
            UsuarioExportar = Set<MWUsuarioExportar>();

            #endregion
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            #region view

            modelBuilder.Entity<MVUsuario>(r => { r.HasNoKey(); r.ToView("vwUsuario"); });
            modelBuilder.Entity<MVRolMenu>(r => { r.HasNoKey(); r.ToView("vwRolMenu"); });
            modelBuilder.Entity<MVRolSubMenu>(r => { r.HasNoKey(); r.ToView("vwRolSubMenu"); });
            modelBuilder.Entity<MVHemodialisis>(r => { r.HasNoKey(); r.ToView("vwHemodialisis"); });
            modelBuilder.Entity<MVTransHemodialisis>(r => { r.HasNoKey(); r.ToView("vwTransHemodialisis"); });
            modelBuilder.Entity<MVPago>(r => { r.HasNoKey(); r.ToView("vwPago"); });
            modelBuilder.Entity<MVConsentimiento>(r => { r.HasNoKey(); r.ToView("vwConsentimiento"); });
            modelBuilder.Entity<MVAviso>(r => { r.HasNoKey(); r.ToView("vwAviso"); });
            modelBuilder.Entity<MVEquipo>(r => { r.HasNoKey(); r.ToView("vwEquipo"); });

            #endregion

            #region store

            modelBuilder.Entity<MFiltroLista>(r => { r.HasNoKey(); });
            modelBuilder.Entity<MFiltroTotal>(r => { r.HasNoKey(); });

            modelBuilder.Entity<MWPacienteVista>(r => { r.HasNoKey(); });
            modelBuilder.Entity<MWPacienteExportar>(r => { r.HasNoKey(); });

            modelBuilder.Entity<MWAgendaVista>(r => { r.HasNoKey(); });
            modelBuilder.Entity<MWAgendaExportar>(r => { r.HasNoKey(); });

            modelBuilder.Entity<MWOrganizacionVista>(r => { r.HasNoKey(); });
            modelBuilder.Entity<MWOrganizacionExportar>(r => { r.HasNoKey(); });

            modelBuilder.Entity<MWRolVista>(r => { r.HasNoKey(); });
            modelBuilder.Entity<MWRolExportar>(r => { r.HasNoKey(); });

            modelBuilder.Entity<MWRolMenuVista>(r => { r.HasNoKey(); });
            modelBuilder.Entity<MWRolMenuExportar>(r => { r.HasNoKey(); });

            modelBuilder.Entity<MWRolSubMenuVista>(r => { r.HasNoKey(); });
            modelBuilder.Entity<MWRolSubMenuExportar>(r => { r.HasNoKey(); });

            modelBuilder.Entity<MWUsuarioVista>(r => { r.HasNoKey(); });
            modelBuilder.Entity<MWUsuarioExportar>(r => { r.HasNoKey(); });

            #endregion
        }

    }
}
