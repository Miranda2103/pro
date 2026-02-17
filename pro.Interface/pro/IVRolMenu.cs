using pro.Model.pro;

namespace pro.Interface.pro
{
    public interface IVRolMenu
    {
        Task<List<MVRolMenu>> GetAsync(int option, MVRolMenu model);
    }
}