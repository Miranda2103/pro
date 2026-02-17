using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using pro.Context;
using pro.Interface.pro;
using pro.Model.pro;
using System.Data;

namespace pro.Repository.pro
{
    public class RWRolMenu : IWRolMenu
    {
        private readonly DBPRO _dbc;

        public RWRolMenu(DBPRO dbc)
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
                }
            };

            return await _dbc.RolFiltro.FromSqlRaw("exec [dbo].[uspRolMenuLista] @IdRol", parameters).ToListAsync();
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

            return await _dbc.RolMenuTotal.FromSqlRaw("exec [dbo].[uspRolMenuTotal] @IdRol,@Filtro,@FiltroColumna,@FiltroValor", parameters).ToListAsync();
        }

        public async Task<List<MWRolMenuVista>> GetFiltroVistaAsync(MFiltro model)
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

            return await _dbc.RolMenuVista.FromSqlRaw("exec [dbo].[uspRolMenuVista] @IdRol,@Registros,@Pagina,@OrdenColumna,@OrdenValor,@Filtro,@FiltroColumna,@FiltroValor", parameters).ToListAsync();
        }

        public async Task<List<MWRolMenuExportar>> GetFiltroExportarAsync(MFiltro model)
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

            return await _dbc.RolMenuExportar.FromSqlRaw("exec [dbo].[uspRolMenuExportar] @IdRol,@OrdenColumna,@OrdenValor,@Filtro,@FiltroColumna,@FiltroValor", parameters).ToListAsync();
        }

    }
}
