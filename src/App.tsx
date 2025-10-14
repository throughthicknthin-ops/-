import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import InsuranceGuide from "./pages/InsuranceGuide";
import TaxGuide from "./pages/TaxGuide";
import SalaryTips from "./pages/SalaryTips";
import FAQ from "./pages/FAQ";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insurance" element={<InsuranceGuide />} />
        <Route path="/tax" element={<TaxGuide />} />
        <Route path="/tips" element={<SalaryTips />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Layout>
  );
}
