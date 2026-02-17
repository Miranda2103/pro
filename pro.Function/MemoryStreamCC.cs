using pro.Model.pro;
using ClosedXML.Excel;
using System.ComponentModel;
using System.Reflection;
using System.Text;

namespace pro.Function
{
    public class MemoryStreamCC
    {
        public static MemoryStream Export<T>(MFiltro model, List<T> list)
        {
            MemoryStream stream = new();
            PropertyInfo[] propertyInfo = typeof(T).GetProperties();

            if (model.Formato == ".csv")
            {
                StringBuilder sb = new();

                sb.AppendLine(string.Join(",", propertyInfo.Select(p => { DisplayNameAttribute? displayAttr = p.GetCustomAttribute<DisplayNameAttribute>(); return displayAttr?.DisplayName ?? p.Name; })));

                foreach (var item in list)
                {
                    var valores = propertyInfo.Select(p =>
                    {
                        string valor = (p.GetValue(item, null)?.ToString() ?? "");
                        return (valor.Contains(',') || valor.Contains('"') ? $"\"{valor.Replace("\"", "\"\"")}\"" : valor);
                    });

                    sb.AppendLine(string.Join(",", valores));
                }

                byte[] bytes = Encoding.UTF8.GetBytes(sb.ToString());
                stream = new MemoryStream(bytes);
            }
            else
            {
                Thread.CurrentThread.CurrentCulture = new System.Globalization.CultureInfo("es-MX");
                Thread.CurrentThread.CurrentUICulture = new System.Globalization.CultureInfo("es-MX");

                XLWorkbook workbook = new();
                IXLWorksheet sheet = workbook.Worksheets.Add("Hoja1");

                propertyInfo.Select((prop, index) => new { Nombre = prop.GetCustomAttribute<DisplayNameAttribute>()?.DisplayName ?? prop.Name, Index = index }).ToList().ForEach(x => sheet.Cell(1, x.Index + 1).Value = x.Nombre);

                sheet.Cell(2, 1).InsertData(list);
                workbook.SaveAs(stream);
            }

            return stream;
        }

    }
}
