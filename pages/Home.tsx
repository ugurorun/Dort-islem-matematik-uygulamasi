import React from 'react';
import { useNavigate } from 'react-router-dom';
import { OperationType } from '../types';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleStartQuiz = (type: string) => {
    navigate(`/quiz/${type}`);
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <header className="flex items-center justify-between p-6 pb-2 pt-8">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div 
              className="bg-center bg-no-repeat bg-cover rounded-full size-12 border-4 border-primary/20" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBmuWHLHVbtGSuaHiMI9RGs36G2-mz0sEd828SVsktpHslTd_OSNFxel4nwfvkezuLszC4IOar-em4_PJ81v5SQRKehkPu8-RDfmLcpP8ITG9osQ_Z5rGcQSOsaOsrrBGVnl3AQigno9C_1VbYLhFc87yb4CkIECq3sNCpL62iwyvHrARaq6JiUPTJtobJ6own7AgBjpMUD4-Nj38Wc--9deKZFlhJn8jIliBojHnu9ZfUKdhHGkODoLIEdShO7fBNgzZolepF5Or66")' }}
            ></div>
            <div className="absolute -bottom-1 -right-1 bg-yellow-400 text-white rounded-full p-1 border-2 border-white dark:border-[#101922] flex items-center justify-center size-6">
              <span className="material-symbols-outlined text-[14px]">star</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Merhaba, Ali!</span>
            <div className="flex items-center gap-1">
              <span className="text-[#111418] dark:text-white font-bold text-lg leading-tight">120 Yıldız</span>
            </div>
          </div>
        </div>
        <button 
          onClick={() => navigate('/settings')}
          className="flex items-center justify-center size-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <span className="material-symbols-outlined">settings</span>
        </button>
      </header>

      <main className="flex-1 overflow-y-auto px-6 pb-8">
        <div className="flex flex-col items-center justify-center py-6 text-center">
          <div className="relative w-full max-w-[280px] aspect-square mb-4">
            <div 
              className="w-full h-full bg-center bg-contain bg-no-repeat animate-[bounce_3s_infinite]" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDVGIjQ6W8fQDQ2_G6YechZtyUc5_CKiLG_VHdUnzddItpioanOrtrbbSNLVjzIBaVQHkYrPVAZfjyYgioKZyHHSdDwDjY4VEXMuwu1c5vKcFyQ91dPo199rvKJIWiSGCgqzlndKYYlBTvabk1Tmx-tElCWwZq5n9BzgfTtl4h3LbbMxvhSw2-rz9ibuxUsmT2LaSy4WjAY4bZyiZfG3WGqTyvy5OEGLMzu3DBIrd7y71gkxK_wmkdmGn7t2X1hKbG6J35nL_yHka7M")', borderRadius: '20px' }}
            ></div>
            <div className="absolute top-0 right-10 animate-[pulse_4s_infinite] text-primary text-4xl font-black rotate-12">+</div>
            <div className="absolute bottom-10 left-4 animate-[pulse_3s_infinite] text-accent-orange text-5xl font-black -rotate-12">÷</div>
            <div className="absolute top-1/2 -right-2 animate-[pulse_5s_infinite] text-accent-purple text-3xl font-black rotate-45">×</div>
          </div>
          <h1 className="text-[#111418] dark:text-white text-3xl font-black tracking-tight mb-2">Matematik Zamanı!</h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg font-medium max-w-[260px] leading-snug">Bugün hangi işlemi çalışmak istersin?</p>
        </div>

        <div className="flex flex-col gap-4 mt-2">
          {/* ADDITION */}
          <button 
            onClick={() => handleStartQuiz(OperationType.ADDITION)}
            className="group relative w-full overflow-hidden rounded-2xl bg-blue-50 dark:bg-blue-900/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border-2 border-transparent hover:border-primary"
          >
            <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-primary/10 to-transparent"></div>
            <div className="flex items-center p-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/30 group-hover:rotate-6 transition-transform">
                <span className="material-symbols-outlined text-4xl">add</span>
              </div>
              <div className="ml-5 flex flex-col items-start text-left">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">Toplama</h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">(+) İşlemleri Pratiği</p>
              </div>
              <div className="ml-auto">
                <span className="material-symbols-outlined text-gray-300 group-hover:text-primary transition-colors text-3xl">chevron_right</span>
              </div>
            </div>
          </button>

          {/* SUBTRACTION */}
          <button 
            onClick={() => handleStartQuiz(OperationType.SUBTRACTION)}
            className="group relative w-full overflow-hidden rounded-2xl bg-orange-50 dark:bg-orange-900/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border-2 border-transparent hover:border-accent-orange"
          >
            <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-accent-orange/10 to-transparent"></div>
            <div className="flex items-center p-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-accent-orange text-white shadow-lg shadow-accent-orange/30 group-hover:-rotate-6 transition-transform">
                <span className="material-symbols-outlined text-4xl">remove</span>
              </div>
              <div className="ml-5 flex flex-col items-start text-left">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-accent-orange transition-colors">Çıkarma</h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">(-) İşlemleri Pratiği</p>
              </div>
              <div className="ml-auto">
                <span className="material-symbols-outlined text-gray-300 group-hover:text-accent-orange transition-colors text-3xl">chevron_right</span>
              </div>
            </div>
          </button>

          {/* MULTIPLICATION */}
          <button 
            onClick={() => handleStartQuiz(OperationType.MULTIPLICATION)}
            className="group relative w-full overflow-hidden rounded-2xl bg-purple-50 dark:bg-purple-900/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border-2 border-transparent hover:border-accent-purple"
          >
            <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-accent-purple/10 to-transparent"></div>
            <div className="flex items-center p-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-accent-purple text-white shadow-lg shadow-accent-purple/30 group-hover:rotate-12 transition-transform">
                <span className="material-symbols-outlined text-4xl">close</span>
              </div>
              <div className="ml-5 flex flex-col items-start text-left">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-accent-purple transition-colors">Çarpma</h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">(x) İşlemleri Pratiği</p>
              </div>
              <div className="ml-auto">
                <span className="material-symbols-outlined text-gray-300 group-hover:text-accent-purple transition-colors text-3xl">chevron_right</span>
              </div>
            </div>
          </button>

          {/* DIVISION */}
          <button 
            onClick={() => handleStartQuiz(OperationType.DIVISION)}
            className="group relative w-full overflow-hidden rounded-2xl bg-green-50 dark:bg-green-900/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border-2 border-transparent hover:border-accent-green"
          >
            <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-accent-green/10 to-transparent"></div>
            <div className="flex items-center p-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-accent-green text-white shadow-lg shadow-accent-green/30 group-hover:-rotate-12 transition-transform">
                <span className="text-4xl font-bold">÷</span>
              </div>
              <div className="ml-5 flex flex-col items-start text-left">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-accent-green transition-colors">Bölme</h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">(÷) İşlemleri Pratiği</p>
              </div>
              <div className="ml-auto">
                <span className="material-symbols-outlined text-gray-300 group-hover:text-accent-green transition-colors text-3xl">chevron_right</span>
              </div>
            </div>
          </button>
        </div>

        <div className="mt-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 to-primary p-5 shadow-lg text-white">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/20 blur-xl"></div>
            <div className="absolute -left-6 -bottom-6 h-24 w-24 rounded-full bg-white/20 blur-xl"></div>
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-100 mb-1">Günün Görevi</p>
                <h4 className="text-lg font-bold">10 Soru Çöz, Ödülü Kap!</h4>
                <div className="mt-3 flex items-center gap-2">
                  <div className="h-2 w-24 overflow-hidden rounded-full bg-black/20">
                    <div className="h-full w-1/2 bg-yellow-400"></div>
                  </div>
                  <span className="text-xs font-medium">5/10</span>
                </div>
              </div>
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-sm hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">play_arrow</span>
              </button>
            </div>
          </div>
        </div>
        <div className="h-10"></div> 
      </main>

      <nav className="border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-[#101922] px-6 py-3">
        <ul className="flex items-center justify-around">
          <li>
            <a className="flex flex-col items-center gap-1 text-primary cursor-pointer" onClick={() => navigate('/')}>
              <span className="material-symbols-outlined text-2xl">home</span>
              <span className="text-[10px] font-bold">Ana Sayfa</span>
            </a>
          </li>
          <li>
            <a className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors cursor-pointer" onClick={() => navigate('/stats')}>
              <span className="material-symbols-outlined text-2xl">leaderboard</span>
              <span className="text-[10px] font-medium">Sıralama</span>
            </a>
          </li>
          <li>
            <a className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors cursor-pointer" onClick={() => navigate('/about')}>
              <span className="material-symbols-outlined text-2xl">school</span>
              <span className="text-[10px] font-medium">Dersler</span>
            </a>
          </li>
          <li>
            <a className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors cursor-pointer" onClick={() => navigate('/settings')}>
              <span className="material-symbols-outlined text-2xl">person</span>
              <span className="text-[10px] font-medium">Profil</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;