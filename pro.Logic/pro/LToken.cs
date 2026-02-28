using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using pro.Context;
using pro.Function;
using pro.Interface;
using pro.Model;
using pro.Repository;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace pro.Logic
{
    public class LToken
    {
        private IConfiguration _configuration { get; set; }
        private readonly IUsuario _iUsuario;
        private readonly MResponse _response;

        public LToken(IConfiguration configuration, DBPRO dbc)
        {
            _configuration = configuration;
            _iUsuario = new RUsuario(dbc);
            _response = new MResponse();
        }

        public async Task<MResponse> Post(MAutenticacion model)
        {
            List<MUsuario> lm = await GetUsuarioAsync(model);

            if (lm.Count >= 1)
            {
                MUsuario _mUsuario = lm.First();

                Claim[] claims = new[] {
                    new Claim(JwtRegisteredClaimNames.Sub, _configuration["Jwt:Subject"]),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                    new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                    new Claim("Id", _mUsuario.Id.ToString()),
                    new Claim("Usuario", _mUsuario.Usuario.ToString())
                };

                SymmetricSecurityKey key = new(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
                SigningCredentials signIn = new(key, SecurityAlgorithms.HmacSha256);
                JwtSecurityToken token = new(_configuration["Jwt:Issuer"], _configuration["Jwt:Audience"], claims, expires: DateTime.UtcNow.AddDays(1), signingCredentials: signIn);

                MToken mToken = new()
                {
                    Id = _mUsuario.Id,
                    Usuario = _mUsuario.Usuario,
                    NombreUsuario = _mUsuario.NombreCompleto,
                    CambiaContrasena = _mUsuario.CambiaContrasena,
                    IdRol = _mUsuario.IdRol,
                    IdOrganizacion = _mUsuario.IdOrganizacion,
                    Token = new JwtSecurityTokenHandler().WriteToken(token)
                };

                _response.Data = mToken;
                _response.Success = true;
            }
            else
            {
                _response.Success = false;
            }

            return _response;
        }

        public async Task<List<MUsuario>> GetUsuarioAsync(MAutenticacion model)
        {
            MUsuario _model = new()
            {
                Usuario = model.Usuario,
                Contrasena = model.Contrasena
            };
            _model = Encrypt(_model);

            return await _iUsuario.GetAsync(option: 4, _model);
        }

        public static MUsuario Encrypt(MUsuario model)
        {
            model.Contrasena = Encryption.EncryptSHA1(model.Contrasena);
            return model;
        }

    }
}
