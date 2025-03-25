import Link from "next/link";
import { FaGraduationCap, FaChalkboardTeacher, FaMicroscope } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            质子物理工作室
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            梦开始的地方
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            在这里，我们将带领你探索物理的奥秘，激发对科学的热爱，点燃求知的火花
          </p>
          <Link 
            href="/enroll" 
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors inline-block"
          >
            立即报名
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">我们的优势</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-12 h-12 text-blue-600 mx-auto mb-4">
                <FaChalkboardTeacher size={48} />
              </div>
              <h3 className="text-xl font-bold mb-4">专业师资</h3>
              <p className="text-gray-600">
                由经验丰富的物理教育专家组成的教师团队，确保每位学员都能得到最优质的指导
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-12 h-12 text-blue-600 mx-auto mb-4">
                <FaMicroscope size={48} />
              </div>
              <h3 className="text-xl font-bold mb-4">实践教学</h3>
              <p className="text-gray-600">
                通过实验和实践活动，让物理知识变得生动有趣，加深对概念的理解
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-12 h-12 text-blue-600 mx-auto mb-4">
                <FaGraduationCap size={48} />
              </div>
              <h3 className="text-xl font-bold mb-4">个性化辅导</h3>
              <p className="text-gray-600">
                根据学员的个人特点和学习需求，制定个性化的学习计划和辅导方案
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">关于我们</h2>
            <div className="bg-white rounded-lg shadow-md p-6 mt-8">
              <p className="text-gray-600 mb-4">
                质子物理工作室成立于2020年，是一家专注于物理教育的培训机构。我们的使命是通过创新的教学方法和个性化的辅导，帮助学生掌握物理知识，培养科学思维能力。
              </p>
              <p className="text-gray-600 mb-4">
                我们的团队由多位物理学博士和资深教师组成，他们不仅具备扎实的专业知识，还拥有丰富的教学经验。我们相信，每个学生都有自己的学习方式和节奏，因此我们提供个性化的学习计划，帮助学生找到最适合自己的学习方法。
              </p>
              <p className="text-gray-600">
                在质子物理工作室，我们不仅注重知识的传授，更重视培养学生的科学兴趣和探究精神。通过实验教学、科学讨论和研究性学习，我们帮助学生建立物理直觉，形成科学思维方式。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">精彩瞬间</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* 视频展示区 */}
            <div className="bg-white rounded-lg shadow-md p-6 aspect-video relative">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <p className="text-gray-500">视频展示区</p>
              </div>
            </div>
            {/* 图片展示区 */}
            <div className="bg-white rounded-lg shadow-md p-6 aspect-video relative">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <p className="text-gray-500">图片展示区</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
