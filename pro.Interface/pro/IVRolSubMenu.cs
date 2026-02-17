using pro.Model.pro;

namespace pro.Interface.pro
{
    public interface IVRolSubMenu
    {
        Task<List<MVRolSubMenu>> GetAsync(int option, MVRolSubMenu model);
    }
}