import React from 'react';

export default function AboutPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">关于我们</h1>
        
        <div className="space-y-8">
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">我们的使命</h2>
            <p className="text-gray-600 leading-relaxed">
              我们致力于为学生提供高质量的教育资源和学习体验。通过创新的教学方法和个性化的学习计划，
              帮助每一位学生发掘潜能，实现自己的教育目标。
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">我们的优势</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-600">
              <li>专业的教师团队</li>
              <li>个性化的学习计划</li>
              <li>灵活的课程安排</li>
              <li>先进的教学设施</li>
              <li>丰富的课外活动</li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">联系我们</h2>
            <div className="text-gray-600 space-y-2">
              <p>📍 地址：上海虹桥区质子物理工作室</p>
              <p>📞 电话：(123) 456-7890</p>
              <p>📧 邮箱：info@eduproton.me</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
