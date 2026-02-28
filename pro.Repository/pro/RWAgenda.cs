using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using pro.Context;
using pro.Interface;
using pro.Model;
using System.Data;

namespace pro.Repository
{
    public class RWAgenda : IWAgenda
    {
        private readonly DBPRO _dbc;

        public RWAgenda(DBPRO dbc)
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
                },
                new() {
                    SqlDbType = SqlDbType.DateTime,
                    Direction = ParameterDirection.Input,
                    ParameterName = "FechaInicio",
                    Value = model.FechaInicio
                },
                new() {
                    SqlDbType = SqlDbType.DateTime,
                    Direction = ParameterDirection.Input,
                    ParameterName = "FechaFin",
                    Value = model.FechaFin
                }
            };

            return await _dbc.AgendaFiltro.FromSqlRaw("exec [dbo].[uspAgendaLista] @IdOrganizacion,@FechaInicio,@FechaFin", parameters).ToListAsync();
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
                    SqlDbType = SqlDbType.DateTime,
                    Direction = ParameterDirection.Input,
                    ParameterName = "FechaInicio",
                    Value = model.FechaInicio
                },
                new() {
                    SqlDbType = SqlDbType.DateTime,
                    Direction = ParameterDirection.Input,
                    ParameterName = "FechaFin",
                    Value = model.FechaFin
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

            return await _dbc.AgendaTotal.FromSqlRaw("exec [dbo].[uspAgendaTotal] @IdOrganizacion,@FechaInicio,@FechaFin,@Filtro,@FiltroColumna,@FiltroValor", parameters).ToListAsync();
        }

        public async Task<List<MWAgendaVista>> GetFiltroVistaAsync(MFiltro model)
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
                    SqlDbType = SqlDbType.DateTime,
                    Direction = ParameterDirection.Input,
                    ParameterName = "FechaInicio",
                    Value = model.FechaInicio
                },
                new() {
                    SqlDbType = SqlDbType.DateTime,
                    Direction = ParameterDirection.Input,
                    ParameterName = "FechaFin",
                    Value = model.FechaFin
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

            return await _dbc.AgendaVista.FromSqlRaw("exec [dbo].[uspAgendaVista] @IdOrganizacion,@FechaInicio,@FechaFin,@Registros,@Pagina,@OrdenColumna,@OrdenValor,@Filtro,@FiltroColumna,@FiltroValor", parameters).ToListAsync();
        }

        public async Task<List<MWAgendaExportar>> GetFiltroExportarAsync(MFiltro model)
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
                    SqlDbType = SqlDbType.DateTime,
                    Direction = ParameterDirection.Input,
                    ParameterName = "FechaInicio",
                    Value = model.FechaInicio
                },
                new() {
                    SqlDbType = SqlDbType.DateTime,
                    Direction = ParameterDirection.Input,
                    ParameterName = "FechaFin",
                    Value = model.FechaFin
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

            return await _dbc.AgendaExportar.FromSqlRaw("exec [dbo].[uspAgendaExportar] @IdOrganizacion,@FechaInicio,@FechaFin,@OrdenColumna,@OrdenValor,@Filtro,@FiltroColumna,@FiltroValor", parameters).ToListAsync();
        }

    }
}
