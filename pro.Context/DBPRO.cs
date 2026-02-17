using pro.Model.pro;
using Microsoft.EntityFrameworkCore;

namespace pro.Context
{
    public class DBPRO : DbContext
    {
        #region table

        public DbSet<MOrganizacion> Organizacion { get; set; }
        public DbSet<MRol> Rol { get; set; }
        public DbSet<MRolMenu> RolMenu { get; set; }
        public DbSet<MRolSubMenu> RolSubMenu { get; set; }
        public DbSet<MMenu> Menu { get; set; }
        public DbSet<MSubMenu> SubMenu { get; set; }
        public DbSet<MUsuario> Usuario { get; set; }

        #endregion

        #region view

        public DbSet<MVUsuario> ViewUsuario { get; set; }
        public DbSet<MVRolMenu> ViewRolMenu { get; set; }
        public DbSet<MVRolSubMenu> ViewRolSubMenu { get; set; }

        #endregion

        #region store
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
            Organizacion = Set<MOrganizacion>();
            Rol = Set<MRol>();
            RolMenu = Set<MRolMenu>();
            RolSubMenu = Set<MRolSubMenu>();
            Menu = Set<MMenu>();
            SubMenu = Set<MSubMenu>();
            Usuario = Set<MUsuario>();

            ViewUsuario = Set<MVUsuario>();
            ViewRolMenu = Set<MVRolMenu>();
            ViewRolSubMenu = Set<MVRolSubMenu>();

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
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<MVUsuario>(r => { r.HasNoKey(); r.ToView("vwUsuario"); });
            modelBuilder.Entity<MVRolMenu>(r => { r.HasNoKey(); r.ToView("vwRolMenu"); });
            modelBuilder.Entity<MVRolSubMenu>(r => { r.HasNoKey(); r.ToView("vwRolSubMenu"); });

            modelBuilder.Entity<MFiltroLista>(r => { r.HasNoKey(); });
            modelBuilder.Entity<MFiltroTotal>(r => { r.HasNoKey(); });

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
        }

    }
}
