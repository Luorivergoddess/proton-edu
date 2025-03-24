"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (formData.password !== formData.confirmPassword) {
      setError("密码不匹配");
      return;
    }

    // 检查用户是否已存在
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.some((user: any) => user.email === formData.email)) {
      setError("该邮箱已被注册");
      return;
    }

    // 保存用户信息
    users.push({
      username: formData.username,
      email: formData.email,
      password: formData.password,
    });
    localStorage.setItem("users", JSON.stringify(users));

    // 自动登录
    const userInfo = {
      username: formData.username,
      email: formData.email,
      isLoggedIn: true,
    };
    
    localStorage.setItem("currentUser", JSON.stringify(userInfo));
    const event = new StorageEvent('storage', {
      key: 'currentUser',
      newValue: JSON.stringify(userInfo),
      storageArea: localStorage
    });
    window.dispatchEvent(event);
    
    setSuccess(true);

    // 使用 requestAnimationFrame 确保 DOM 更新
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTimeout(() => {
          router.push('/');
          router.refresh();
        }, 1000);
      });
    });
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-center mb-6">注册账号</h2>
          {error && (
            <div className="bg-red-50 text-red-500 p-3 rounded mb-4">
              {error}
            </div>
          )}
          {success && (
            <div className="bg-green-50 text-green-600 p-3 rounded mb-4">
              注册成功！正在跳转...
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">用户名</label>
              <input
                type="text"
                required
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">邮箱</label>
              <input
                type="email"
                required
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">密码</label>
              <input
                type="password"
                required
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">确认密码</label>
              <input
                type="password"
                required
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
            >
              注册
            </button>
          </form>
          <p className="text-center mt-4 text-gray-600">
            已有账号？
            <Link href="/auth/login" className="text-blue-600 hover:underline">
              立即登录
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
