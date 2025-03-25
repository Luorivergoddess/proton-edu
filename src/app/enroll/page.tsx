"use client";

import { useState } from 'react';
import { CourseInfo } from '@/components/enroll/CourseInfo';
import { TeacherTeam } from '@/components/enroll/TeacherTeam';
import { Schedule } from '@/components/enroll/Schedule';
import { Achievements } from '@/components/enroll/Achievements';
import { ContactInfo } from '@/components/enroll/ContactInfo';
import { EnrollForm } from '@/components/enroll/EnrollForm';

export default function EnrollPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 pb-32 space-y-8">
        {/* 课程标题 */}
        <h1 className="text-3xl font-bold text-gray-900 text-center">
          全国中学生物理竞赛暑期复赛刷题班
        </h1>

        {/* 各个部分组件 */}
        <CourseInfo />
        <TeacherTeam />
        <Schedule />
        <Achievements />
        <ContactInfo />

        {/* 报名按钮 */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:bg-blue-700 transition-colors"
          >
            立即报名
          </button>
        </div>

        {/* 表单组件 */}
        <EnrollForm
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        />
      </div>
    </div>
  );
}
