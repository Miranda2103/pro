using pro.Model.pro;
using System.Diagnostics;
using System.Reflection;

namespace pro.Logic.pro
{
    public class LVersion
    {
        public static MVersion Get()
        {
            MVersion mVersion = new()
            {
                Version = FileVersionInfo.GetVersionInfo(Assembly.GetExecutingAssembly().Location).FileVersion ?? string.Empty
            };

            return mVersion;
        }

    }
}
