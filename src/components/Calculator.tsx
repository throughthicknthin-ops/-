import { useMemo, useState } from "react";
import { estimateNet } from "../lib/tax";

export default function Calculator() {
  const [annual, setAnnual] = useState<string>("");
  const [dependents, setDependents] = useState<number>(1);
  const [pensionOn, setPensionOn] = useState(true); // 국민연금
  const [healthOn, setHealthOn] = useState(true); // 건강보험(+장기요양)
  const [employmentOn, setEmploymentOn] = useState(true); // 고용보험

  const result = useMemo(() => {
    const a = Number(annual.replace(/[^0-9]/g, "") || 0) * 10000; // 만원을 원으로 변환
    return estimateNet({
      annual: a,
      dependents,
      pensionOn,
      healthOn,
      employmentOn,
    });
  }, [annual, dependents, pensionOn, healthOn, employmentOn]);

  return (
    <div className="rounded-lg border p-4 sm:p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm">연봉(만원)</span>
          <input
            inputMode="numeric"
            className="mt-1 w-full rounded border px-3 py-2"
            placeholder="예: 5000"
            value={annual}
            onChange={(e) => setAnnual(e.target.value)}
          />
        </label>
        <label className="block">
          <span className="text-sm">부양가족 수(본인 포함)</span>
          <input
            type="number"
            min={1}
            className="mt-1 w-full rounded border px-3 py-2"
            value={dependents}
            onChange={(e) => setDependents(Number(e.target.value))}
          />
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={pensionOn}
            onChange={(e) => setPensionOn(e.target.checked)}
          />
          <span className="text-sm">국민연금 포함</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={healthOn}
            onChange={(e) => setHealthOn(e.target.checked)}
          />
          <span className="text-sm">건강보험+장기요양 포함</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={employmentOn}
            onChange={(e) => setEmploymentOn(e.target.checked)}
          />
          <span className="text-sm">고용보험 포함</span>
        </label>
      </div>

      <div className="mt-6 grid gap-3">
        <div className="rounded bg-slate-50 p-3">
          <div className="text-sm text-slate-600">월 세전</div>
          <div className="text-lg font-bold">
            {result.grossMonthly.toLocaleString()} 원
          </div>
        </div>
        <div className="rounded bg-slate-50 p-3">
          <div className="text-sm text-slate-600">
            월 공제 합계(4대보험+세금 추정)
          </div>
          <div className="text-lg font-bold">
            - {result.deductMonthly.toLocaleString()} 원
          </div>
        </div>
        <div className="rounded bg-emerald-50 p-3">
          <div className="text-sm text-slate-600">월 실수령액(추정)</div>
          <div className="text-2xl font-extrabold">
            {result.netMonthly.toLocaleString()} 원
          </div>
        </div>

        <div className="mt-2">
          <div className="text-sm text-slate-600 font-semibold mb-2">
            세부내역
          </div>
          <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
            <li>연금: {result.pensionMonthly.toLocaleString()} 원/월</li>
            <li>
              건강+장기요양: {result.healthMonthly.toLocaleString()} 원/월
            </li>
            <li>고용보험: {result.employmentMonthly.toLocaleString()} 원/월</li>
            <li>
              근로·지방소득세 합계: {result.incomeTaxMonthly.toLocaleString()}{" "}
              원/월
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
