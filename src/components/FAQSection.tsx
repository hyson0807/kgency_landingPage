import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "한국어 테스트는 어떻게 진행되나요??",
      answer: "지원자가 앱을 통해 간단한 자기소개와 업무 관련 질문에 대한 답변을 영상 또는 음성으로 녹화하여 제출합니다. 사장님은 이를 통해 실제 한국어 소통 능력을 확인할 수 있습니다."
    },
    {
      question: "앱 사용료는 얼마인가요?",
      answer: "기본 매칭 서비스는 무료로 제공됩니다. 프리미엄 기능(상세 테스트 결과, 우선 매칭 등)은 월 구독제로 이용할 수 있습니다. 자세한 요금은 앱에서 확인하실 수 있습니다."
    },
    {
      question: "외국인 구직자는 어떤 국가 출신인가요?",
      answer: "베트남, 필리핀, 중국, 태국, 미얀마 등 아시아 각국의 구직자들이 주로 등록되어 있으며, 다양한 업종과 직급의 인재들을 만나실 수 있습니다."
    },
    {
      question: "채용 후 관리 서비스도 제공하나요?",
      answer: "네, 채용 후에도 초기 적응 과정에서 발생할 수 있는 소통 문제나 업무 적응에 대한 상담 서비스를 제공합니다."
    },
    {
      question: "한국어 수준은 어떻게 평가되나요?",
      answer: "TOPIK 기준과 실무진들의 평가를 바탕으로 한 자체 평가 시스템을 통해 기초, 중급, 고급으로 분류됩니다. 실제 업무 상황에서의 소통 능력을 중점적으로 평가합니다."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            자주 묻는 질문
          </h2>
          <p className="text-base text-gray-700">
            링크잡에 대해 궁금한 점들을 확인해보세요
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-xl font-bold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-blue-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-base text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-base text-gray-700 mb-4">
            더 궁금한 점이 있으신가요?
          </p>
          <button className="bg-gray-200 text-gray-700 py-4 px-8 rounded-xl font-bold hover:bg-gray-300 transition-colors">
            문의하기
          </button>
        </div>
      </div>
    </section>
  );
}