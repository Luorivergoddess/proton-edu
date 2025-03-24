const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-800">质子物理工作室</span>
          </div>
          <div className="text-gray-500 text-sm text-center space-y-1">
            <p>专注于物理竞赛培训 十余年培训经验</p>
            <p>Email: contact@proton.edu.cn</p>
            <p>Copyright © 2025 质子物理工作室. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
