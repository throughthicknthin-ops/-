import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
  category: string;
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const faqs: FAQItem[] = [
    {
      category: "계산기",
      question: "이 계산기의 결과는 정확한가요?",
      answer:
        "이 계산기는 단순화된 모델을 사용하여 대략적인 실수령액을 추정합니다. 실제 세법은 더 복잡하며, 개인의 상황(부양가족, 각종 공제 등)에 따라 달라질 수 있습니다. 정확한 금액은 회사의 급여명세서나 세무사 상담을 통해 확인하세요.",
    },
    {
      category: "계산기",
      question: "연봉에 상여금도 포함되나요?",
      answer:
        "네, 일반적으로 '연봉'은 기본급 + 상여금 + 각종 수당을 모두 합친 1년 총 급여액을 의미합니다. 채용 공고나 계약서에 명시된 '총 연봉'을 입력하시면 됩니다.",
    },
    {
      category: "계산기",
      question: "세전 연봉과 세후 연봉의 차이는 무엇인가요?",
      answer:
        "세전 연봉은 회사가 지급하는 총 급여액이고, 세후 연봉(실수령액)은 4대보험과 세금을 뺀 후 실제 받는 금액입니다. 일반적으로 세후는 세전의 약 82~88% 수준입니다.",
    },
    {
      category: "계산기",
      question: "부양가족 수는 어떻게 설정하나요?",
      answer:
        "본인을 포함하여 실제로 부양하는 가족 수를 입력하세요. 예: 본인만 있으면 1명, 배우자가 있으면 2명, 자녀가 1명 있으면 3명. 부양가족이 많을수록 소득공제가 커져 세금이 줄어듭니다.",
    },
    {
      category: "4대보험",
      question: "4대보험은 언제부터 적용되나요?",
      answer:
        "입사일부터 바로 적용됩니다. 정규직, 계약직 모두 근로자 1인 이상 사업장은 의무 가입 대상입니다. 다만 3개월 미만 단기 근로자나 주 15시간 미만 근로자는 일부 예외가 있을 수 있습니다.",
    },
    {
      category: "4대보험",
      question: "4대보험료는 매달 똑같이 나가나요?",
      answer:
        "기본급이 일정하다면 매달 비슷한 금액이 나갑니다. 다만 상여금이 지급되는 달이나 연봉 인상 후에는 보험료가 증가할 수 있습니다. 국민연금과 건강보험은 매년 7월에 '보수월액'을 재산정합니다.",
    },
    {
      category: "4대보험",
      question: "아르바이트도 4대보험을 내나요?",
      answer:
        "주 15시간 이상 근무하는 아르바이트는 4대보험 가입 대상입니다. 주 15시간 미만은 일부 보험(고용보험, 산재보험)만 해당될 수 있습니다. 근로계약서를 확인하거나 사업주에게 문의하세요.",
    },
    {
      category: "4대보험",
      question: "프리랜서도 4대보험을 내나요?",
      answer:
        "프리랜서(3.3% 원천징수)는 일반적으로 4대보험 가입 대상이 아닙니다. 다만 본인이 원한다면 지역가입자로 국민연금과 건강보험에 가입할 수 있습니다. 고용보험은 '자영업자 고용보험'에 자발적으로 가입 가능합니다.",
    },
    {
      category: "세금",
      question: "연말정산은 언제 하나요?",
      answer:
        "매년 1~2월에 진행됩니다. 전년도(1월~12월) 소득에 대해 정산하며, 회사에서 일괄적으로 처리합니다. 근로자는 공제 증빙 자료를 제출하면 되고, 보통 2월 급여에 환급액이 반영됩니다.",
    },
    {
      category: "세금",
      question: "연말정산에서 환급을 많이 받으려면?",
      answer:
        "소득공제와 세액공제 항목을 최대한 활용하세요. 신용카드(25% 초과분), 연금저축, 의료비, 교육비, 기부금 등을 챙기고, 부양가족을 정확히 등록하세요. 자세한 내용은 '세금 가이드' 페이지를 참고하세요.",
    },
    {
      category: "세금",
      question: "월급에서 세금을 너무 많이 떼는 것 같아요.",
      answer:
        "매월 원천징수되는 세금은 간이세액표에 따라 미리 떼는 금액입니다. 연말정산에서 실제 내야 할 세금과 비교해 조정됩니다. 만약 매월 너무 많이 떼인다면 회사에 '부양가족 수'를 조정 요청할 수 있습니다.",
    },
    {
      category: "세금",
      question: "13월의 월급이란 무엇인가요?",
      answer:
        "연말정산에서 환급받는 금액을 '13월의 월급'이라고 부르기도 합니다. 1년간 많이 낸 세금을 돌려받는 것이므로, 공제 항목을 잘 챙기면 수십만원~백만원 이상 환급받을 수 있습니다.",
    },
    {
      category: "연봉",
      question: "연봉 5,000만원이면 월급이 얼마인가요?",
      answer:
        "5,000만원을 12개월로 나누면 약 417만원이 월 세전 급여입니다. 여기서 4대보험과 세금을 빼면 실수령액은 약 340~370만원 정도입니다. 정확한 금액은 상단의 '계산기' 메뉴에서 확인하세요.",
    },
    {
      category: "연봉",
      question: "이직 시 연봉은 얼마나 올려 받아야 하나요?",
      answer:
        "일반적으로 최소 20% 이상 인상을 권장합니다. 이직에는 새로운 환경 적응, 경력 단절 위험 등이 있으므로, 현재보다 낮거나 비슷한 연봉이라면 이직의 실익이 적습니다. 시장 조사 후 합리적인 금액을 제시하세요.",
    },
    {
      category: "연봉",
      question: "면접에서 희망 연봉을 물어보면 어떻게 답해야 하나요?",
      answer:
        "시장 조사를 바탕으로 구체적인 금액을 제시하세요. 막연히 '회사 규정에 따르겠습니다'라고 하면 협상 기회를 잃습니다. '제 경력과 시장 수준을 고려할 때 ○○만원을 희망합니다'라고 답하세요. 자세한 내용은 '연봉 협상' 페이지를 참고하세요.",
    },
    {
      category: "연봉",
      question: "연봉 계약서에 성과급이 포함되어 있는데, 꼭 받나요?",
      answer:
        "성과급은 회사 실적이나 개인 평가에 따라 변동될 수 있습니다. 계약서에 '연봉 5,000만원(성과급 포함)'이라고 되어 있다면, 성과급을 못 받으면 실제 연봉이 줄어듭니다. 계약 시 기본급과 성과급 비율을 명확히 확인하세요.",
    },
    {
      category: "실수령액",
      question: "실수령액이 예상보다 적은데, 왜 그런가요?",
      answer:
        "4대보험(약 9~10%)과 소득세+지방세(약 3~8%)가 공제되기 때문입니다. 또한 첫 달에는 건강보험료가 추가로 나갈 수 있고, 상여금이 포함된 달은 보험료와 세금이 더 많이 나갑니다.",
    },
    {
      category: "실수령액",
      question: "세전 연봉의 몇 %가 실수령액인가요?",
      answer:
        "일반적으로 82~88% 정도입니다. 연봉이 낮을수록 비율이 높고(88% 근처), 연봉이 높을수록 비율이 낮습니다(82% 이하). 정확한 금액은 부양가족 수, 각종 공제 항목에 따라 달라집니다.",
    },
    {
      category: "실수령액",
      question: "수습 기간에는 급여가 다른가요?",
      answer:
        "법적으로 수습 기간이라고 해서 급여를 함부로 깎을 수 없습니다. 다만 계약서에 '수습 기간 3개월간 정규직 연봉의 90%'처럼 명시되어 있다면 가능합니다. 계약 전에 반드시 확인하세요.",
    },
    {
      category: "복리후생",
      question: "복리후생도 연봉에 포함되나요?",
      answer:
        "식대, 교통비 등 비과세 항목은 연봉에 포함되지 않고 별도로 지급되는 경우가 많습니다. 반면 상여금, 성과급은 연봉에 포함됩니다. 채용 공고나 계약서에서 '기본급 + 상여금 + 수당'을 구분해서 확인하세요.",
    },
    {
      category: "복리후생",
      question: "비과세 항목은 무엇인가요?",
      answer:
        "세금이 부과되지 않는 급여 항목입니다. 대표적으로 식대(월 20만원 한도), 자가운전보조금(월 20만원 한도), 출산/보육수당(월 10만원 한도) 등이 있습니다. 비과세 항목은 4대보험료와 세금 계산에 포함되지 않아 유리합니다.",
    },
    {
      category: "복리후생",
      question: "퇴직금은 언제 받나요?",
      answer:
        "1년 이상 근무한 경우, 퇴사일로부터 14일 이내에 받아야 합니다. 퇴직금은 (퇴사 전 3개월 평균 급여) × (근속연수)로 계산됩니다. 만약 회사가 지급하지 않으면 노동청에 진정을 제기할 수 있습니다.",
    },
    {
      category: "기타",
      question: "최저시급은 얼마인가요?",
      answer:
        "2025년 기준 시급 10,030원입니다. 월급제로 환산하면 주 40시간 기준 월 약 209만원입니다. 최저임금 미만으로 계약하는 것은 불법이므로, 의심되면 근로계약서를 확인하세요.",
    },
    {
      category: "기타",
      question: "야근 수당은 어떻게 받나요?",
      answer:
        "법정 근로시간(주 40시간)을 초과한 연장근로에 대해서는 통상임금의 1.5배를 받습니다. 야간근로(22시~06시)는 추가로 50%를 받습니다. 다만 '포괄임금제' 계약인 경우 연장수당이 기본급에 포함될 수 있으니 계약서를 확인하세요.",
    },
    {
      category: "기타",
      question: "이 사이트의 정보는 법적 효력이 있나요?",
      answer:
        "아닙니다. 이 사이트는 참고용 정보 제공을 목적으로 하며, 법적 자문이나 세무 상담을 대체할 수 없습니다. 정확한 법률 및 세무 사항은 전문가와 상담하시기 바랍니다.",
    },
  ];

  const categories = [
    "all",
    "계산기",
    "4대보험",
    "세금",
    "연봉",
    "실수령액",
    "복리후생",
    "기타",
  ];

  const filteredFaqs =
    selectedCategory === "all"
      ? faqs
      : faqs.filter((faq) => faq.category === selectedCategory);

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="text-3xl font-extrabold mb-6">자주 묻는 질문 (FAQ)</h1>
      <p className="text-slate-600 mb-8">
        연봉, 세금, 4대보험 등에 대한 궁금증을 해결해드립니다.
      </p>

      {/* 카테고리 필터 */}
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-white border text-slate-600 hover:bg-slate-50"
            }`}
          >
            {cat === "all" ? "전체" : cat}
          </button>
        ))}
      </div>

      {/* FAQ 목록 */}
      <div className="space-y-3">
        {filteredFaqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-start gap-3 flex-1">
                <span className="text-blue-600 font-bold text-lg mt-0.5">
                  Q.
                </span>
                <div>
                  <span className="inline-block px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded mb-2">
                    {faq.category}
                  </span>
                  <p className="font-semibold text-slate-900">{faq.question}</p>
                </div>
              </div>
              <svg
                className={`w-5 h-5 text-slate-400 transition-transform flex-shrink-0 ml-4 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 pt-2 bg-slate-50 border-t">
                <div className="flex gap-3">
                  <span className="text-green-600 font-bold text-lg">A.</span>
                  <p className="text-slate-700 leading-relaxed flex-1">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredFaqs.length === 0 && (
        <div className="text-center py-12 text-slate-500">
          해당 카테고리에 질문이 없습니다.
        </div>
      )}

      {/* 추가 문의 안내 */}
      <section className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
        <h3 className="font-bold text-lg mb-3">💬 찾으시는 답변이 없나요?</h3>
        <p className="text-sm text-slate-700 mb-4">
          위 FAQ에서 원하는 답변을 찾지 못하셨다면, 다음 페이지들을
          참고해보세요.
        </p>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          <a
            href="/"
            className="block bg-white border rounded p-3 hover:shadow transition-shadow"
          >
            <div className="font-semibold text-blue-600 mb-1">
              💰 실수령액 계산기
            </div>
            <p className="text-slate-600">연봉 입력 시 세후 월 실수령액 확인</p>
          </a>
          <a
            href="/insurance"
            className="block bg-white border rounded p-3 hover:shadow transition-shadow"
          >
            <div className="font-semibold text-blue-600 mb-1">
              🏥 4대보험 가이드
            </div>
            <p className="text-slate-600">국민연금, 건강보험 등 상세 정보</p>
          </a>
          <a
            href="/tax"
            className="block bg-white border rounded p-3 hover:shadow transition-shadow"
          >
            <div className="font-semibold text-blue-600 mb-1">
              📊 세금 가이드
            </div>
            <p className="text-slate-600">소득세, 연말정산 절세 팁</p>
          </a>
          <a
            href="/tips"
            className="block bg-white border rounded p-3 hover:shadow transition-shadow"
          >
            <div className="font-semibold text-blue-600 mb-1">
              🎯 연봉 협상 팁
            </div>
            <p className="text-slate-600">면접 시 연봉 협상 전략</p>
          </a>
        </div>
      </section>

      {/* 면책 조항 */}
      <section className="mt-8 bg-yellow-50 border border-yellow-200 rounded p-4 text-sm text-slate-700">
        <h3 className="font-semibold mb-2">⚠️ 면책 조항</h3>
        <p>
          본 FAQ의 내용은 일반적인 정보 제공을 목적으로 하며, 개별 상황에 따라
          다를 수 있습니다. 정확한 법률, 세무, 노무 상담은 전문가와 상담하시기
          바랍니다. 본 정보로 인해 발생하는 어떠한 손해에 대해서도 책임지지
          않습니다.
        </p>
      </section>
    </div>
  );
}
