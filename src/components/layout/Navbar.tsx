"use client";
import { useEffect, useState, useRef } from 'react';
import { FaAtom, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import Avatar from '@/components/common/Avatar';

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
  const pathname = usePathname();

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
    setIsMobileMenuOpen(false);
    router.push('/');
  };

  const isActive = (path: string) => pathname === path;

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
            <Link 
              href="/" 
              className={`text-gray-600 hover:text-blue-600 transition-colors ${isActive('/') ? 'text-blue-600' : ''}`}
            >
              主页
            </Link>
            <Link 
              href="/about" 
              className={`text-gray-600 hover:text-blue-600 transition-colors ${isActive('/about') ? 'text-blue-600' : ''}`}
            >
              关于
            </Link>
            <Link 
              href="/contact" 
              className={`text-gray-600 hover:text-blue-600 transition-colors ${isActive('/contact') ? 'text-blue-600' : ''}`}
            >
              联系我们
            </Link>
            <Link 
              href="/enroll" 
              className={`text-gray-600 hover:text-blue-600 transition-colors ${isActive('/enroll') ? 'text-blue-600' : ''}`}
            >
              报名咨询
            </Link>
            <Link 
              href="/resources" 
              className={`text-gray-600 hover:text-blue-600 transition-colors ${isActive('/resources') ? 'text-blue-600' : ''}`}
            >
              资料获取
            </Link>
            {currentUser ? (
              <div className="relative" ref={menuRef}>
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`flex items-center space-x-3 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors ${
                    isActive('/profile') ? 'bg-gray-100' : ''
                  }`}
                >
                  <Avatar username={currentUser.username} size="sm" />
                  <span className="text-gray-700">{currentUser.username}</span>
                </button>
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      个人中心
                    </Link>
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
                <Link 
                  href="/auth/register" 
                  className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition-colors"
                >
                  注册
                </Link>
                <Link 
                  href="/auth/login" 
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
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
            className={`block py-2 transition-colors ${
              isActive('/') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
            } border-b border-gray-100`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            主页
          </Link>
          <Link
            href="/about"
            className={`block py-2 transition-colors ${
              isActive('/about') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
            } border-b border-gray-100`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            关于
          </Link>
          <Link
            href="/contact"
            className={`block py-2 transition-colors ${
              isActive('/contact') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
            } border-b border-gray-100`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            联系我们
          </Link>
          <Link
            href="/enroll"
            className={`block py-2 transition-colors ${
              isActive('/enroll') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
            } border-b border-gray-100`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            报名咨询
          </Link>
          <Link
            href="/resources"
            className={`block py-2 transition-colors ${
              isActive('/resources') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
            } border-b border-gray-100`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            资料获取
          </Link>
          
          {/* 移动端的用户信息 */}
          <div className="py-4">
            {currentUser ? (
              <div className="space-y-2">
                <div className="flex items-center space-x-3 px-2 py-2">
                  <Avatar username={currentUser.username} size="sm" />
                  <div>
                    <p className="font-medium">{currentUser.username}</p>
                    <p className="text-sm text-gray-500">{currentUser.email}</p>
                  </div>
                </div>
                <Link
                  href="/profile"
                  className={`block py-2 transition-colors px-2 rounded-lg ${
                    isActive('/profile') ? 'bg-gray-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  个人中心
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-2 py-2 text-gray-800 hover:bg-gray-100 rounded-lg"
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
