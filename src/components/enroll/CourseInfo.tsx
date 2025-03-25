export const CourseInfo = () => {
  return (
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
  );
};
