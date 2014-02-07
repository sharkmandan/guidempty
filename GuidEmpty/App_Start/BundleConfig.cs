using System.Web;
using System.Web.Optimization;

namespace GuidEmpty
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
		public static void RegisterBundles(BundleCollection bundles) {
			bundles.Add(new ScriptBundle("~/bundles/jquery")
				.Include("~/Scripts/jquery-{version}.js")
				.Include("~/content/js/main.js")
				.Include("~/content/js/list.js")
				.Include("~/content/js/import.js")
				.Include("~/content/js/lunch.js"));

			// Use the development version of Modernizr to develop with and learn from. Then, when you're
			// ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
			bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
						"~/Scripts/modernizr-*"));

			bundles.Add(new StyleBundle("~/bundles/css")
				.Include("~/content/css/bootstrap.css")
				.Include("~/content/site.css"));
		}
    }
}