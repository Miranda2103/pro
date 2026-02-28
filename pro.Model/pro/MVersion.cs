using System.ComponentModel;

namespace pro.Model
{
    [DisplayName("Version")]
    public class MVersion
    {
        public string Version { get; set; }

        public MVersion()
        {
            Version = string.Empty;
        }

    }
}
