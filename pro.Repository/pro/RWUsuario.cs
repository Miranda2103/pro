using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using pro.Context;
using pro.Interface;
using pro.Model;
using System.Data;

namespace pro.Repository
{
    public class RWUsuario : IWUsuario
    {
        private readonly DBPRO _dbc;

        public RWUsuario(DBPRO dbc)
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
                    ParameterName = "IdOrganizacion",
                    Value = model.IdOrganizacion
                }
            };

            return await _dbc.UsuarioFiltro.FromSqlRaw("exec [dbo].[uspUsuarioLista] @IdOrganizacion", parameters).ToListAsync();
        }

        public async Task<List<MFiltroTotal>> GetFiltroTotalAsync(MFiltro model)
        {
            SqlParameter[] parameters =
            {
                new() {
                    SqlDbType = SqlDbType.BigInt,
                    Direction = ParameterDirection.Input,
                    ParameterName = "IdOrganizacion",
                    Value = model.IdOrganizacion
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

            return await _dbc.UsuarioTotal.FromSqlRaw("exec [dbo].[uspUsuarioTotal] @IdOrganizacion,@Filtro,@FiltroColumna,@FiltroValor", parameters).ToListAsync();
        }

        public async Task<List<MWUsuarioVista>> GetFiltroVistaAsync(MFiltro model)
        {
            SqlParameter[] parameters =
            {
                new() {
                    SqlDbType = SqlDbType.BigInt,
                    Direction = ParameterDirection.Input,
                    ParameterName = "IdOrganizacion",
                    Value = model.IdOrganizacion
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

            return await _dbc.UsuarioVista.FromSqlRaw("exec [dbo].[uspUsuarioVista] @IdOrganizacion,@Registros,@Pagina,@OrdenColumna,@OrdenValor,@Filtro,@FiltroColumna,@FiltroValor", parameters).ToListAsync();
        }

        public async Task<List<MWUsuarioExportar>> GetFiltroExportarAsync(MFiltro model)
        {
            SqlParameter[] parameters =
            {
                new() {
                    SqlDbType = SqlDbType.BigInt,
                    Direction = ParameterDirection.Input,
                    ParameterName = "IdOrganizacion",
                    Value = model.IdOrganizacion
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

            return await _dbc.UsuarioExportar.FromSqlRaw("exec [dbo].[uspUsuarioExportar] @IdOrganizacion,@OrdenColumna,@OrdenValor,@Filtro,@FiltroColumna,@FiltroValor", parameters).ToListAsync();
        }

    }
}
