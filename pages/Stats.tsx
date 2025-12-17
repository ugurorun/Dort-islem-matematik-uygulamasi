import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts';

const Stats: React.FC = () => {
  const navigate = useNavigate();
  const data = [
    { name: 'Pzt', val: 40 },
    { name: 'Sal', val: 65 },
    { name: 'Çar', val: 30 },
    { name: 'Per', val: 85 },
    { name: 'Cum', val: 50 },
    { name: 'Cmt', val: 90 },
    { name: 'Paz', val: 20 },
  ];

  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark overflow-y-auto">
        <div className="flex items-center p-4 pb-2 justify-between sticky top-0 z-10 bg-white dark:bg-[#111418] shadow-sm">
            <div onClick={() => navigate('/')} className="text-[#111418] dark:text-white flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors">
                <span className="material-symbols-outlined">arrow_back</span>
            </div>
            <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">İlerleme Durumu</h2>
            <div className="flex w-12 items-center justify-end">
                <button onClick={() => navigate('/settings')} className="flex size-12 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-transparent text-[#111418] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <span className="material-symbols-outlined">settings</span>
                </button>
            </div>
        </div>

        <div className="flex flex-col items-center gap-4 px-6 py-6">
            <div className="bg-center bg-no-repeat bg-cover rounded-full h-24 w-24 border-4 border-primary/20 shadow-lg" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBvyN2PzrSvfHlrpAzDZCHEU26HglDHMxdp2VsGtU3iYaLtZ3f5jlKvQdpzISPRQEQO3IytvBtP4sJFzXXSubEXuJRZLWeSh5YEaoNnI7OllR6cPEjKT5oL3WiT0QWgHJf4L_4ugsQNU993XO3QczVcXxI7puM-YzYjISa-jOIQ4hRw3lyWZaHvpx_USXzFrlU7Nma0YUaRErZcjj1ly_ul_tpyTqWrRFZBdkPkv3yr43T9eTn5W-FJQKi5f8g_Og4tHVSdLxAKZNme")'}}></div>
            <div className="flex flex-col items-center justify-center">
                <p className="text-[#111418] dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em] text-center">Merhaba, Ali! 👋</p>
                <div className="mt-2 flex items-center gap-3 bg-primary/10 px-4 py-2 rounded-full">
                    <span className="text-primary text-sm font-bold">Toplam Puan: 1250 🌟</span>
                    <span className="w-1 h-1 rounded-full bg-primary/40"></span>
                    <span className="text-[#617589] dark:text-gray-400 text-sm font-medium">4. Sınıf</span>
                </div>
            </div>
        </div>

        <div className="px-4 pb-2">
            <div className="flex flex-col gap-2 rounded-xl bg-white dark:bg-[#1a2632] p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-[#e5e7eb] dark:border-gray-800">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-[#111418] dark:text-white text-lg font-bold leading-tight">Haftalık Başarın</h3>
                    <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">trending_up</span> +12%
                    </div>
                </div>
                <div className="h-40 w-full pt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                      <Bar dataKey="val" radius={[4, 4, 0, 0]}>
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.name === 'Cmt' ? '#2b8cee' : '#bfdbfe'} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                  <div className="flex justify-between px-2 mt-1">
                    {data.map(d => <span key={d.name} className="text-xs font-medium text-[#617589] dark:text-gray-400">{d.name}</span>)}
                  </div>
                </div>
            </div>
        </div>

        <h3 className="text-[#111418] dark:text-white text-lg font-bold leading-tight px-5 pb-3 pt-6">Ders Performansı</h3>
        <div className="grid grid-cols-2 gap-4 px-4 pb-4">
            {/* Cards */}
            <div className="flex flex-col items-center justify-between gap-3 p-4 rounded-xl bg-white dark:bg-[#1a2632] border border-[#e5e7eb] dark:border-gray-800 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow">
                <div className="flex w-full justify-between items-start">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400">
                        <span className="material-symbols-outlined">add</span>
                    </div>
                    <span className="text-xs font-bold text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded-full">Çok İyi</span>
                </div>
                <div className="relative size-20">
                    <svg className="size-full rotate-[-90deg]" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                        <circle className="stroke-current text-gray-200 dark:text-gray-700" cx="18" cy="18" fill="none" r="16" strokeWidth="3"></circle>
                        <circle className="stroke-current text-blue-500" cx="18" cy="18" fill="none" r="16" strokeDasharray="100" strokeDashoffset="15" strokeLinecap="round" strokeWidth="3"></circle>
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <span className="text-sm font-bold text-[#111418] dark:text-white">%85</span>
                    </div>
                </div>
                <p className="text-sm font-medium text-[#111418] dark:text-white">Toplama</p>
            </div>
             {/* Subtraction Card */}
            <div className="flex flex-col items-center justify-between gap-3 p-4 rounded-xl bg-white dark:bg-[#1a2632] border border-[#e5e7eb] dark:border-gray-800 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow">
                <div className="flex w-full justify-between items-start">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-400">
                        <span className="material-symbols-outlined">remove</span>
                    </div>
                    <span className="text-xs font-bold text-orange-600 bg-orange-100 dark:bg-orange-900/30 dark:text-orange-400 px-2 py-1 rounded-full">Gelişmeli</span>
                </div>
                <div className="relative size-20">
                    <svg className="size-full rotate-[-90deg]" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                        <circle className="stroke-current text-gray-200 dark:text-gray-700" cx="18" cy="18" fill="none" r="16" strokeWidth="3"></circle>
                        <circle className="stroke-current text-orange-500" cx="18" cy="18" fill="none" r="16" strokeDasharray="100" strokeDashoffset="30" strokeLinecap="round" strokeWidth="3"></circle>
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <span className="text-sm font-bold text-[#111418] dark:text-white">%70</span>
                    </div>
                </div>
                <p className="text-sm font-medium text-[#111418] dark:text-white">Çıkarma</p>
            </div>
        </div>

        <div className="px-4 pt-2 pb-24">
            <h3 className="text-[#111418] dark:text-white text-lg font-bold leading-tight px-1 pb-3 pt-2">Son Quizlerin</h3>
            <div className="flex flex-col gap-3">
                 <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-[#1a2632] border border-[#f0f2f4] dark:border-gray-800">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                            <span className="material-symbols-outlined">add</span>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-[#111418] dark:text-white">Toplama Pratiği</p>
                            <p className="text-xs text-[#617589] dark:text-gray-400">Bugün, 14:30</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-sm font-bold text-green-600 dark:text-green-400">10/10</span>
                        <div className="flex text-yellow-400 text-[10px]">
                            <span className="material-symbols-outlined text-[14px]">star</span>
                            <span className="material-symbols-outlined text-[14px]">star</span>
                            <span className="material-symbols-outlined text-[14px]">star</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Stats;