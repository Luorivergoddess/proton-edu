export const TeacherTeam = () => {
  return (
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
  );
};
