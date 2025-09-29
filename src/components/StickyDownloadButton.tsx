import { useState, useEffect } from 'react';
import { Download, X } from 'lucide-react';

export function StickyDownloadButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky button after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 max-w-sm mx-auto">
      <div className="bg-blue-500 text-white p-4 rounded-2xl shadow-lg flex items-center justify-between">
        <div className="flex-1">
          <p className="font-bold text-sm mb-1">케이전시 앱 다운로드</p>
          <p className="text-xs opacity-90">지금 바로 시작하세요!</p>
        </div>
        <div className="flex items-center gap-2 ml-4">
          <a 
            href="https://apps.apple.com/kr/app/kgency-%EC%BC%80%EC%9D%B4%EC%A0%84%EC%8B%9C-%EC%99%B8%EA%B5%AD%EC%9D%B8-%EA%B5%AC%EC%9D%B8%EA%B5%AC%EC%A7%81-%EC%95%8C%EB%B0%94/id6749147143"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-500 px-4 py-2 rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors flex items-center gap-1"
          >
            <Download size={16} />
            다운로드
          </a>
          <button 
            onClick={() => setIsDismissed(true)}
            className="p-1 hover:bg-blue-600 rounded"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}