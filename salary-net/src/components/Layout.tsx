import { Link, useLocation } from "react-router-dom";

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "계산기" },
    { path: "/insurance", label: "4대보험" },
    { path: "/tax", label: "세금 가이드" },
    { path: "/tips", label: "연봉 협상" },
    { path: "/faq", label: "FAQ" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="text-xl font-bold text-slate-900">
              💰 연봉계산기
            </Link>
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "bg-blue-100 text-blue-700"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="md:hidden">
              <select
                value={location.pathname}
                onChange={(e) => (window.location.href = e.target.value)}
                className="rounded border px-3 py-1 text-sm"
              >
                {navItems.map((item) => (
                  <option key={item.path} value={item.path}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-4 py-8">{children}</main>
    </div>
  );
}
