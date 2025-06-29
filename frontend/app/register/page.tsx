'use client';

import InputField from '@/components/InputField';
import { useState } from 'react';
import {
  User, Mail, Lock, Eye, EyeOff, Sun, Moon,
  Loader2, CheckCircle, XCircle, X
} from 'lucide-react';

type ToastType = 'success' | 'error';

interface ToastState {
  show: boolean;
  type: ToastType;
  message: string;
}

interface FormState {
  handle: string;
  email: string;
  password: string;
  confirm: string;
}

interface ErrorState extends FormState {}

export default function RegisterPage() {
  // --- State Hooks ---
  const [form, setForm] = useState<FormState>({
    handle: '',
    email: '',
    password: '',
    confirm: ''
  });

  const [errors, setErrors] = useState<ErrorState>({
    handle: '',
    email: '',
    password: '',
    confirm: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState<ToastState>({
    show: false,
    type: 'success',
    message: ''
  });

  // --- Helper Functions ---
  const showToast = (type: ToastType, message: string) => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast({ show: false, type: 'success', message: '' }), 4000);
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const handleSubmit = async () => {
    const newErrors: ErrorState = { handle: '', email: '', password: '', confirm: '' };

    if (!form.handle) newErrors.handle = 'Handle is required';
    if (!form.email.includes('@pwioi.com')) newErrors.email = 'Invalid email: use @pwioi.com';
    if (form.password.length < 5) newErrors.password = 'Password must be at least 5 characters';
    if (form.password !== form.confirm) newErrors.confirm = 'Passwords do not match';

    if (Object.values(newErrors).some(Boolean)) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    try {
      await new Promise(res => setTimeout(res, 2000)); // Simulate API
      showToast('success', 'Account created successfully! Redirecting to dashboard...');
      setTimeout(() => window.location.href = '/dashboard', 2000);
    } catch {
      showToast('error', 'Registration failed. Please try again.');
      setIsLoading(false);
    }
  };

  const toggleTheme = () => setIsDark(d => !d);
  const closeToast = () => setToast({ show: false, type: 'success', message: '' });

  // --- Render ---
  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 transition-all duration-500
        ${isDark
          ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900'
          : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
        }`}
    >
      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-2 duration-300">
          <div className={`flex items-center p-4 rounded-xl shadow-lg border backdrop-blur-sm max-w-sm
            ${toast.type === 'success'
              ? isDark
                ? 'bg-green-900/80 border-green-700 text-green-100'
                : 'bg-green-50/90 border-green-200 text-green-800'
              : isDark
                ? 'bg-red-900/80 border-red-700 text-red-100'
                : 'bg-red-50/90 border-red-200 text-red-800'
            }`}
          >
            <div className="flex-shrink-0 mr-3">
              {toast.type === 'success'
                ? <CheckCircle className="w-5 h-5 text-green-500" />
                : <XCircle className="w-5 h-5 text-red-500" />}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">{toast.message}</p>
            </div>
            <button
              onClick={closeToast}
              className={`flex-shrink-0 ml-3 rounded-full p-1 transition-colors
                ${toast.type === 'success'
                  ? 'hover:bg-green-200/20 text-green-400 hover:text-green-300'
                  : 'hover:bg-red-200/20 text-red-400 hover:text-red-300'
                }`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Registration Card */}
      <div className="w-full max-w-md">
        {/* Theme Toggle */}
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleTheme}
            className={`p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl
              ${isDark
                ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center">
            <img src="/logo.svg" alt="Logo" className="w-15 h-25" />
          </div>
          <p className={`mt-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Create your contest account
          </p>
        </div>

        {/* Form Card */}
        <div className={`rounded-2xl shadow-xl border p-8 transition-all duration-300
          ${isDark
            ? 'bg-gray-800/80 backdrop-blur-sm border-gray-700/20'
            : 'bg-white/80 backdrop-blur-sm border-white/20'
          }`}
        >
          <div className="space-y-6">
            {/* Handle */}
            <InputField
              label="Handle"
              icon={<User className="w-4 h-4 mr-2 text-blue-600" />}
              type="text"
              placeholder="Your unique username"
              value={form.handle}
              error={errors.handle}
              disabled={isLoading}
              onChange={v => handleChange('handle', v)}
              isDark={isDark}
            />

            {/* Email */}
            <InputField
              label="Email"
              icon={<Mail className="w-4 h-4 mr-2 text-blue-600" />}
              type="email"
              placeholder="your.email@pwioi.com"
              value={form.email}
              error={errors.email}
              disabled={isLoading}
              onChange={v => handleChange('email', v)}
              isDark={isDark}
            />

            {/* Password */}
            <InputField
              label="Password"
              icon={<Lock className="w-4 h-4 mr-2 text-blue-600" />}
              type={showPassword ? 'text' : 'password'}
              placeholder="Create a strong password"
              value={form.password}
              error={errors.password}
              disabled={isLoading}
              onChange={v => handleChange('password', v)}
              isDark={isDark}
              showToggle
              toggleValue={showPassword}
              onToggle={() => setShowPassword(s => !s)}
            />

            {/* Confirm Password */}
            <InputField
              label="Confirm Password"
              icon={<Lock className="w-4 h-4 mr-2 text-blue-600" />}
              type={showConfirm ? 'text' : 'password'}
              placeholder="Confirm your password"
              value={form.confirm}
              error={errors.confirm}
              disabled={isLoading}
              onChange={v => handleChange('confirm', v)}
              isDark={isDark}
              showToggle
              toggleValue={showConfirm}
              onToggle={() => setShowConfirm(s => !s)}
            />

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-blue-200 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center"
            >
              {isLoading
                ? (<><Loader2 className="w-5 h-5 animate-spin mr-2" />Creating Account...</>)
                : 'Create Account'
              }
            </button>
          </div>
        </div>

        {/* Terms */}
        <p className={`text-center text-xs mt-6 ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>
          By creating an account, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}
