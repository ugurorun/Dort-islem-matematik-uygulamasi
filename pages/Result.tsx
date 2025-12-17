import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { QuizResultData } from '../types';

const Result: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const stats = location.state as QuizResultData;

  // Fallback if accessed directly
  if (!stats) {
    return (
        <div className="flex h-full items-center justify-center">
            <button onClick={() => navigate('/')} className="text-primary font-bold">Return Home</button>
        </div>
    )
  }

  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark">
      <div className="flex items-center p-4 pb-2 justify-between sticky top-0 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm z-10">
        <div className="w-8"></div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center dark:text-white">Sonuçlar</h2>
        <div className="w-8 flex justify-end">
          <span onClick={() => navigate('/')} className="material-symbols-outlined cursor-pointer text-[#111418] dark:text-white">close</span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center pt-6 pb-2 px-4">
        <div className="w-full max-w-[320px] aspect-square rounded-full bg-primary/5 dark:bg-primary/10 flex items-center justify-center p-8 mb-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-70"></div>
          <div 
            className="w-full h-full bg-center bg-contain bg-no-repeat z-10" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA9CsHpA_UFUtE3ukX8Ztu3ga_Tj04m49LjtpL1pQvsLcrvjHoMFXHLJNg0cL-5TPjR_WajgxUI9GGtloFFulJjPdt8oQFHbUuUX7_0X0pGaCFyxRrFy7mj88OYTMuw3JGjGCed2660knaIozNA3CK6mX7SJl9QQ5G1f8nOX_y_2VlV-tIq8Gon5IYFpKFOwznclwKLOI0xzpxdhrXjeNhXyEMeqVvk2yCoNFByEmW4V9cWr5vZjd62dyMNx93k4DoQmPBRN8VmF0pR")' }}
          ></div>
        </div>
      </div>

      <div className="flex flex-col items-center text-center px-6">
        <h1 className="text-[#111418] dark:text-white tracking-light text-[32px] font-bold leading-tight pb-3">Harika İş Çıkardın!</h1>
        <p className="text-[#111418] dark:text-gray-300 text-base font-normal leading-normal max-w-xs">Matematik becerilerin her geçen gün gelişiyor. Aynen böyle devam et!</p>
      </div>

      <div className="p-4 w-full max-w-md mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center justify-center gap-2 rounded-xl p-4 bg-white dark:bg-[#1e2732] shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="p-2 rounded-full bg-primary/10 text-primary">
              <span className="material-symbols-outlined text-[28px]">emoji_events</span>
            </div>
            <div className="text-center">
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">Toplam Puan</p>
              <p className="text-[#111418] dark:text-white tracking-light text-2xl font-bold leading-tight">{stats.score}</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 rounded-xl p-4 bg-white dark:bg-[#1e2732] shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="p-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-500">
              <span className="material-symbols-outlined text-[28px]">timer</span>
            </div>
            <div className="text-center">
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">Süre</p>
              <p className="text-[#111418] dark:text-white tracking-light text-2xl font-bold leading-tight">{stats.totalTime}</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 rounded-xl p-4 bg-white dark:bg-[#1e2732] shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="p-2 rounded-full bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400">
              <span className="material-symbols-outlined text-[28px]">check_circle</span>
            </div>
            <div className="text-center">
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">Doğru</p>
              <p className="text-[#111418] dark:text-white tracking-light text-2xl font-bold leading-tight">{stats.correct}</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 rounded-xl p-4 bg-white dark:bg-[#1e2732] shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="p-2 rounded-full bg-red-50 dark:bg-red-900/30 text-red-500 dark:text-red-400">
              <span className="material-symbols-outlined text-[28px]">cancel</span>
            </div>
            <div className="text-center">
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">Yanlış</p>
              <p className="text-[#111418] dark:text-white tracking-light text-2xl font-bold leading-tight">{stats.wrong}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1"></div>

      <div className="p-4 pb-8 flex flex-col gap-3 w-full max-w-md mx-auto mt-4">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center justify-center w-full gap-2 rounded-xl bg-primary px-5 py-4 text-white font-bold text-lg shadow-lg shadow-blue-500/30 active:scale-[0.98] transition-transform"
        >
          <span className="material-symbols-outlined">replay</span>
          <span>Yeni Quiz Başlat</span>
        </button>
        <button 
          onClick={() => navigate('/')}
          className="flex items-center justify-center w-full gap-2 rounded-xl bg-gray-100 dark:bg-gray-800 px-5 py-4 text-[#111418] dark:text-white font-bold text-lg hover:bg-gray-200 dark:hover:bg-gray-700 active:scale-[0.98] transition-colors"
        >
          <span className="material-symbols-outlined">home</span>
          <span>Ana Menüye Dön</span>
        </button>
      </div>
    </div>
  );
};

export default Result;