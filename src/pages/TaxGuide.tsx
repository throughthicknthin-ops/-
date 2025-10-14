export default function TaxGuide() {
  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="text-3xl font-extrabold mb-6">근로소득세 완벽 가이드</h1>
      <p className="text-slate-600 mb-8">
        월급에서 떼는 세금, 제대로 알고 계산해보세요.
      </p>

      <div className="space-y-8">
        {/* 근로소득세 개요 */}
        <section className="bg-white rounded-lg border p-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            근로소득세란?
          </h2>
          <div className="space-y-4 text-slate-700">
            <p>
              근로소득세는 근로자가 근로를 제공하고 받는 급여(연봉, 상여금 등)에
              대해 부과되는 세금입니다. 급여에서 매월 원천징수되며, 연말정산을
              통해 정산됩니다.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <h3 className="font-semibold mb-2">💡 핵심 용어</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <strong>총급여:</strong> 연간 받은 모든 급여의 합계
                </li>
                <li>
                  <strong>과세표준:</strong> 총급여에서 각종 공제를 뺀 금액
                  (실제 세금이 부과되는 기준)
                </li>
                <li>
                  <strong>원천징수:</strong> 회사가 급여 지급 시 미리 세금을
                  떼어 국세청에 납부
                </li>
                <li>
                  <strong>연말정산:</strong> 1년간 낸 세금과 실제 내야 할 세금을
                  비교하여 환급/추가납부
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 소득세율 */}
        <section className="bg-white rounded-lg border p-6">
          <h2 className="text-2xl font-bold mb-4 text-green-600">
            2025년 소득세율
          </h2>
          <div className="space-y-4">
            <p className="text-slate-700">
              과세표준 구간에 따라 누진세율이 적용됩니다.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-4 py-3 text-left">과세표준</th>
                    <th className="px-4 py-3 text-left">세율</th>
                    <th className="px-4 py-3 text-left">누진공제</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="px-4 py-3">1,200만원 이하</td>
                    <td className="px-4 py-3">6%</td>
                    <td className="px-4 py-3">-</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">1,200만원 ~ 4,600만원</td>
                    <td className="px-4 py-3">15%</td>
                    <td className="px-4 py-3">108만원</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">4,600만원 ~ 8,800만원</td>
                    <td className="px-4 py-3">24%</td>
                    <td className="px-4 py-3">522만원</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">8,800만원 ~ 1억 5,000만원</td>
                    <td className="px-4 py-3">35%</td>
                    <td className="px-4 py-3">1,490만원</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">1억 5,000만원 ~ 3억원</td>
                    <td className="px-4 py-3">38%</td>
                    <td className="px-4 py-3">1,940만원</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">3억원 ~ 5억원</td>
                    <td className="px-4 py-3">40%</td>
                    <td className="px-4 py-3">2,540만원</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">5억원 ~ 10억원</td>
                    <td className="px-4 py-3">42%</td>
                    <td className="px-4 py-3">3,540만원</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">10억원 초과</td>
                    <td className="px-4 py-3">45%</td>
                    <td className="px-4 py-3">6,540만원</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-green-50 border border-green-200 rounded p-4">
              <h3 className="font-semibold mb-2">📊 계산 예시</h3>
              <p className="text-sm mb-2">과세표준이 5,000만원인 경우:</p>
              <p className="text-sm font-mono bg-white p-2 rounded">
                5,000만원 × 24% - 522만원 = 678만원
              </p>
            </div>
          </div>
        </section>

        {/* 지방소득세 */}
        <section className="bg-white rounded-lg border p-6">
          <h2 className="text-2xl font-bold mb-4 text-purple-600">
            지방소득세
          </h2>
          <div className="space-y-4 text-slate-700">
            <p>
              지방소득세는 소득세의{" "}
              <span className="font-bold text-purple-600">10%</span>를 추가로
              납부합니다.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded p-4">
              <h3 className="font-semibold mb-2">계산 예시</h3>
              <ul className="space-y-1 text-sm">
                <li>• 소득세: 678만원</li>
                <li>• 지방소득세: 678만원 × 10% = 67.8만원</li>
                <li className="font-bold text-purple-600">
                  • 총 세금: 745.8만원
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 소득공제 */}
        <section className="bg-white rounded-lg border p-6">
          <h2 className="text-2xl font-bold mb-4 text-orange-600">
            주요 소득공제 항목
          </h2>
          <div className="space-y-4 text-slate-700">
            <p className="mb-4">
              소득공제는 총급여에서 차감하여 과세표준을 낮춰줍니다.
            </p>

            <div className="space-y-3">
              <div className="bg-slate-50 rounded p-4">
                <h3 className="font-semibold mb-2">1. 인적공제</h3>
                <ul className="space-y-1 text-sm">
                  <li>• 본인: 150만원</li>
                  <li>• 배우자: 150만원 (연소득 100만원 이하)</li>
                  <li>• 부양가족: 1인당 150만원</li>
                  <li>• 경로우대(70세 이상): 추가 100만원</li>
                  <li>• 장애인: 추가 200만원</li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded p-4">
                <h3 className="font-semibold mb-2">2. 연금보험료 공제</h3>
                <ul className="space-y-1 text-sm">
                  <li>• 국민연금: 납부액 전액</li>
                  <li>• 퇴직연금(IRP): 최대 900만원</li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded p-4">
                <h3 className="font-semibold mb-2">3. 특별소득공제</h3>
                <ul className="space-y-1 text-sm">
                  <li>• 건강보험료: 납부액 전액</li>
                  <li>• 주택자금: 주택임차차입금, 장기주택저당차입금</li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded p-4">
                <h3 className="font-semibold mb-2">4. 그 외 소득공제</h3>
                <ul className="space-y-1 text-sm">
                  <li>• 개인연금저축: 최대 72만원</li>
                  <li>• 소기업·소상공인 공제부금: 최대 500만원</li>
                  <li>• 신용카드 사용액: 총급여의 25% 초과분 (한도 300만원)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 세액공제 */}
        <section className="bg-white rounded-lg border p-6">
          <h2 className="text-2xl font-bold mb-4 text-pink-600">
            주요 세액공제 항목
          </h2>
          <div className="space-y-4 text-slate-700">
            <p className="mb-4">
              세액공제는 계산된 세금에서 직접 차감되어 절세 효과가 큽니다.
            </p>

            <div className="space-y-3">
              <div className="bg-slate-50 rounded p-4">
                <h3 className="font-semibold mb-2">1. 근로소득세액공제</h3>
                <p className="text-sm">
                  산출세액에 따라 자동으로 적용되는 공제 (최대 74만원)
                </p>
              </div>

              <div className="bg-slate-50 rounded p-4">
                <h3 className="font-semibold mb-2">2. 자녀세액공제</h3>
                <ul className="space-y-1 text-sm">
                  <li>• 1명: 연 15만원</li>
                  <li>• 2명: 연 30만원</li>
                  <li>• 3명 이상: 2명 공제액 + 초과 1명당 30만원</li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded p-4">
                <h3 className="font-semibold mb-2">3. 연금계좌 세액공제</h3>
                <ul className="space-y-1 text-sm">
                  <li>• 연금저축: 납입액의 15% (최대 600만원)</li>
                  <li>• 퇴직연금(IRP) 포함: 최대 900만원</li>
                  <li>• 총급여 5,500만원 이하: 16.5% 공제율 적용</li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded p-4">
                <h3 className="font-semibold mb-2">4. 보험료 세액공제</h3>
                <ul className="space-y-1 text-sm">
                  <li>• 보장성 보험: 납입액의 12% (최대 100만원)</li>
                  <li>• 장애인 전용 보장성 보험: 15% (최대 100만원)</li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded p-4">
                <h3 className="font-semibold mb-2">5. 의료비 세액공제</h3>
                <p className="text-sm">
                  총급여의 3% 초과분의 15% 공제 (난임시술비는 30%)
                </p>
              </div>

              <div className="bg-slate-50 rounded p-4">
                <h3 className="font-semibold mb-2">6. 교육비 세액공제</h3>
                <ul className="space-y-1 text-sm">
                  <li>• 본인: 납입액의 15% (전액)</li>
                  <li>• 취학 전 아동, 초중고생: 1인당 300만원 한도</li>
                  <li>• 대학생: 1인당 900만원 한도</li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded p-4">
                <h3 className="font-semibold mb-2">7. 기부금 세액공제</h3>
                <ul className="space-y-1 text-sm">
                  <li>• 정치자금: 10만원 이하 100%, 초과분 15~25%</li>
                  <li>• 법정기부금: 15% (3천만원 초과분 30%)</li>
                  <li>• 우리사주조합 기부금: 30%</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 연말정산 절세 팁 */}
        <section className="bg-white rounded-lg border p-6">
          <h2 className="text-2xl font-bold mb-4 text-red-600">
            연말정산 절세 꿀팁 💰
          </h2>
          <div className="space-y-3 text-slate-700">
            <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
              <h3 className="font-semibold mb-2">1. 신용카드 vs 체크카드</h3>
              <p className="text-sm">
                • 신용카드: 총급여의 25% 초과분의 15% 공제
                <br />
                • 체크카드/현금영수증: 총급여의 25% 초과분의 30% 공제
                <br />→ 전략: 총급여의 25%까지는 신용카드, 초과분은 체크카드
                사용
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
              <h3 className="font-semibold mb-2">2. 연금저축 활용</h3>
              <p className="text-sm">
                연금저축에 연 600만원 납입 시 최대 99만원 세액공제 (16.5% 기준)
                <br />
                IRP 추가 납입 시 최대 148.5만원까지 공제 가능!
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
              <h3 className="font-semibold mb-2">3. 월세 세액공제</h3>
              <p className="text-sm">
                총급여 7천만원 이하 무주택 세대주는 월세의 12% 공제 (최대
                750만원)
                <br />
                총급여 5,500만원 이하는 15% 공제
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
              <h3 className="font-semibold mb-2">4. 의료비는 가족 카드로</h3>
              <p className="text-sm">
                본인, 65세 이상 부모, 장애인 가족 의료비는 한도 없음
                <br />→ 가족 카드로 몰아서 결제하면 공제액 증가
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
              <h3 className="font-semibold mb-2">5. 13월의 월급 만들기</h3>
              <p className="text-sm">
                • 부양가족 등록 (연소득 100만원 이하)
                <br />
                • 주택청약저축 납입 (최대 96만원)
                <br />
                • 소득·세액공제 항목 꼼꼼히 챙기기
                <br />• 공제 증빙서류 미리 준비
              </p>
            </div>
          </div>
        </section>

        {/* 간이세액표 */}
        <section className="bg-white rounded-lg border p-6">
          <h2 className="text-2xl font-bold mb-4 text-indigo-600">
            간이세액표란?
          </h2>
          <div className="space-y-4 text-slate-700">
            <p>
              매월 원천징수할 세액을 미리 정한 표로, 회사에서 월급에서 세금을 뗄
              때 사용합니다.
            </p>
            <div className="bg-indigo-50 border border-indigo-200 rounded p-4">
              <h3 className="font-semibold mb-2">공제 대상 선택</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  • <strong>본인:</strong> 기본 (가장 많은 세금 원천징수)
                </li>
                <li>
                  • <strong>본인+1:</strong> 배우자 또는 부양가족 1인
                </li>
                <li>
                  • <strong>본인+2:</strong> 부양가족 2인 (월 세금 감소)
                </li>
              </ul>
              <p className="text-sm mt-3 text-indigo-700">
                💡 Tip: 부양가족이 많으면 월급에서 떼는 세금이 줄지만,
                연말정산에서 추가 납부할 수 있으니 적절히 조정하세요.
              </p>
            </div>
          </div>
        </section>

        {/* 체크리스트 */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">
            ✅ 연말정산 준비 체크리스트
          </h2>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div className="space-y-2">
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>부양가족 등록 (주민등록등본)</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>신용카드 사용내역 확인</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>의료비 영수증 수집</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>교육비 납입증명서</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>기부금 영수증</span>
              </label>
            </div>
            <div className="space-y-2">
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>연금저축 납입 확인</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>보험료 납입증명서</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>월세 계약서 (해당 시)</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>주택청약 납입 증명</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>소득공제 장기펀드 확인</span>
              </label>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
