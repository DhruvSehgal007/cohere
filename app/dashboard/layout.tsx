import Sidebar from "./components/sidebar";
import Topbar from "./components/topbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Hide the main website Header/Footer only on dashboard */}
      <style>{`
        body > header {
          display: none !important;
        }

        body > footer {
          display: none !important;
        }
      `}</style>

      <div className="min-h-screen bg-[#F7F9F8]">
        <Sidebar />

        <Topbar />

        <main className="ml-[260px] min-h-screen pt-[82px]">
          {children}
        </main>
      </div>
    </>
  );
}