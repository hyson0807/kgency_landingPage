import { MessageCircle, CheckCircle, Users } from 'lucide-react';

export function PositioningSection() {
  const features = [
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-500" />,
      title: "공고등록 완전 무료",
      description: "비용 부담 없이 한국어 가능한 우수한 외국인 인재를 찾아보세요"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      title: "사진+한국어실력 미리보기",
      description: "면접 전에 지원자의 얼굴과 실제 한국어 말하기 능력을 확인하세요"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "검증된 한국어 인재만",
      description: "한국어 테스트를 통과한 소통 가능한 외국인만 매칭됩니다"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            왜 링크잡인가요?
          </h2>
          <p className="text-base text-gray-700 max-w-2xl mx-auto">
            <strong>공고등록 무료</strong>로 시작하여 <strong>한국어 가능한 외국인</strong>만 만나고<br />
            <strong>면접 전 사진과 한국어실력</strong>까지 미리 확인하세요
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-base text-gray-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}