import teamImage from '../assets/b1a03545d8b1a78b2101d56eca5bad436dd36ac1.png';
import teamImage2 from '../assets/eda5b4ca41545e5031e1543ad8007bb8fa06351e.png';
import teamImage3 from '../assets/e8c74e25eb2886e3cfcdab4a4db83fcd7b268010.png';
import teamImage4 from '../assets/1d6322db6f43474385c0ff6df442f76405e8608c.png';
import { CheckCircle, Target, Users, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function AboutSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const teamImages = [
    { src: teamImage, alt: "링크잡 팀 미팅" },
    { src: teamImage2, alt: "링크잡 교육 세션" },
    { src: teamImage3, alt: "링크잡 팀 워크숍" },
    { src: teamImage4, alt: "링크잡 팀 협업" }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % teamImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + teamImages.length) % teamImages.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            외국인 채용,<br />
            소통과 인상부터 확인하세요!
          </h2>
        </div>

        {/* Team Section (moved above image) */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            우리의 팀
          </h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-base text-gray-700 mb-4 leading-relaxed text-center">
              링크잡은 미국, 호주, 캐나다, 필리핀 등 글로벌 무대에서의 누적 15년 경력을 가진 젊은 창업팀이 이끌고 있습니다.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="text-center">
                <Target className="w-12 h-12 text-blue-500 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">경영학·비즈니스 전략 전공자의</h4>
                <p className="text-sm text-gray-600">탄탄한 이론 기반</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-green-500 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">해외 인사·채용·교육 분야 경험을 바탕으로 한</h4>
                <p className="text-sm text-gray-600">실무 전문성</p>
              </div>
              <div className="text-center">
                <Zap className="w-12 h-12 text-orange-500 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">스타트업 생태계에서</h4>
                <p className="text-sm text-gray-600">빠르게 실행하고 검증하는 역량</p>
              </div>
            </div>

            <p className="text-base text-gray-700 mb-4 leading-relaxed text-center">
              우리는 현장에서 직접 확인한 외국인 근로자·유학생들의 어려움과, 한국 기업의 인력난 문제를 누구보다 잘 이해합니다.
            </p>
            <p className="text-base text-gray-700 leading-relaxed text-center">
              그 경험을 바탕으로, 실질적으로 도움이 되는 솔루션을 만들고 있습니다.
            </p>
          </div>
        </div>

        {/* Team Image Slider */}
        <div className="mb-12 text-center">
          <div className="relative max-w-2xl mx-auto">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img 
                src={teamImages[currentImageIndex].src} 
                alt={teamImages[currentImageIndex].alt} 
                className="w-full h-80 object-cover transition-all duration-500"
              />
              
              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
              
              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {teamImages.length}
              </div>
            </div>
            
            {/* Thumbnail Navigation */}
            <div className="flex justify-center gap-3 mt-4">
              {teamImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'ring-3 ring-blue-500 scale-105' 
                      : 'hover:scale-105 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-16 h-16 object-cover"
                  />
                </button>
              ))}
            </div>
            
            {/* Progress Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {teamImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentImageIndex 
                      ? 'w-8 h-3 bg-blue-500' 
                      : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mission Section (moved below image) */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            우리의 미션
          </h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-base text-gray-700 mb-4 leading-relaxed text-center">
              케이전시는 한국에서 일하고 싶은 외국인과 인재난을 겪는 기업을 연결하는 새로운 채용 플랫폼입니다.
            </p>
            <p className="text-base text-gray-700 mb-4 leading-relaxed text-center">
              우리는 단순한 구인구직 중개가 아니라, <strong>"언어 소통 문제"</strong>라는 본질적인 장벽을 해결하는 데 집중합니다.
            </p>
            <p className="text-base text-gray-700 mb-4 leading-relaxed text-center">
              사장님은 지원자의 한국어 실력을 미리 검증하고 안심 채용할 수 있으며, 구직자는 자신의 역량을 정확하게 보여줄 기회를 얻습니다.
            </p>
            <p className="text-base text-gray-700 leading-relaxed text-center">
              그 결과, 모두가 만족할 수 있는 투명하고 공정한 고용 환경을 만들어갑니다.
            </p>
          </div>
        </div>

        {/* Value Section */}
        <div className="bg-blue-50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            케이전시가 제공하는 가치
          </h3>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">언어 장벽 없는 채용</h4>
                <p className="text-gray-700">한국어 테스트 영상으로 소통 가능한 인재만 확인</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">신뢰할 수 있는 매칭</h4>
                <p className="text-gray-700">AI 키워드 매칭·자동 이력서 생성·5초 면접 확정</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">상호 성장하는 관계</h4>
                <p className="text-gray-700">사장님·구직자 모두 윈윈하는 구조</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-gray-800">
              👉 <strong>케이전시는 단순한 채용 플랫폼이 아니라,</strong><br />
              <strong>글로벌 경험을 가진 팀이 직접 만든, 외국인과 한국 사회를 잇는 다리입니다.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}