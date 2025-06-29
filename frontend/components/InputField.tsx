'use client';

import { ReactNode } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface InputFieldProps {
  label: string;
  icon: ReactNode;
  type: string;
  placeholder: string;
  value: string;
  error?: string;
  disabled?: boolean;
  isDark: boolean;
  onChange: (value: string) => void;
  showToggle?: boolean;
  toggleValue?: boolean;
  onToggle?: () => void;
}

export default function InputField({
  label,
  icon,
  type,
  placeholder,
  value,
  error = '',
  disabled = false,
  isDark,
  onChange,
  showToggle = false,
  toggleValue = false,
  onToggle
}: InputFieldProps) {
  return (
    <div className="space-y-2">
      <label className={`flex items-center text-sm font-medium ${
        isDark ? 'text-gray-500' : 'text-gray-700'
      }`}>
        {icon}
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          disabled={disabled}
          className={`w-full px-4 py-3 pr-12 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 disabled:opacity-50 disabled:cursor-not-allowed ${
            error
              ? 'border-red-300 focus:border-red-500 text-gray-800 placeholder-gray-400'
              : isDark
                ? 'border-gray-600 focus:border-blue-500 bg-gray-700 text-white placeholder-gray-400'
                : 'border-gray-200 focus:border-blue-500 bg-white text-gray-800 placeholder-gray-400'
          }`}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        {showToggle && onToggle && (
          <button
            type="button"
            disabled={disabled}
            onClick={onToggle}
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 transition-colors disabled:opacity-50 ${
              isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {toggleValue ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        )}
      </div>
      {error && (
        <p className="text-red-500 text-sm flex items-center">
          <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-2"></span>
          {error}
        </p>
      )}
    </div>
  );
}
