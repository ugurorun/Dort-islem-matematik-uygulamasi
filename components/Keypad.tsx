import React from 'react';

interface KeypadProps {
  onKeyPress: (key: string) => void;
  onDelete: () => void;
  onClear: () => void;
  onConfirm: () => void;
}

const Keypad: React.FC<KeypadProps> = ({ onKeyPress, onDelete, onClear, onConfirm }) => {
  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  return (
    <div className="bg-gray-50 dark:bg-[#0B1219] rounded-t-[32px] p-6 pb-8 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] border-t border-white/50 dark:border-gray-800">
      <div className="grid grid-cols-3 gap-3 max-w-[340px] mx-auto mb-6">
        {keys.map((key) => (
          <button
            key={key}
            onClick={() => onKeyPress(key)}
            className="key-btn h-14 w-full rounded-2xl bg-white dark:bg-gray-800 text-[#111418] dark:text-white text-2xl font-bold shadow-key dark:shadow-key-dark border border-gray-100 dark:border-gray-700 transition-transform active:scale-95"
          >
            {key}
          </button>
        ))}
        {/* Row 4 */}
        <button
          onClick={onDelete}
          className="key-btn h-14 w-full rounded-2xl bg-red-50 dark:bg-red-900/20 text-red-500 text-xl font-bold shadow-key dark:shadow-key-dark border border-red-100 dark:border-red-900/30 transition-transform flex items-center justify-center group active:scale-95"
        >
          <span className="material-symbols-outlined">backspace</span>
        </button>
        <button
          onClick={() => onKeyPress('0')}
          className="key-btn h-14 w-full rounded-2xl bg-white dark:bg-gray-800 text-[#111418] dark:text-white text-2xl font-bold shadow-key dark:shadow-key-dark border border-gray-100 dark:border-gray-700 transition-transform active:scale-95"
        >
          0
        </button>
        <button
          onClick={onClear}
          className="key-btn h-14 w-full rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-primary text-xl font-bold shadow-key dark:shadow-key-dark border border-blue-100 dark:border-blue-900/30 transition-transform flex items-center justify-center group active:scale-95"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
      {/* Action Button */}
      <button
        onClick={onConfirm}
        className="w-full h-16 rounded-2xl bg-primary hover:bg-primary-dark active:bg-primary-dark text-white font-bold text-xl tracking-wide shadow-lg shadow-blue-500/25 dark:shadow-blue-900/20 transition-all transform active:scale-[0.98] flex items-center justify-center gap-3"
      >
        <span>KONTROL ET</span>
        <span className="material-symbols-outlined">check_circle</span>
      </button>
    </div>
  );
};

export default Keypad;