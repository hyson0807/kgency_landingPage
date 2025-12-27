import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-xl font-bold">서비스 약관</h1>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="sticky top-[57px] bg-white border-b border-gray-200 z-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex gap-6">
            <a href="#terms" className="py-3 text-sm font-medium text-blue-600 border-b-2 border-blue-600">
              이용약관
            </a>
            <a href="#privacy" className="py-3 text-sm font-medium text-gray-500 hover:text-gray-900">
              개인정보처리방침
            </a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* 이용약관 섹션 */}
        <section id="terms" className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 pb-3 border-b-2 border-blue-500">
            이용약관
          </h2>

          <div className="space-y-8 text-sm leading-relaxed text-gray-700">
            <p className="text-base">
              본 약관은 웰킷 (welkit)(이하 "회사")가 제공하는 구인구직 매칭 서비스(이하 "서비스")의 이용과 관련하여 회사와 이용자간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
            </p>

            <div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">제1조 (목적)</h3>
              <p>본 약관은 케이젠시가 제공하는 구인구직 매칭 플랫폼 서비스의 이용조건 및 절차, 회사와 회원 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">제2조 (정의)</h3>
              <p>1. "서비스"라 함은 회사가 제공하는 구인구직 매칭 플랫폼을 의미합니다.</p>
              <p>2. "회원"이라 함은 본 약관에 따라 이용계약을 체결하고 서비스를 이용하는 자를 의미합니다.</p>
              <p>3. "구직자"라 함은 취업을 목적으로 서비스를 이용하는 개인회원을 의미합니다.</p>
              <p>4. "기업회원"이라 함은 인재채용을 목적으로 서비스를 이용하는 법인 또는 개인사업자를 의미합니다.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">제3조 (약관의 효력 및 변경)</h3>
              <p>1. 본 약관은 서비스 화면에 게시하거나 기타의 방법으로 회원에게 공지함으로써 효력이 발생합니다.</p>
              <p>2. 회사는 관련법을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.</p>
              <p>3. 약관이 변경되는 경우 회사는 변경사유 및 적용일자를 명시하여 현행약관과 함께 서비스 초기화면에 그 적용일 7일 이전부터 적용일 전일까지 공지합니다.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">제4조 (서비스의 제공 및 변경)</h3>
              <p>1. 회사는 다음과 같은 서비스를 제공합니다:</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>구인구직 정보 매칭 서비스</li>
                <li>면접 일정 관리 서비스</li>
                <li>지원서 관리 서비스</li>
                <li>기타 회사가 정하는 서비스</li>
              </ul>
              <p className="mt-2">2. 회사는 서비스의 내용 및 제공일정을 변경할 수 있으며, 이 경우 변경된 서비스의 내용 및 제공일정을 명시하여 서비스를 통해 통지합니다.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">제5조 (회원가입)</h3>
              <p>1. 회원가입은 이용자가 약관의 내용에 대하여 동의를 하고 회원가입신청을 한 후 회사가 이러한 신청에 대하여 승낙함으로써 체결됩니다.</p>
              <p>2. 회사는 다음 각 호에 해당하는 신청에 대하여는 승낙을 하지 않거나 사후에 이용계약을 해지할 수 있습니다:</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>실명이 아니거나 타인의 명의를 이용한 경우</li>
                <li>허위의 정보를 기재하거나, 회사가 제시하는 내용을 기재하지 않은 경우</li>
                <li>기타 회원으로 등록하는 것이 회사의 기술상 현저히 지장이 있다고 판단되는 경우</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">제6조 (회원정보의 변경)</h3>
              <p>회원은 개인정보관리화면을 통하여 언제든지 본인의 개인정보를 열람하고 수정할 수 있습니다. 다만, 서비스 관리를 위해 필요한 실명, 휴대폰번호 등은 수정이 제한될 수 있습니다.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">제7조 (개인정보보호)</h3>
              <p>회사는 관계법령이 정하는 바에 따라 회원의 개인정보를 보호하기 위해 노력합니다. 개인정보의 보호 및 사용에 대해서는 관련법 및 회사의 개인정보처리방침이 적용됩니다.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">제8조 (회원의 의무)</h3>
              <p>1. 회원은 다음 행위를 하여서는 안됩니다:</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>신청 또는 변경시 허위내용의 등록</li>
                <li>타인의 정보도용</li>
                <li>회사가 게시한 정보의 변경</li>
                <li>회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시</li>
                <li>회사 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
                <li>회사 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
                <li>외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 서비스에 공개 또는 게시하는 행위</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">제9조 (서비스 이용제한)</h3>
              <p>회사는 회원이 본 약관의 의무를 위반하거나 서비스의 정상적인 운영을 방해한 경우, 경고, 일시정지, 영구이용정지 등으로 서비스 이용을 단계적으로 제한할 수 있습니다.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">제10조 (손해배상)</h3>
              <p>회사는 무료로 제공되는 서비스와 관련하여 회원에게 어떠한 손해가 발생하더라도 동 손해가 회사의 고의 또는 중대한 과실에 의한 경우를 제외하고 이에 대하여 책임을 부담하지 아니합니다.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">제11조 (면책조항)</h3>
              <p>1. 회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</p>
              <p>2. 회사는 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.</p>
              <p>3. 회사는 회원이 서비스를 이용하여 기대하는 수익을 상실한 것에 대하여 책임을 지지 않으며, 그 밖의 서비스를 통하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않습니다.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">제12조 (재판권 및 준거법)</h3>
              <p>본 약관에 관하여 분쟁이 있을 때에는 대한민국 법을 적용하며, 서울중앙지방법원을 관할법원으로 합니다.</p>
            </div>

            <p className="text-gray-500 pt-4">
              본 이용약관은 2025년 5월 19일부터 적용됩니다.
            </p>
          </div>
        </section>

        {/* 개인정보처리방침 섹션 */}
        <section id="privacy" className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 pb-3 border-b-2 border-blue-500">
            개인정보처리방침
          </h2>

          <div className="space-y-8 text-sm leading-relaxed text-gray-700">
            <p className="text-base">
              웰킷 (welkit) (이하 "회사")는 정보주체의 자유와 권리 보호를 위해 「개인정보 보호법」 및 관계 법령이 정한 바를 준수하여, 적법하게 개인정보를 처리하고 안전하게 관리하고 있습니다. 이에 「개인정보 보호법」 제30조에 따라 정보주체에게 개인정보 처리에 관한 절차 및 기준을 안내하고, 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
            </p>

            <div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">제1조 (개인정보의 처리목적)</h3>
              <p>회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>회원 가입 및 관리: 회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스 부정이용 방지</li>
                <li>구인구직 매칭 서비스 제공: 구직자와 구인기업 간의 매칭, 이력서 관리, 채용정보 제공, 면접 일정 관리</li>
                <li>고충처리: 민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지, 처리결과 통보</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">제2조 (개인정보의 처리 및 보유기간)</h3>
              <p>① 회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
              <p className="mt-2">② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>회원정보: 회원 탈퇴 시까지 (단, 관계법령에 보존의무가 있는 경우 해당 기간까지 보존)</li>
                <li>면접 및 채용 관련 기록: 3년</li>
                <li>부정이용 기록: 1년</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">제3조 (개인정보의 제3자 제공)</h3>
              <p>① 회사는 정보주체의 개인정보를 제1조(개인정보의 처리목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 「개인정보 보호법」 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.</p>
              <p className="mt-2">② 회사는 다음과 같은 경우에 개인정보를 제3자에게 제공하고 있습니다.</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>구인구직 매칭 서비스 제공을 위한 구직자와 구인기업 간의 정보 공유 (사전 동의를 받은 경우에 한함)</li>
                <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">제4조 (개인정보처리의 위탁)</h3>
              <p>① 회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>SMS 발송 업무: 문자메시지 발송을 위한 통신사 및 SMS 발송 대행업체</li>
                <li>클라우드 서비스 제공업체: 서버 운영 및 데이터 저장</li>
              </ul>
              <p className="mt-2">② 위탁계약 체결시 「개인정보 보호법」 제26조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적·관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리·감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">제5조 (정보주체의 권리·의무 및 행사방법)</h3>
              <p>① 정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>개인정보 처리현황 통지요구</li>
                <li>개인정보 열람요구</li>
                <li>개인정보 정정·삭제요구</li>
                <li>개인정보 처리정지요구</li>
              </ul>
              <p className="mt-2">② 제1항에 따른 권리 행사는 회사에 대해 서면, 전화, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 지체없이 조치하겠습니다.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">제6조 (처리하는 개인정보 항목)</h3>
              <p>회사는 다음의 개인정보 항목을 처리하고 있습니다.</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>필수항목: 휴대폰번호, 이름, 연령, 성별, 이메일주소(선택)</li>
                <li>구직자 추가 정보: 경력사항, 학력사항, 희망근무조건, 자기소개서</li>
                <li>구인기업 추가 정보: 회사명, 사업자등록번호, 회사주소, 담당자 정보</li>
                <li>자동 수집 정보: 서비스 이용기록, 접속 로그, 쿠키, 접속 IP 정보, 결제기록</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">제7조 (개인정보의 파기)</h3>
              <p>① 회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.</p>
              <p className="mt-2">② 개인정보 파기의 절차 및 방법은 다음과 같습니다.</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>파기절차: 불필요한 개인정보 및 개인정보파일은 개인정보보호책임자의 승인을 받아 파기합니다.</li>
                <li>파기방법: 전자적 파일형태로 기록·저장된 개인정보는 기록을 재생할 수 없도록 로우레벨포맷(Low Level Format) 등의 방법을 이용하여 파기하며, 종이문서에 기록·저장된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">제8조 (개인정보의 안전성 확보조치)</h3>
              <p>회사는 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다.</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>개인정보 취급 직원의 최소화 및 교육: 개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화하여 개인정보를 관리하는 대책을 시행하고 있습니다.</li>
                <li>정기적인 자체 감사: 개인정보 취급 관련 안정성 확보를 위해 정기적으로 자체 감사를 실시하고 있습니다.</li>
                <li>개인정보의 암호화: 개인정보는 암호화 등을 통해 안전하게 저장 및 관리되고 있습니다.</li>
                <li>해킹 등에 대비한 기술적 대책: 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적인 갱신·점검을 하며 외부로부터 접근이 통제된 구역에 시스템을 설치하고 기술적/물리적으로 감시 및 차단하고 있습니다.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">제9조 (개인정보보호책임자)</h3>
              <p>① 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보보호책임자를 지정하고 있습니다.</p>
              <div className="mt-3 p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold">▶ 개인정보보호책임자</p>
                <p>성명: 개인정보보호책임자</p>
                <p>연락처: welkit.answer@gmail.com</p>
              </div>
              <p className="mt-3">② 정보주체께서는 회사의 서비스(또는 사업)를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보보호책임자 및 담당부서로 문의하실 수 있습니다.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">제10조 (개인정보 처리방침 변경)</h3>
              <p>① 이 개인정보처리방침은 2025년 5월 19일부터 적용됩니다.</p>
              <p>② 이전의 개인정보 처리방침은 아래에서 확인하실 수 있습니다.</p>
            </div>

            <p className="text-gray-500 pt-4">
              본 개인정보처리방침은 2025년 5월 19일부터 적용됩니다.
            </p>
          </div>
        </section>

        {/* Footer */}
        <section className="pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-center">
            © 2024 링크잡. All rights reserved.
          </p>
        </section>
      </main>
    </div>
  );
}
