export const ContactInfo = () => {
  return (
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
  );
};
