"use client";
import { useEffect, useState, useRef } from 'react';
import { FaAtom, FaUserCircle } from 'react-icons/fa';
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
  const menuRef = useRef<HTMLDivElement>(null);
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
