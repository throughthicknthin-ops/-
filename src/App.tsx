import { Routes, Route, Link } from "react-router-dom";
import Calculator from "./components/Calculator";

function FourInsGuide() {
  return <div className="p-4">4대 보험 가이드</div>;
}
function TaxGuide() {
  return <div className="p-4">세금 가이드</div>;
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <nav className="p-4 border-b dark:border-slate-700 flex gap-4">
        <Link to="/" className="underline">
          실수령액 계산기
        </Link>
        <Link to="/four-insurance" className="underline">
          4대 보험
        </Link>
        <Link to="/tax-guide" className="underline">
          세금 가이드
        </Link>
      </nav>
      <div className="mx-auto max-w-3xl px-4 py-6">
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/four-insurance" element={<FourInsGuide />} />
          <Route path="/tax-guide" element={<TaxGuide />} />
        </Routes>
      </div>
    </div>
  );
}
