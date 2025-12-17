import React from 'react';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col h-full w-full bg-white dark:bg-[#111418] overflow-hidden">
      <header className="sticky top-0 z-10 flex items-center justify-between bg-white/90 dark:bg-[#111418]/90 backdrop-blur-md px-4 py-3 border-b border-gray-100 dark:border-gray-800">
        <button onClick={() => navigate(-1)} className="flex items-center justify-center p-2 -ml-2 rounded-full text-primary hover:bg-primary/10 transition-colors">
          <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-bold text-[#111418] dark:text-white absolute left-1/2 -translate-x-1/2">Hakkında</h1>
        <div className="w-10"></div>
      </header>

      <main className="flex-1 flex flex-col p-4 overflow-y-auto">
        <div className="flex flex-col items-center py-8 mb-6">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-400 rounded-[1.75rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-32 h-32 rounded-[1.5rem] bg-white dark:bg-gray-800 shadow-xl overflow-hidden flex items-center justify-center">
               <div className="w-full h-full bg-primary flex items-center justify-center text-white bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB6-6fdeBOsdAvGmQYQT8Izu3u_b4RRq6jZP9EGPWLDC5tcNt-ZDVnq0uf3p2nMF_Sk_UaRfZGtWcKHb_bhcfgMFnlHQB3T7pZUZMRVnvVvw2BDuF_iDNiTPRRa9cEwW076NUkvL0ugJAs499W12bUB9UDziBnN7tKSzgjOGrhYfoO1hzRupiFWxieXmhvp7mAy8TQ7j9RkbW8d27CTH6UEQLR7oa4qyq6QaHf5fWUzQGfEnNMl_3qtzawwQJpeC9DtQzSMocuK_DDe")'}}></div>
            </div>
          </div>
          <h2 className="mt-6 text-2xl font-bold tracking-tight text-[#111418] dark:text-white">Matematik Dehası</h2>
          <span className="mt-1 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">Versiyon 1.0.2</span>
        </div>

        <div className="flex flex-col gap-0 bg-[#f0f2f4] dark:bg-gray-800/50 rounded-xl overflow-hidden mb-6">
            {/* Developer Website */}
            <button className="flex items-center gap-4 px-4 py-4 w-full text-left bg-white dark:bg-[#1a222b] hover:bg-gray-50 dark:hover:bg-[#232d38] border-b border-gray-100 dark:border-gray-700 last:border-0 transition-colors">
                <div className="flex items-center justify-center shrink-0 size-10 rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    <span className="material-symbols-outlined text-[24px]">language</span>
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-base font-medium text-[#111418] dark:text-white truncate">Geliştirici Web Sitesi</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">www.matematikdehasi.com</p>
                </div>
                <span className="material-symbols-outlined text-gray-400 dark:text-gray-500 text-[20px]">chevron_right</span>
            </button>
        </div>

        <div className="mt-auto py-6 flex flex-col items-center justify-center text-center gap-1">
            <p className="text-xs text-gray-400 dark:text-gray-600">© 2024 EduTech Studios</p>
            <p className="text-[10px] text-gray-300 dark:text-gray-700">Tüm hakları saklıdır.</p>
        </div>
      </main>
    </div>
  );
};

export default About;