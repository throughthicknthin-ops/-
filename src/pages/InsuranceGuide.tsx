export default function InsuranceGuide() {
  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="text-3xl font-extrabold mb-6">4대보험 완벽 가이드</h1>
      <p className="text-slate-600 mb-8">
        직장인이라면 반드시 알아야 할 4대보험에 대해 자세히 알아보세요.
      </p>

      <div className="space-y-8">
        {/* 국민연금 */}
        <section className="bg-white rounded-lg border p-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">1. 국민연금</h2>
          <div className="space-y-4 text-slate-700">
            <div>
              <h3 className="font-semibold text-lg mb-2">개요</h3>
              <p>
                국민연금은 국민의 노령, 장애, 사망에 대해 연금급여를 실시하여
                국민의 생활 안정과 복지 증진에 기여하는 사회보험제도입니다.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">가입 대상</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>만 18세 이상 60세 미만의 국내 거주자</li>
                <li>사업장 가입자: 근로자 1인 이상 사업장</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">보험료율</h3>
              <p className="mb-2">
                <span className="font-bold text-blue-600">
                  기준소득월액의 9% (근로자 4.5% + 사업주 4.5%)
                </span>
              </p>
              <p className="text-sm text-slate-600">
                * 2025년 기준 하한액: 37만원 / 상한액: 590만원
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">급여 종류</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>노령연금: 최소 10년 이상 가입 시 수급</li>
                <li>장애연금: 가입 중 질병·부상으로 장애 발생 시</li>
                <li>유족연금: 가입자 또는 수급자 사망 시</li>
                <li>반환일시금: 가입기간 10년 미만 시</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 건강보험 */}
        <section className="bg-white rounded-lg border p-6">
          <h2 className="text-2xl font-bold mb-4 text-green-600">
            2. 건강보험
          </h2>
          <div className="space-y-4 text-slate-700">
            <div>
              <h3 className="font-semibold text-lg mb-2">개요</h3>
              <p>
                국민의 질병·부상에 대한 예방·진단·치료·재활과 출산·사망 및
                건강증진에 대하여 보험급여를 실시하는 사회보험제도입니다.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">보험료율</h3>
              <p className="mb-2">
                <span className="font-bold text-green-600">
                  보수월액의 약 7.09% (근로자 3.545% + 사업주 3.545%)
                </span>
              </p>
              <p className="text-sm text-slate-600">
                * 2025년 기준, 매년 변동 가능
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">장기요양보험</h3>
              <p className="mb-2">
                건강보험료의{" "}
                <span className="font-bold">12.95%를 추가로 부담</span>
              </p>
              <p className="text-sm text-slate-600">
                노인장기요양보험 재원으로 사용되며, 건강보험료와 함께
                징수됩니다.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">주요 혜택</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>외래 진료: 본인부담금 30~60%</li>
                <li>입원 진료: 본인부담금 20%</li>
                <li>건강검진: 2년마다 무료 (사무직 기준)</li>
                <li>출산 급여: 출산 시 지원</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 고용보험 */}
        <section className="bg-white rounded-lg border p-6">
          <h2 className="text-2xl font-bold mb-4 text-purple-600">
            3. 고용보험
          </h2>
          <div className="space-y-4 text-slate-700">
            <div>
              <h3 className="font-semibold text-lg mb-2">개요</h3>
              <p>
                실업의 예방, 고용의 촉진 및 근로자의 직업능력 개발·향상을
                도모하고, 국가의 직업지도·직업소개 기능을 강화하며, 근로자가
                실업한 경우 생활에 필요한 급여를 지급하는 보험제도입니다.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">보험료율</h3>
              <p className="mb-2">
                <span className="font-bold text-purple-600">
                  월 보수액의 1.8% (근로자 0.9% + 사업주 0.9%)
                </span>
              </p>
              <p className="text-sm text-slate-600">
                * 사업주는 추가로 고용안정·직업능력개발 사업 보험료 부담
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">주요 급여</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  구직급여: 비자발적 이직 시 이직 전 평균임금의 60% (최대 270일)
                </li>
                <li>
                  출산전후휴가 급여: 통상임금 100% (최대 90일, 상한 월 200만원)
                </li>
                <li>육아휴직 급여: 통상임금 80% (상한 월 150만원)</li>
                <li>직업능력개발 지원</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">수급 요건</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>이직 전 18개월 중 피보험 단위기간 180일 이상</li>
                <li>근로 의사와 능력 보유</li>
                <li>비자발적 이직 (권고사직, 계약만료 등 포함)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 산재보험 */}
        <section className="bg-white rounded-lg border p-6">
          <h2 className="text-2xl font-bold mb-4 text-orange-600">
            4. 산재보험 (산업재해보상보험)
          </h2>
          <div className="space-y-4 text-slate-700">
            <div>
              <h3 className="font-semibold text-lg mb-2">개요</h3>
              <p>
                근로자의 업무상 재해를 신속하고 공정하게 보상하며, 재해근로자의
                재활 및 사회복귀를 촉진하기 위한 보험제도입니다.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">특징</h3>
              <p className="mb-2">
                <span className="font-bold text-orange-600">
                  사업주가 전액 부담 (근로자 부담 없음)
                </span>
              </p>
              <p className="text-sm text-slate-600">
                업종별로 보험료율이 다르며, 평균 약 1~2%
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">보상 범위</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>업무상 사고: 근무 중 발생한 사고</li>
                <li>업무상 질병: 직업병 등</li>
                <li>출퇴근 재해: 통상적인 경로의 출퇴근 중 사고</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">주요 급여</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>요양급여: 치료비 전액 지원</li>
                <li>휴업급여: 평균임금의 70% (최대 2년)</li>
                <li>장해급여: 장해등급에 따라 일시금 또는 연금</li>
                <li>유족급여: 근로자 사망 시 유족에게 지급</li>
                <li>간병급여: 상시 간병이 필요한 경우</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 요약 표 */}
        <section className="bg-white rounded-lg border p-6">
          <h2 className="text-2xl font-bold mb-4">4대보험 한눈에 보기</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left">구분</th>
                  <th className="px-4 py-3 text-left">근로자 부담</th>
                  <th className="px-4 py-3 text-left">사업주 부담</th>
                  <th className="px-4 py-3 text-left">주요 혜택</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-4 py-3 font-semibold">국민연금</td>
                  <td className="px-4 py-3">4.5%</td>
                  <td className="px-4 py-3">4.5%</td>
                  <td className="px-4 py-3">노후 연금</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">건강보험</td>
                  <td className="px-4 py-3">3.545%</td>
                  <td className="px-4 py-3">3.545%</td>
                  <td className="px-4 py-3">의료비 지원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">장기요양</td>
                  <td className="px-4 py-3">건보료의 12.95%</td>
                  <td className="px-4 py-3">건보료의 12.95%</td>
                  <td className="px-4 py-3">노인 장기요양</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">고용보험</td>
                  <td className="px-4 py-3">0.9%</td>
                  <td className="px-4 py-3">0.9% + α</td>
                  <td className="px-4 py-3">실업급여, 육아휴직</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">산재보험</td>
                  <td className="px-4 py-3">-</td>
                  <td className="px-4 py-3">업종별 상이</td>
                  <td className="px-4 py-3">업무상 재해 보상</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-slate-600">
            * 2025년 기준이며, 매년 요율이 변경될 수 있습니다.
          </p>
        </section>

        {/* 팁 */}
        <section className="bg-blue-50 rounded-lg border border-blue-200 p-6">
          <h3 className="font-bold text-lg mb-3">💡 알아두면 좋은 팁</h3>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>
              • 4대보험 가입 여부는 '4대사회보험 정보연계센터'에서 확인
              가능합니다.
            </li>
            <li>
              • 국민연금은 임의가입 중단이 가능하나, 건강보험은 의무가입입니다.
            </li>
            <li>
              • 이직 시 건강보험은 지역가입자로 전환되며, 보험료가 증가할 수
              있습니다.
            </li>
            <li>
              • 실업급여 수급 시 구직활동을 증명해야 하며, 4주마다 신고해야
              합니다.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
