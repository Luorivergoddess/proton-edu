"use client";

import { useState } from 'react';

interface FormData {
  type: 'individual' | 'team';
  name: string;
  teamSize?: number;
  school: string;
  phone: string;
  period: '1' | '2' | '';
  accommodation: boolean;
  gender?: 'male' | 'female' | '';
}

export default function EnrollPage() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    type: 'individual',
    name: '',
    school: '',
    phone: '',
    period: '',
    accommodation: true,
    gender: ''
  });

  const scheduleData = [
    { time: "8:30 - 11:30", activity: "考试" },
    { time: "11:30 - 2:00", activity: "午餐+休息" }, 
    { time: "2:00 - 5:00", activity: "试卷讲评" },
    { time: "5:00 - 6:30", activity: "晚餐" },
    { time: "6:30 - 9:30", activity: "实验考试/自修/助教答疑/分享" }
  ];

  const achievementsData = [
    { award: "集训队", count: "10" },
    { award: "金牌", count: "104" },
    { award: "银牌", count: "136" },
    { award: "清北", count: "267" }
  ];

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
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        {/* 课程标题 */}
        <h1 className="text-3xl font-bold text-gray-900 text-center">
          全国中学生物理竞赛暑期复赛刷题班
        </h1>

        {/* 基本信息 */}
        <section className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
          <h2 className="text-2xl font-semibold border-b pb-2">课程信息</h2>
          
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <svg className="h-6 w-6 text-blue-500 shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span className="text-lg">地点：上海</span>
            </div>

            <div className="flex space-x-3">
              <svg className="h-6 w-6 text-blue-500 shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <div className="flex flex-col">
                <div className="text-lg">时间：</div>
                <div className="text-lg ml-0">第一期：7.13 - 7.22</div>
                <div className="text-lg ml-0">第二期：8.03 - 8.12</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <svg className="h-6 w-6 text-blue-500 shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">费用：6,000元</span>
            </div>
          </div>
        </section>

        {/* 教师团队 */}
        <section className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
          <h2 className="text-2xl font-semibold border-b pb-2">教师团队</h2>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-medium">主讲教师</h3>
              <p className="ml-4 text-gray-700">
                李教授
                <br />
                <span className="text-sm">
                  曾任加拿大 Garriton 大学物理系教授，回国后从教中学物理竞赛至今，
                  经验丰富，已培养出多位集训队成员
                </span>
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-medium">助教团队</h3>
              <p className="ml-4 text-gray-700">周予涵, 冯睿（金牌获得者）</p>
            </div>
          </div>
        </section>

        {/* 日程安排 */}
        <section className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
          <h2 className="text-2xl font-semibold border-b pb-2">日程安排</h2>
          
          <div className="space-y-4">
            {scheduleData.map((item, index) => (
              <div key={index} className="flex flex-col p-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-blue-600">{item.time}</span>
                <span className="text-gray-700">{item.activity}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 历年成绩 */}
        <section className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
          <h2 className="text-2xl font-semibold border-b pb-2">历年成绩</h2>
          
          <div className="space-y-4">
            {achievementsData.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-700">{item.award}</span>
                <span className="text-2xl font-bold text-blue-600">{item.count}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 招生区域及联系方式 */}
        <section className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
          <h2 className="text-2xl font-semibold border-b pb-2">招生区域及联系方式</h2>
          
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-medium">东部地区</h3>
              <p className="text-gray-600">浙江, 江苏, 上海, 福建，广东, 湖南, 湖北, 安徽, 海南, 江西</p>
              <p className="font-medium">联系人：孟老师 15958500158</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-medium">北部地区</h3>
              <p className="text-gray-600">陕西, 山西, 天津, 山东, 山东, 河北，河南, 内蒙古</p>
              <p className="font-medium">联系人：赵老师 13675761865</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-medium">西北、西南地区</h3>
              <p className="text-gray-600">黑龙江, 辽宁, 吉林, 新疆, 西藏, 重庆, 四川, 青海, 甘肃，宁夏，广西, 云南, 贵州</p>
              <p className="font-medium">联系人：蒋老师 18858522108</p>
            </div>

            <div className="text-sm text-gray-500 italic">
              注：海外、港澳台暂不开放招生
            </div>
          </div>
        </section>

        {/* 报名按钮 */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:bg-blue-700 transition-colors"
          >
            立即报名
          </button>
        </div>

        {/* 报名表单弹窗 */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative max-h-[90vh] overflow-y-auto">
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>

              <h2 className="text-2xl font-semibold mb-6">报名表单</h2>
              
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
        )}
      </div>
    </div>
  );
}
