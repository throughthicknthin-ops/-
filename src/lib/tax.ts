/**
 * 단순화된 추정 모델.
 * - 4대보험: 대략적 요율 사용. 상한/하한 미적용.
 * - 소득세: 구간별 대략 세율(지방세 포함 가중치)로 근사.
 * 실제 세법과 다를 수 있으므로 참고용.
 */
type Opt = {
  annual: number; // 연봉(총액, 원)
  dependents: number; // 부양가족 수
  pensionOn: boolean;
  healthOn: boolean;
  employmentOn: boolean;
};

export function estimateNet(opt: Opt) {
  const { annual, dependents, pensionOn, healthOn, employmentOn } = opt;
  const grossMonthly = Math.max(0, Math.floor(annual / 12));

  // 4대보험 대략 요율(근로자 부담분) — 필요 시 조정
  const pensionRate = pensionOn ? 0.045 : 0; // 국민연금 4.5%
  const healthRate = healthOn ? 0.035 : 0; // 건강보험 3.5% 가정
  const careAdd = healthOn ? 0.1225 : 0; // 장기요양(건강보험의 12.25%)
  const employRate = employmentOn ? 0.009 : 0; // 고용보험 0.9%

  const pensionMonthly = Math.floor(grossMonthly * pensionRate);
  const healthMonthlyRaw = Math.floor(grossMonthly * healthRate);
  const careMonthly = Math.floor(healthMonthlyRaw * careAdd);
  const healthMonthly = healthMonthlyRaw + careMonthly;
  const employmentMonthly = Math.floor(grossMonthly * employRate);

  // 과표 근사: 연 소득에서 기본공제(부양가족×150만원) 단순 차감
  const basicDeduct = (dependents || 1) * 1_500_000;
  const taxableYear = Math.max(0, annual - basicDeduct);

  // 매우 단순화한 근로소득세 근사(지방세 포함 가중치 1.1배 가정)
  // 구간: 12/46/88/150/300/500/1000 백만원 (세율 6/15/24/35/38/40/42)
  function incomeTaxYear(y: number) {
    const br = [
      { up: 12_000_000, rate: 0.06, quick: 0 },
      { up: 46_000_000, rate: 0.15, quick: 1_080_000 },
      { up: 88_000_000, rate: 0.24, quick: 5_220_000 },
      { up: 150_000_000, rate: 0.35, quick: 14_900_000 },
      { up: 300_000_000, rate: 0.38, quick: 19_400_000 },
      { up: 500_000_000, rate: 0.4, quick: 25_400_000 },
      { up: 1_000_000_000, rate: 0.42, quick: 33_400_000 },
    ];
    const b = br.find((v) => y <= v.up) ?? br[br.length - 1];
    const lower =
      br.findIndex((v) => v === b) === 0
        ? 0
        : br[br.findIndex((v) => v === b) - 1].up;
    const tax = Math.floor((y - lower) * b.rate + b.quick);
    return Math.max(0, Math.floor(tax * 1.1)); // 지방세 10% 근사
  }

  const incomeTaxMonthly = Math.floor(incomeTaxYear(taxableYear) / 12);

  const deductMonthly =
    pensionMonthly + healthMonthly + employmentMonthly + incomeTaxMonthly;
  const netMonthly = Math.max(0, grossMonthly - deductMonthly);

  return {
    grossMonthly,
    pensionMonthly,
    healthMonthly,
    employmentMonthly,
    incomeTaxMonthly,
    deductMonthly,
    netMonthly,
  };
}
