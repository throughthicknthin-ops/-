export default function SalaryTips() {
  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="text-3xl font-extrabold mb-6">연봉 협상 완벽 가이드</h1>
      <p className="text-slate-600 mb-8">
        성공적인 연봉 협상을 위한 전략과 노하우를 알려드립니다.
      </p>

      <div className="space-y-8">
        {/* 협상 준비 */}
        <section className="bg-white rounded-lg border p-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            1. 협상 전 철저한 준비
          </h2>
          <div className="space-y-4 text-slate-700">
            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <h3 className="font-semibold mb-3">시장 조사하기</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  • <strong>업계 평균 연봉:</strong> 잡코리아, 사람인, 원티드
                  등에서 직무별 평균 연봉 확인
                </li>
                <li>
                  • <strong>경력별 연봉:</strong> 블라인드, 잡플래닛 등에서 해당
                  회사 연봉 정보 수집
                </li>
                <li>
                  • <strong>지역별 차이:</strong> 서울/수도권과 지방의 연봉 차이
                  고려
                </li>
                <li>
                  • <strong>회사 규모:</strong> 대기업, 중견기업, 스타트업별
                  연봉 수준 파악
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <h3 className="font-semibold mb-3">내 가치 파악하기</h3>
              <ul className="space-y-2 text-sm">
                <li>• 학력, 경력, 보유 기술 및 자격증</li>
                <li>• 이전 직장에서의 성과 및 실적</li>
                <li>• 희소성 있는 전문 기술이나 경험</li>
                <li>• 어학 능력, 해외 경험 등 부가 가치</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <h3 className="font-semibold mb-3">희망 연봉 설정</h3>
              <p className="text-sm mb-2">
                <strong>최소 수용 가능 금액 ~ 희망 금액</strong> 범위를
                정하세요.
              </p>
              <ul className="space-y-1 text-sm">
                <li>
                  • 최소 금액: 이직을 고려할 만한 최소한의 연봉 (현재 연봉 + 20%
                  이상 권장)
                </li>
                <li>• 희망 금액: 시장 조사 결과 + 내 가치를 반영한 금액</li>
                <li>• 협상 금액: 희망 금액보다 10~20% 높게 제시</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 협상 타이밍 */}
        <section className="bg-white rounded-lg border p-6">
          <h2 className="text-2xl font-bold mb-4 text-green-600">
            2. 최적의 협상 타이밍
          </h2>
          <div className="space-y-4 text-slate-700">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded p-4">
                <h3 className="font-semibold mb-2 text-green-700">
                  ✅ 협상하기 좋은 때
                </h3>
                <ul className="space-y-1 text-sm">
                  <li>• 최종 합격 통보를 받은 직후</li>
                  <li>• 여러 회사에서 동시에 오퍼를 받았을 때</li>
                  <li>• 회사가 급하게 채용을 진행할 때</li>
                  <li>• 면접에서 긍정적인 피드백을 받았을 때</li>
                  <li>• 희소한 기술이나 경험을 보유했을 때</li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded p-4">
                <h3 className="font-semibold mb-2 text-red-700">
                  ❌ 협상 피해야 할 때
                </h3>
                <ul className="space-y-1 text-sm">
                  <li>• 첫 면접이나 서류 전형 단계</li>
                  <li>• 이미 근무를 시작한 후 (수습 기간 중)</li>
                  <li>• 회사의 경영 상황이 좋지 않을 때</li>
                  <li>• 경쟁자가 많고 대체 가능성이 높을 때</li>
                  <li>• 준비가 부족한 상태</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
              <h3 className="font-semibold mb-2">💡 골든 타이밍</h3>
              <p className="text-sm">
                최종 합격 통보와 입사 승낙 사이가 협상의 골든 타임입니다. 회사는
                당신을 원하고, 당신은 아직 승낙하지 않은 상태이므로 가장
                협상력이 높습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 협상 전략 */}
        <section className="bg-white rounded-lg border p-6">
          <h2 className="text-2xl font-bold mb-4 text-purple-600">
            3. 효과적인 협상 전략
          </h2>
          <div className="space-y-4">
            <div className="bg-purple-50 border border-purple-200 rounded p-4">
              <h3 className="font-semibold mb-3">전략 1: 구체적인 근거 제시</h3>
              <p className="text-sm text-slate-700 mb-2">
                막연한 요구보다는 객관적인 데이터와 근거를 들어 설득하세요.
              </p>
              <div className="bg-white rounded p-3 text-sm">
                <p className="font-semibold mb-1">예시:</p>
                <p className="text-slate-600">
                  "잡코리아 연봉정보에 따르면 유사 직무·경력자의 평균 연봉은
                  5,500만원입니다. 저는 ○○ 프로젝트 경험과 □□ 자격증을 보유하고
                  있어 5,800만원을 희망합니다."
                </p>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded p-4">
              <h3 className="font-semibold mb-3">
                전략 2: 범위가 아닌 구체적 숫자
              </h3>
              <p className="text-sm text-slate-700 mb-2">
                "4,500~5,000만원"보다 "4,800만원"처럼 구체적으로 제시하세요.
              </p>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• ✅ 좋은 예: "5,800만원을 희망합니다"</li>
                <li>
                  • ❌ 나쁜 예: "5,000~6,000만원 정도요" (→ 회사는 5,000만원
                  제시)
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded p-4">
              <h3 className="font-semibold mb-3">
                전략 3: 긍정적이고 협력적인 태도
              </h3>
              <p className="text-sm text-slate-700 mb-2">
                "안 되면 안 갑니다" 식의 강압보다는 "함께 좋은 방향을 찾고
                싶습니다"는 태도가 효과적입니다.
              </p>
              <div className="bg-white rounded p-3 text-sm">
                <p className="text-slate-600">
                  "이 회사에서 일하고 싶은 마음이 큽니다. 다만 제 경력과
                  시장가치를 고려할 때 ○○만원이 적정하다고 생각합니다. 혹시 조정
                  가능하실까요?"
                </p>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded p-4">
              <h3 className="font-semibold mb-3">
                전략 4: 대안 제시 (연봉 외 혜택)
              </h3>
              <p className="text-sm text-slate-700 mb-2">
                연봉 인상이 어렵다면 다른 혜택을 협상하세요.
              </p>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• 사이닝 보너스 (입사 시 일시금)</li>
                <li>• 성과급 비율 상향</li>
                <li>• 스톡옵션 (스타트업의 경우)</li>
                <li>• 재택근무, 유연근무제</li>
                <li>• 교육비 지원, 자기계발비</li>
                <li>• 더 빠른 정규직 전환 (계약직인 경우)</li>
              </ul>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded p-4">
              <h3 className="font-semibold mb-3">전략 5: 침묵의 힘 활용</h3>
              <p className="text-sm text-slate-700">
                회사가 제안을 한 후, 즉시 답하지 말고 잠시 침묵하세요. 상대방이
                먼저 말을 꺼내거나 더 나은 조건을 제시할 수 있습니다. "생각할
                시간을 주시면 감사하겠습니다"도 좋은 답변입니다.
              </p>
            </div>
          </div>
        </section>

        {/* 말하는 방법 */}
        <section className="bg-white rounded-lg border p-6">
          <h2 className="text-2xl font-bold mb-4 text-orange-600">
            4. 협상 시 말하는 방법
          </h2>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-green-600 mb-2">
                  ✅ 이렇게 말하세요
                </h3>
                <ul className="space-y-2 text-sm bg-green-50 border border-green-200 rounded p-3">
                  <li>• "시장 조사 결과 제 경력에 맞는 연봉은 ○○만원입니다"</li>
                  <li>
                    • "이전 직장 연봉은 ○○만원이었고, 이직을 고려한다면..."
                  </li>
                  <li>
                    • "이 포지션에서 제가 기여할 수 있는 가치를 생각할 때..."
                  </li>
                  <li>• "타 회사에서 ○○만원을 제시받았는데..."</li>
                  <li>• "조정 가능하신지 여쭤봐도 될까요?"</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-red-600 mb-2">
                  ❌ 이렇게 말하지 마세요
                </h3>
                <ul className="space-y-2 text-sm bg-red-50 border border-red-200 rounded p-3">
                  <li>• "생활비가 많이 들어서..." (개인적인 사정)</li>
                  <li>• "다른 회사는 더 줬는데..." (비교 불쾌감)</li>
                  <li>• "이 정도면 안 갑니다" (협박)</li>
                  <li>• "일단 얼마든 괜찮아요" (협상 포기)</li>
                  <li>• "잘 모르겠는데 회사 맘대로..." (주도권 상실)</li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded p-4">
              <h3 className="font-semibold mb-2">📝 협상 대화 스크립트 예시</h3>
              <div className="space-y-3 text-sm">
                <div className="bg-white rounded p-3">
                  <p className="font-semibold mb-1">
                    회사: "연봉은 어떻게 생각하세요?"
                  </p>
                  <p className="text-slate-700">
                    지원자: "제 경력과 직무를 고려할 때, 시장 평균은 5,500만원
                    정도로 파악했습니다. 저는 ○○ 분야 경험이 3년이고 △△
                    프로젝트를 성공적으로 이끈 경력이 있어, 5,800만원을
                    희망합니다."
                  </p>
                </div>

                <div className="bg-white rounded p-3">
                  <p className="font-semibold mb-1">
                    회사: "저희는 5,000만원을 제안드립니다."
                  </p>
                  <p className="text-slate-700">
                    지원자: "제안 감사합니다. 입사 의지가 큰 만큼, 제 가치와
                    시장 수준을 반영해 5,500만원 선에서 조정 가능하실까요? 혹은
                    성과급이나 다른 혜택으로 보완 가능하신지 궁금합니다."
                  </p>
                </div>

                <div className="bg-white rounded p-3">
                  <p className="font-semibold mb-1">
                    회사: "5,300만원까지 가능합니다."
                  </p>
                  <p className="text-slate-700">
                    지원자: "감사합니다. 긍정적으로 검토하겠습니다. 혹시
                    내일까지 답변 드려도 될까요?"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 흔한 실수 */}
        <section className="bg-white rounded-lg border p-6">
          <h2 className="text-2xl font-bold mb-4 text-red-600">
            5. 피해야 할 흔한 실수
          </h2>
          <div className="space-y-3">
            <div className="bg-red-50 border border-red-200 rounded p-4">
              <h3 className="font-semibold mb-2">❌ 실수 1: 너무 일찍 협상</h3>
              <p className="text-sm text-slate-700">
                면접 초반에 연봉 얘기를 꺼내면 "돈만 밝히는 사람"으로 보일 수
                있습니다. 회사가 먼저 물어볼 때까지 기다리거나, 최종 합격 후
                협상하세요.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded p-4">
              <h3 className="font-semibold mb-2">
                ❌ 실수 2: 현재 연봉 부풀리기
              </h3>
              <p className="text-sm text-slate-700">
                거짓말은 금방 들통납니다. 원천징수영수증을 요구받을 수 있고,
                발각 시 신뢰를 잃습니다. 정직하게 협상하되, 희망 연봉을 명확히
                제시하세요.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded p-4">
              <h3 className="font-semibold mb-2">❌ 실수 3: 즉답하기</h3>
              <p className="text-sm text-slate-700">
                "생각할 시간을 주세요"라고 말하는 게 더 유리합니다. 다른 오퍼와
                비교하거나, 조건을 꼼꼼히 검토할 시간을 가지세요.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded p-4">
              <h3 className="font-semibold mb-2">❌ 실수 4: 감정적 대응</h3>
              <p className="text-sm text-slate-700">
                "이 정도밖에 안 되나요?"처럼 불만을 드러내지 마세요. 전문적이고
                차분하게 협상하는 태도가 중요합니다.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded p-4">
              <h3 className="font-semibold mb-2">❌ 실수 5: 지나친 요구</h3>
              <p className="text-sm text-slate-700">
                시장가보다 30% 이상 높은 금액을 요구하면 비현실적으로 보입니다.
                근거 없이 높은 금액을 제시하면 협상 자체가 깨질 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 연봉 계산 시 고려사항 */}
        <section className="bg-white rounded-lg border p-6">
          <h2 className="text-2xl font-bold mb-4 text-indigo-600">
            6. 연봉 제안 시 반드시 확인할 것
          </h2>
          <div className="space-y-3 text-slate-700">
            <div className="bg-indigo-50 border border-indigo-200 rounded p-4">
              <h3 className="font-semibold mb-2">체크리스트</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>
                    <strong>총 연봉 vs 기본급:</strong> 제시받은 금액이
                    기본급인지 총 연봉(성과급 포함)인지 확인
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>
                    <strong>성과급 비율:</strong> 100% 지급 보장인지, 평가에
                    따라 0~200% 변동인지
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>
                    <strong>4대보험 가입:</strong> 정규직은 필수, 프리랜서는
                    별도 확인
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>
                    <strong>퇴직금:</strong> 1년 이상 근무 시 지급되는지 확인
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>
                    <strong>복리후생:</strong> 식대, 교통비, 자기계발비,
                    건강검진 등
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>
                    <strong>인센티브 조건:</strong> 어떤 조건에서 얼마나 받을 수
                    있는지
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>
                    <strong>연봉 인상 주기:</strong> 매년? 2년마다? 평가 기준은?
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>
                    <strong>주 근무시간:</strong> 주 52시간? 유연근무? 재택
                    가능?
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
              <h3 className="font-semibold mb-2">💰 실수령액 계산하기</h3>
              <p className="text-sm mb-2">
                연봉 5,000만원 제시받았다면 실제 월 실수령액은?
              </p>
              <ul className="text-sm space-y-1">
                <li>• 4대보험: 약 9~10%</li>
                <li>• 소득세+지방세: 약 3~8% (연봉에 따라 다름)</li>
                <li>
                  • <strong>→ 실수령액: 약 82~88%</strong>
                </li>
                <li className="text-indigo-600 font-semibold">
                  • 5,000만원 연봉 → 월 실수령 약 340~370만원
                </li>
              </ul>
              <p className="text-sm mt-2 text-slate-600">
                정확한 실수령액은 상단의 '계산기' 메뉴에서 확인하세요!
              </p>
            </div>
          </div>
        </section>

        {/* 최종 팁 */}
        <section className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">🎯 연봉 협상 최종 체크</h2>
          <div className="space-y-3 text-sm text-slate-700">
            <div className="flex items-start gap-3">
              <span className="text-2xl">1️⃣</span>
              <div>
                <strong>시장 조사는 필수</strong>
                <p className="text-slate-600">
                  최소 3개 이상의 출처에서 연봉 정보를 확인하세요.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">2️⃣</span>
              <div>
                <strong>여러 오퍼를 받아두기</strong>
                <p className="text-slate-600">
                  협상력을 높이는 가장 확실한 방법은 다른 선택지를 갖는
                  것입니다.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">3️⃣</span>
              <div>
                <strong>항상 서면으로 확인</strong>
                <p className="text-slate-600">
                  구두 약속은 법적 효력이 약합니다. 근로계약서에 명시하세요.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">4️⃣</span>
              <div>
                <strong>타이밍이 전부</strong>
                <p className="text-slate-600">
                  최종 합격 통보 직후가 가장 유리합니다. 입사 후는 늦습니다.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">5️⃣</span>
              <div>
                <strong>존중과 감사의 태도</strong>
                <p className="text-slate-600">
                  협상은 싸움이 아닙니다. 함께 일할 사람들과의 첫 인상입니다.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
