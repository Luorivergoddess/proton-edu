"use client";
import { useEffect, useState, useRef } from 'react';
import { FaAtom, FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface User {
  username: string;
  email: string;
  isLoggedIn: boolean;
}

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const checkUserStatus = () => {
    const user = localStorage.getItem('currentUser');
    if (user) {
      setCurrentUser(JSON.parse(user));
    } else {
      setCurrentUser(null);
    }
  };

  useEffect(() => {
    checkUserStatus();
    
    const interval = setInterval(checkUserStatus, 500);

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
      
      // 点击外部时关闭移动菜单
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) && 
          (event.target as HTMLElement).id !== 'mobile-menu-button') {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('storage', checkUserStatus);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('storage', checkUserStatus);
      clearInterval(interval);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    setIsMenuOpen(false);
    setIsMobileMenuOpen(false); // 登出时关闭移动菜单
    router.push('/');
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-blue-600 animate-spin-slow">
              <FaAtom size={32} />
            </div>
            <span className="text-xl font-bold text-gray-800">质子物理工作室</span>
          </Link>
          
          {/* 桌面导航 */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
              主页
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
              关于
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              联系我们
            </Link>
            <Link href="/enroll" className="text-gray-600 hover:text-blue-600 transition-colors">
              报名咨询
            </Link>
            <Link href="/resources" className="text-gray-600 hover:text-blue-600 transition-colors">
              资料获取
            </Link>
            {currentUser ? (
              <div className="relative" ref={menuRef}>
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center space-x-2 px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition-colors"
                >
                  <FaUserCircle size={20} />
                  <span>个人中心</span>
                </button>
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
                    <div className="px-4 py-2 text-sm text-gray-600 border-b border-gray-100">
                      {currentUser.username}
                    </div>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      退出登录
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link href="/auth/register" className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition-colors">
                  注册
                </Link>
                <Link href="/auth/login" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                  登录
                </Link>
              </div>
            )}
          </div>
          
          {/* 移动端菜单按钮 */}
          <button
            id="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
            aria-label="菜单"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      
      {/* 移动端导航菜单 */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden bg-white shadow-md transition-all duration-300 ease-in-out fixed top-16 left-0 w-full z-40 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="px-4 py-3 space-y-1">
          <Link
            href="/"
            className="block py-2 text-gray-600 hover:text-blue-600 transition-colors border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            主页
          </Link>
          <Link
            href="/about"
            className="block py-2 text-gray-600 hover:text-blue-600 transition-colors border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            关于
          </Link>
          <Link
            href="/contact"
            className="block py-2 text-gray-600 hover:text-blue-600 transition-colors border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            联系我们
          </Link>
          <Link
            href="/enroll"
            className="block py-2 text-gray-600 hover:text-blue-600 transition-colors border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            报名咨询
          </Link>
          <Link
            href="/resources"
            className="block py-2 text-gray-600 hover:text-blue-600 transition-colors border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            资料获取
          </Link>
          
          {/* 移动端的登录/注册或用户信息 */}
          <div className="py-4">
            {currentUser ? (
              <div className="space-y-2">
                <div className="px-2 py-1 text-sm text-gray-600 border-b border-gray-100">
                  已登录为：{currentUser.username}
                </div>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-2 py-2 text-gray-800 hover:bg-gray-100 rounded"
                >
                  退出登录
                </button>
              </div>
            ) : (
              <div className="flex flex-col space-y-2">
                <Link
                  href="/auth/register"
                  className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition-colors text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  注册
                </Link>
                <Link
                  href="/auth/login"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  登录
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
