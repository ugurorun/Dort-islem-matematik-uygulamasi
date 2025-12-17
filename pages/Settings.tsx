import React from 'react';
import { useNavigate } from 'react-router-dom';

const Settings: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-full w-full flex-col overflow-x-hidden pb-10 bg-background-light dark:bg-background-dark">
      {/* Header */}
      <div className="flex items-center bg-white dark:bg-[#1A2633] p-4 sticky top-0 z-10 shadow-sm">
        <div onClick={() => navigate('/')} className="text-[#111418] dark:text-white flex size-10 shrink-0 items-center justify-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </div>
        <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">Ayarlar</h2>
      </div>

      {/* Profile Section */}
      <div className="p-4">
        <div className="flex w-full flex-col gap-4 rounded-xl bg-white dark:bg-[#1A2633] p-4 shadow-sm border border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-4">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-16 w-16 border-2 border-primary" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAFz-L382mlnh9FxDi38DM9IEUqp9TOdCFdC7BLYZ7HAPmkV-Yg9zA7W2XAJTFL0wTqmjJIhmNV9PmAGHwysAxB_a1sdSAbamBneRRJRq6rtg_Nq7euHpa7P4Ur-U1XHwM74IfRKUZV_FRR6--YufpgOXIADqXBqHrRSKoiRpQN2HcJ0_6ume3PVGMz_kmuVZNyXqNLder2jnm2XkQdtusCaiTnCT5p3ajRANK7gQRJd_R7FFaWpL-wT5-yTg5YPBP5dUxhIa-yzESP")'}}></div>
            <div className="flex flex-col justify-center flex-1">
              <p className="text-[#111418] dark:text-white text-xl font-bold leading-tight">Can Yıldız</p>
              <p className="text-[#617589] dark:text-gray-400 text-sm font-normal">3. Sınıf • 1250 Puan</p>
            </div>
            <button className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 hover:bg-primary/20 text-primary">
              <span className="material-symbols-outlined text-[20px]">edit</span>
            </button>
          </div>
        </div>
      </div>

      {/* Game Settings */}
      <div className="px-4 pt-2">
        <h3 className="text-[#111418] dark:text-white text-lg font-bold leading-tight px-2 pb-3">Oyun Ayarları</h3>
        <div className="flex h-14 w-full items-center justify-center rounded-2xl bg-white dark:bg-[#1A2633] p-1.5 shadow-sm border border-gray-100 dark:border-gray-800">
           <label className="flex cursor-pointer h-full grow items-center justify-center rounded-xl px-2 has-[:checked]:bg-primary has-[:checked]:text-white has-[:checked]:shadow-md transition-all duration-200 text-[#617589] dark:text-gray-400 font-bold group">
                <span className="material-symbols-outlined text-[20px] mr-2 group-has-[:checked]:text-white text-primary/60">star</span>
                <span className="truncate">Kolay</span>
                <input className="hidden" name="difficulty" type="radio" value="Kolay" />
            </label>
            <label className="flex cursor-pointer h-full grow items-center justify-center rounded-xl px-2 has-[:checked]:bg-primary has-[:checked]:text-white has-[:checked]:shadow-md transition-all duration-200 text-[#617589] dark:text-gray-400 font-bold group">
                <span className="material-symbols-outlined text-[20px] mr-2 group-has-[:checked]:text-white text-primary/60">hotel_class</span>
                <span className="truncate">Orta</span>
                <input className="hidden" name="difficulty" defaultChecked type="radio" value="Orta"/>
            </label>
            <label className="flex cursor-pointer h-full grow items-center justify-center rounded-xl px-2 has-[:checked]:bg-primary has-[:checked]:text-white has-[:checked]:shadow-md transition-all duration-200 text-[#617589] dark:text-gray-400 font-bold group">
                <span className="material-symbols-outlined text-[20px] mr-2 group-has-[:checked]:text-white text-primary/60">workspace_premium</span>
                <span className="truncate">Zor</span>
                <input className="hidden" name="difficulty" type="radio" value="Zor"/>
            </label>
        </div>
      </div>

      {/* Audio & Notifications */}
      <div className="px-4 pt-6">
        <h3 className="text-[#111418] dark:text-white text-lg font-bold leading-tight px-2 pb-3">Ses ve Bildirimler</h3>
        <div className="flex flex-col gap-0 rounded-2xl bg-white dark:bg-[#1A2633] overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
            {/* Music */}
            <div className="flex items-center gap-4 px-4 py-4 justify-between border-b border-[#f0f2f4] dark:border-[#2a3845] last:border-0 hover:bg-gray-50 dark:hover:bg-[#233040] transition-colors">
                <div className="flex items-center gap-4">
                    <div className="text-primary bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center rounded-xl shrink-0 size-12">
                        <span className="material-symbols-outlined text-[24px]">music_note</span>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[#111418] dark:text-white text-base font-semibold">Müzik</p>
                        <p className="text-gray-500 dark:text-gray-400 text-xs font-normal">Arkaplan müziğini aç/kapat</p>
                    </div>
                </div>
                 <label className="relative flex h-[32px] w-[52px] cursor-pointer items-center rounded-full bg-[#e5e7eb] dark:bg-[#324050] p-1 has-[:checked]:justify-end has-[:checked]:bg-primary transition-all duration-300">
                    <div className="h-[24px] w-[24px] rounded-full bg-white shadow-md transform transition-transform"></div>
                    <input defaultChecked className="hidden" type="checkbox"/>
                </label>
            </div>
             {/* SFX */}
             <div className="flex items-center gap-4 px-4 py-4 justify-between border-b border-[#f0f2f4] dark:border-[#2a3845] last:border-0 hover:bg-gray-50 dark:hover:bg-[#233040] transition-colors">
                <div className="flex items-center gap-4">
                    <div className="text-primary bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center rounded-xl shrink-0 size-12">
                        <span className="material-symbols-outlined text-[24px]">volume_up</span>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[#111418] dark:text-white text-base font-semibold">Ses Efektleri</p>
                        <p className="text-gray-500 dark:text-gray-400 text-xs font-normal">Tıklama sesleri</p>
                    </div>
                </div>
                 <label className="relative flex h-[32px] w-[52px] cursor-pointer items-center rounded-full bg-[#e5e7eb] dark:bg-[#324050] p-1 has-[:checked]:justify-end has-[:checked]:bg-primary transition-all duration-300">
                    <div className="h-[24px] w-[24px] rounded-full bg-white shadow-md transform transition-transform"></div>
                    <input defaultChecked className="hidden" type="checkbox"/>
                </label>
            </div>
        </div>
      </div>

       {/* General */}
       <div className="px-4 pt-6 pb-8">
            <h3 className="text-[#111418] dark:text-white text-lg font-bold leading-tight px-2 pb-3">Genel</h3>
            <div className="flex flex-col gap-0 rounded-2xl bg-white dark:bg-[#1A2633] overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
                <div onClick={() => navigate('/about')} className="flex items-center gap-4 px-4 py-4 justify-between border-b border-[#f0f2f4] dark:border-[#2a3845] cursor-pointer hover:bg-gray-50 dark:hover:bg-[#233040]">
                    <div className="flex items-center gap-4">
                        <div className="text-gray-500 bg-gray-100 dark:bg-gray-700 dark:text-gray-300 flex items-center justify-center rounded-xl shrink-0 size-12">
                            <span className="material-symbols-outlined text-[24px]">info</span>
                        </div>
                        <p className="text-[#111418] dark:text-white text-base font-semibold">Hakkımızda</p>
                    </div>
                    <div className="text-gray-400">
                        <span className="material-symbols-outlined text-[24px]">chevron_right</span>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col items-center justify-center mt-8 gap-2 opacity-50">
                <div className="size-10 rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <span className="material-symbols-outlined text-gray-400 text-[24px]">calculate</span>
                </div>
                <p className="text-center text-gray-400 text-xs font-medium">Matematik Quiz v1.0.2</p>
            </div>
        </div>
    </div>
  );
};

export default Settings;