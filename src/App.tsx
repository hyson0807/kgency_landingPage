import { HeroSection } from './components/HeroSection';
import { PositioningSection } from './components/PositioningSection';
import { FeaturesSection } from './components/FeaturesSection';
import { AboutSection } from './components/AboutSection';
import { FAQSection } from './components/FAQSection';
import { StickyDownloadButton } from './components/StickyDownloadButton';
import { TermsModal } from './components/TermsModal';
import { Apple, Play } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [termsModal, setTermsModal] = useState<{ open: boolean; type: 'terms' | 'privacy' | 'refund' | null }>({
    open: false,
    type: null
  });

  const openTermsModal = (type: 'terms' | 'privacy' | 'refund') => {
    setTermsModal({ open: true, type });
  };

  const closeTermsModal = () => {
    setTermsModal({ open: false, type: null });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Positioning Message Section */}
      <PositioningSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-blue-500 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            지금 바로 시작하세요
          </h2>
          <p className="text-xl mb-8">
            <strong>공고등록 무료</strong>로 시작하여 <strong>한국어 가능한 외국인</strong>을 만나보세요
          </p>
          
          {/* App Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://apps.apple.com/kr/app/kgency-%EC%BC%80%EC%9D%B4%EC%A0%84%EC%8B%9C-%EC%99%B8%EA%B5%AD%EC%9D%B8-%EA%B5%AC%EC%9D%B8%EA%B5%AC%EC%A7%81-%EC%95%8C%EB%B0%94/id6749147143"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-500 py-4 px-8 rounded-xl font-bold text-lg flex items-center gap-3 shadow-lg hover:bg-gray-100 transition-colors min-w-[200px]"
            >
              <Apple size={24} />
              App Store
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.welkit.kgency"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-500 py-4 px-8 rounded-xl font-bold text-lg flex items-center gap-3 shadow-lg hover:bg-gray-100 transition-colors min-w-[200px]"
            >
              <Play size={24} />
              Google Play
            </a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-bold mb-2">링크잡</h3>
          <p className="text-base text-gray-400 mb-6">
            소통 걱정 없는 외국인 채용 플랫폼
          </p>
          
          {/* Company Information */}
          <div className="text-sm text-gray-400 mb-4 space-y-1">
            <p>웰킷 (welkit)</p>
            <p>사업자 등록번호 : 849-06-03189 | 통신판매업 등록번호 : 2025-수원영통-0686</p>
            <p>이메일 : welkit.answer@gmail.com</p>
          </div>
          
          {/* Terms Links */}
          <div className="flex justify-center gap-6 mb-4">
            <button
              onClick={() => openTermsModal('terms')}
              className="text-sm text-gray-400 hover:text-white transition-colors underline"
            >
              이용약관
            </button>
            <button
              onClick={() => openTermsModal('privacy')}
              className="text-sm text-gray-400 hover:text-white transition-colors underline"
            >
              개인정보처리방침
            </button>
            <button
              onClick={() => openTermsModal('refund')}
              className="text-sm text-gray-400 hover:text-white transition-colors underline"
            >
              환불정책
            </button>
            <a
              href="https://m.blog.naver.com/young_1010-?tab=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-white transition-colors underline"
            >
              블로그
            </a>
          </div>
          
          <p className="text-sm text-gray-500">
            © 2024 링크잡. All rights reserved.
          </p>
        </div>
      </footer>
      
      {/* Sticky Download Button */}
      <StickyDownloadButton />
      
      {/* Terms Modal */}
      {termsModal.type && (
        <TermsModal 
          open={termsModal.open} 
          onOpenChange={closeTermsModal}
          type={termsModal.type}
        />
      )}
    </div>
  );
}