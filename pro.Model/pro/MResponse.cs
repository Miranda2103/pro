using System.ComponentModel;

namespace pro.Model
{
    [DisplayName("Response")]
    public class MResponse
    {
        public bool Success { get; set; }
        public string Message { get; set; }
        public object Data { get; set; }

        public MResponse()
        {
            Success = false;
            Message = string.Empty;
            Data = new object();
        }
    }
}
