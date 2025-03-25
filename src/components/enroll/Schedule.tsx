import { scheduleData } from '@/data/scheduleData';

export const Schedule = () => {
  return (
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
  );
};
