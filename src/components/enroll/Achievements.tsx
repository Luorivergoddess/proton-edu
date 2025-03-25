import { achievementsData } from '@/data/achievementsData';

export const Achievements = () => {
  return (
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
  );
};
