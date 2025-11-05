import exampleImage from '../assets/e72aebdac3000f8ee9b3196d73c357a45ce4c13a.png';
import { Play, Apple } from 'lucide-react';
import { useState, useEffect } from 'react';

export function HeroSection() {
  const [currentFeature, setCurrentFeature] = useState(0);
  
  const features = [
    {
      icon: "🎤",
      title: "한국어 말하기, 면접 전에 확인",
      description: "음성/영상으로 실제 한국어 실력 확인",
      highlight: "✅ 한국어 못하는 지원자 거를 수 있음"
    },
    {
      icon: "🖼️",
      title: "사진·정보로 신뢰 인증",
      description: "실제 얼굴 사진으로 신뢰도 향상",
      highlight: "✅ 신뢰할 수 있는 직원만 바로 연결"
    },
    {
      icon: "👂",
      title: "소통 능력, 미리 확인 가능",
      description: "채용 결정 전 한국어 수준 파악",
      highlight: "✅ 면접 전 시간 낭비 줄임"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [features.length]);

  return (
    <section className="bg-blue-50 min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Main Heading */}
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              소통 걱정 끝!<br />
              <span className="text-blue-500">한국어 검증된 외국인</span>만<br />
              채용하세요
            </h1>

            {/* Logo */}
            <div className="flex justify-center lg:justify-start mb-4">
              <img
                src={exampleImage}
                alt="링크잡 로고"
                className="w-20 h-20 rounded-3xl shadow-lg"
              />
            </div>

            {/* App Name - English & Korean */}
            <div className="mb-8">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <h2 className="text-2xl font-bold text-blue-500">
                  LinkJob
                </h2>
                <span className="text-blue-300">•</span>
                <h2 className="text-2xl font-bold text-blue-500">
                  링크잡
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              <strong>무료로 공고</strong> 올리고,<br />
              <strong>한국어 테스트로</strong> 소통 확인하고,<br />
              <strong>사진으로 인상까지</strong> 미리 본 뒤 채용하세요!
            </p>

            {/* App Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-stretch">
              <a
                href="https://apps.apple.com/kr/app/kgency-%EC%BC%80%EC%9D%B4%EC%A0%84%EC%8B%9C-%EC%99%B8%EA%B5%AD%EC%9D%B8-%EA%B5%AC%EC%9D%B8%EA%B5%AC%EC%A7%81-%EC%95%8C%EB%B0%94/id6749147143"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white py-4 px-8 rounded-xl font-bold text-xl flex items-center justify-center gap-3 shadow-lg hover:bg-blue-600 transition-colors w-full sm:w-[220px]"
              >
                <Apple size={24} />
                App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.welkit.kgency"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white py-4 px-8 rounded-xl font-bold text-xl flex items-center justify-center gap-3 shadow-lg hover:bg-blue-600 transition-colors w-full sm:w-[220px]"
              >
                <Play size={24} />
                Google Play
              </a>
            </div>
          </div>

          {/* Right Content - Feature Highlights */}
          <div className="flex justify-center lg:justify-end">
            <div className="space-y-6 max-w-md w-full">
              {/* Main Feature Card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    핵심 차별화 포인트
                  </h3>
                  <p className="text-gray-600">
                    면접 전에 미리 확인하는 3가지 핵심 기능
                  </p>
                </div>

                {/* Current Feature Display */}
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <span className="text-6xl">{features[currentFeature].icon}</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {features[currentFeature].title}
                  </h4>
                  <p className="text-gray-600 mb-3">
                    {features[currentFeature].description}
                  </p>
                  <p className="text-blue-600 font-bold">
                    {features[currentFeature].highlight}
                  </p>
                </div>
              </div>

              {/* Feature List */}
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-2xl p-4 shadow-lg transition-all duration-500 border-2 cursor-pointer ${
                      index === currentFeature 
                        ? 'border-blue-500 scale-105' 
                        : 'border-gray-100 scale-100 hover:border-gray-200'
                    }`}
                    onClick={() => setCurrentFeature(index)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          index === currentFeature ? 'bg-blue-100' : 'bg-gray-100'
                        }`}>
                          <span className="text-xl">{feature.icon}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h5 className={`font-bold text-sm mb-1 ${
                          index === currentFeature ? 'text-gray-900' : 'text-gray-600'
                        }`}>
                          {feature.title}
                        </h5>
                        <p className={`text-xs ${
                          index === currentFeature ? 'text-blue-600' : 'text-gray-500'
                        }`}>
                          {feature.highlight}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-3">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFeature(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentFeature 
                        ? 'w-8 h-3 bg-blue-500' 
                        : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}