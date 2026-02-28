using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using pro.Context;
using pro.Interface;
using pro.Model;
using System.Data;

namespace pro.Repository
{
    public class RWRolSubMenu : IWRolSubMenu
    {
        private readonly DBPRO _dbc;

        public RWRolSubMenu(DBPRO dbc)
        {
            _dbc = dbc;
        }

        public async Task<List<MFiltroLista>> GetFiltroListaAsync(MFiltro model)
        {
            SqlParameter[] parameters =
            {
                new() {
                    SqlDbType = SqlDbType.BigInt,
                    Direction = ParameterDirection.Input,
                    ParameterName = "IdRol",
                    Value = model.IdRol
                },
                new() {
                    SqlDbType = SqlDbType.BigInt,
                    Direction = ParameterDirection.Input,
                    ParameterName = "IdMenu",
                    Value = model.IdMenu
                }
            };

            return await _dbc.RolFiltro.FromSqlRaw("exec [dbo].[uspRolSubMenuLista] @IdRol,@IdMenu", parameters).ToListAsync();
        }

        public async Task<List<MFiltroTotal>> GetFiltroTotalAsync(MFiltro model)
        {
            SqlParameter[] parameters =
            {
                new() {
                    SqlDbType = SqlDbType.BigInt,
                    Direction = ParameterDirection.Input,
                    ParameterName = "IdRol",
                    Value = model.IdRol
                },
                new() {
                    SqlDbType = SqlDbType.BigInt,
                    Direction = ParameterDirection.Input,
                    ParameterName = "IdMenu",
                    Value = model.IdMenu
                },
                new() {
                    SqlDbType = SqlDbType.VarChar,
                    Direction = ParameterDirection.Input,
                    ParameterName = "Filtro",
                    Value = model.Filtro
                },
                new() {
                    SqlDbType = SqlDbType.VarChar,
                    Direction = ParameterDirection.Input,
                    ParameterName = "FiltroColumna",
                    Value = model.FiltroColumna
                },
                new() {
                    SqlDbType = SqlDbType.VarChar,
                    Direction = ParameterDirection.Input,
                    ParameterName = "FiltroValor",
                    Value = model.FiltroValor
                }
            };

            return await _dbc.RolSubMenuTotal.FromSqlRaw("exec [dbo].[uspRolSubMenuTotal] @IdRol,@IdMenu,@Filtro,@FiltroColumna,@FiltroValor", parameters).ToListAsync();
        }

        public async Task<List<MWRolSubMenuVista>> GetFiltroVistaAsync(MFiltro model)
        {
            SqlParameter[] parameters =
            {
                new() {
                    SqlDbType = SqlDbType.BigInt,
                    Direction = ParameterDirection.Input,
                    ParameterName = "IdRol",
                    Value = model.IdRol
                },
                new() {
                    SqlDbType = SqlDbType.BigInt,
                    Direction = ParameterDirection.Input,
                    ParameterName = "IdMenu",
                    Value = model.IdMenu
                },
                new() {
                    SqlDbType = SqlDbType.Int,
                    Direction = ParameterDirection.Input,
                    ParameterName = "Registros",
                    Value = model.Registros
                },
                new() {
                    SqlDbType = SqlDbType.Int,
                    Direction = ParameterDirection.Input,
                    ParameterName = "Pagina",
                    Value = model.Pagina
                },
                new() {
                    SqlDbType = SqlDbType.VarChar,
                    Direction = ParameterDirection.Input,
                    ParameterName = "OrdenColumna",
                    Value = model.OrdenColumna
                },
                new() {
                    SqlDbType = SqlDbType.VarChar,
                    Direction = ParameterDirection.Input,
                    ParameterName = "OrdenValor",
                    Value = model.OrdenValor
                },
                new() {
                    SqlDbType = SqlDbType.VarChar,
                    Direction = ParameterDirection.Input,
                    ParameterName = "Filtro",
                    Value = model.Filtro
                },
                new() {
                    SqlDbType = SqlDbType.VarChar,
                    Direction = ParameterDirection.Input,
                    ParameterName = "FiltroColumna",
                    Value = model.FiltroColumna
                },
                new() {
                    SqlDbType = SqlDbType.VarChar,
                    Direction = ParameterDirection.Input,
                    ParameterName = "FiltroValor",
                    Value = model.FiltroValor
                }
            };

            return await _dbc.RolSubMenuVista.FromSqlRaw("exec [dbo].[uspRolSubMenuVista] @IdRol,@IdMenu,@Registros,@Pagina,@OrdenColumna,@OrdenValor,@Filtro,@FiltroColumna,@FiltroValor", parameters).ToListAsync();
        }

        public async Task<List<MWRolSubMenuExportar>> GetFiltroExportarAsync(MFiltro model)
        {
            SqlParameter[] parameters =
            {
                new() {
                    SqlDbType = SqlDbType.BigInt,
                    Direction = ParameterDirection.Input,
                    ParameterName = "IdRol",
                    Value = model.IdRol
                },
                new() {
                    SqlDbType = SqlDbType.BigInt,
                    Direction = ParameterDirection.Input,
                    ParameterName = "IdMenu",
                    Value = model.IdMenu
                },
                new() {
                    SqlDbType = SqlDbType.VarChar,
                    Direction = ParameterDirection.Input,
                    ParameterName = "OrdenColumna",
                    Value = model.OrdenColumna
                },
                new() {
                    SqlDbType = SqlDbType.VarChar,
                    Direction = ParameterDirection.Input,
                    ParameterName = "OrdenValor",
                    Value = model.OrdenValor
                },
                new() {
                    SqlDbType = SqlDbType.VarChar,
                    Direction = ParameterDirection.Input,
                    ParameterName = "Filtro",
                    Value = model.Filtro
                },
                new() {
                    SqlDbType = SqlDbType.VarChar,
                    Direction = ParameterDirection.Input,
                    ParameterName = "FiltroColumna",
                    Value = model.FiltroColumna
                },
                new() {
                    SqlDbType = SqlDbType.VarChar,
                    Direction = ParameterDirection.Input,
                    ParameterName = "FiltroValor",
                    Value = model.FiltroValor
                }
            };

            return await _dbc.RolSubMenuExportar.FromSqlRaw("exec [dbo].[uspRolSubMenuExportar] @IdRol,@IdMenu,@OrdenColumna,@OrdenValor,@Filtro,@FiltroColumna,@FiltroValor", parameters).ToListAsync();
        }

    }
}
