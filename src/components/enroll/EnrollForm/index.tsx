"use client";

import { useState } from 'react';
import { createPortal } from 'react-dom';
import { FormData, EnrollFormProps } from './types';

export const EnrollForm = ({ onClose, isOpen }: EnrollFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    type: 'individual',
    name: '',
    school: '',
    phone: '',
    period: '',
    accommodation: true,
    gender: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'number') {
      setFormData(prev => ({
        ...prev,
        [name]: parseInt(value) || ''
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 在这里处理表单提交
    console.log(formData);
    onClose();
  };

  if (!isOpen) return null;

  const modalContent = (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">
      <div className="bg-white rounded-2xl w-full max-w-md mx-4 max-h-[90vh] flex flex-col">
        {/* 固定的Header */}
        <div className="sticky top-0 bg-white px-8 py-6 rounded-t-2xl border-b flex justify-between items-center">
          <h2 className="text-2xl font-semibold">报名表单</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* 可滚动的内容区域 */}
        <div className="overflow-y-auto p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 报名类型 */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">报名类型</label>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, type: 'individual' }))}
                  className={`px-6 py-2 rounded-lg ${formData.type === 'individual' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
                >
                  个人报名
                </button>
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, type: 'team' }))}
                  className={`px-6 py-2 rounded-lg ${formData.type === 'team' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
                >
                  团队报名
                </button>
              </div>
            </div>

            {/* 姓名/团队人数 */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">
                {formData.type === 'individual' ? '姓名' : '团队人数'}
              </label>
              <input
                type={formData.type === 'individual' ? 'text' : 'number'}
                name={formData.type === 'individual' ? 'name' : 'teamSize'}
                value={formData.type === 'individual' ? formData.name : formData.teamSize || ''}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300"
                placeholder={formData.type === 'individual' ? '请输入姓名' : '请输入人数'}
                required
              />
            </div>

            {/* 学校 */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">学校</label>
              <input
                type="text"
                name="school"
                value={formData.school}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300"
                placeholder="请输入学校名称"
                required
              />
            </div>

            {/* 期次选择 */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">培训期次</label>
              <select
                name="period"
                value={formData.period}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300"
                required
              >
                <option value="">请选择期次</option>
                <option value="1">第一期（7.13 - 7.22）</option>
                <option value="2">第二期（8.03 - 8.12）</option>
              </select>
            </div>

            {/* 联系电话 */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">联系电话</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300"
                placeholder="请输入联系电话"
                required
              />
            </div>

            {/* 食宿选择 */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">食宿安排</label>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, accommodation: true }))}
                  className={`px-6 py-2 rounded-lg ${formData.accommodation ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
                >
                  需要安排
                </button>
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, accommodation: false }))}
                  className={`px-6 py-2 rounded-lg ${!formData.accommodation ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
                >
                  自行安排
                </button>
              </div>
            </div>

            {/* 性别（仅在需要安排食宿时显示） */}
            {formData.accommodation && formData.type === 'individual' && (
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">性别</label>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, gender: 'male' }))}
                    className={`px-6 py-2 rounded-lg ${formData.gender === 'male' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
                  >
                    男
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, gender: 'female' }))}
                    className={`px-6 py-2 rounded-lg ${formData.gender === 'female' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
                  >
                    女
                  </button>
                </div>
              </div>
            )}

            {/* 提交按钮 */}
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
            >
              提交报名
            </button>

            {/* 赠品信息 */}
            <div className="text-center space-y-1 text-gray-500">
              <p>报名即可获得：</p>
              <p>- 最新款 CASIO 991CN CW 一台（可定制颜色）</p>
              <p>- 文创定制衬衫一件</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  if (typeof document !== 'undefined') {
    return createPortal(modalContent, document.body);
  }

  return null;
};
