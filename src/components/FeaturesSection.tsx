import { ImageWithFallback } from './figma/ImageWithFallback';
import { Play, Volume2, Eye, Star } from 'lucide-react';

export function FeaturesSection() {
  return (
    <section className="py-16 px-4 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            핵심 기능
          </h2>
          <p className="text-base text-gray-700 max-w-2xl mx-auto">
            <strong>공고등록은 완전 무료!</strong> 면접 전에 외국인의 <strong>사진과 한국어 테스트 영상</strong>을<br />
            사장님이 직접 확인할 수 있습니다
          </p>
        </div>

        {/* Main Feature Highlight */}
        <div className="bg-blue-500 p-6 rounded-2xl shadow-lg text-white mb-12">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-4">
                💡 차별화 포인트
              </h3>
              <p className="text-lg mb-4">
                <strong>사진 + 한국어 테스트 영상/음성 미리보기</strong>
              </p>
              <p className="mb-6">
                지원자의 <strong>얼굴 사진과 한국어 테스트 결과</strong>를 사장님이 면접 전에 미리 확인할 수 있어, 
                한국어 소통이 가능한 인재인지 미리 판단하고 더 효율적인 채용 결정을 내릴 수 있습니다.
              </p>
              <div className="flex gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Play size={16} />
                  <span>영상 테스트</span>
                </div>
                <div className="flex items-center gap-2">
                  <Volume2 size={16} />
                  <span>음성 테스트</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye size={16} />
                  <span>실시간 확인</span>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1637592156141-d41fb6234e71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGNhbGwlMjBpbnRlcnZpZXclMjBjb21tdW5pY2F0aW9ufGVufDF8fHx8MTc1ODYyNTMyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="한국어 테스트 영상"
                className="w-80 h-48 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Feature Benefits */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Star className="w-6 h-6 text-yellow-500" />
              <h4 className="text-xl font-bold text-gray-900">사장님이 얻는 직접적 이익</h4>
            </div>
            <ul className="space-y-3 text-base text-gray-700">
              <li>✅ <strong>면접 전 시간 낭비 줄임</strong></li>
              <li>✅ <strong>한국어 못하는 지원자 거를 수 있음</strong></li>
              <li>✅ <strong>신뢰할 수 있는 직원만 바로 연결</strong></li>
              <li>✅ <strong>공고등록 완전 무료</strong></li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Star className="w-6 h-6 text-blue-500" />
              <h4 className="text-xl font-bold text-gray-900">구직자 관점</h4>
            </div>
            <ul className="space-y-3 text-base text-gray-700">
              <li>• 한국어 실력을 정확히 어필</li>
              <li>• 공정한 평가 기회 제공</li>
              <li>• 자신의 능력 투명하게 공개</li>
              <li>• 더 나은 매칭 기회</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}