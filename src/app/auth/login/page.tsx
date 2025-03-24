"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u: any) => u.email === formData.email && u.password === formData.password
    );

    if (user) {
      const userInfo = {
        username: user.username,
        email: user.email,
        isLoggedIn: true,
      };
      
      // 保存登录状态并派发事件
      localStorage.setItem("currentUser", JSON.stringify(userInfo));
      // 触发storage事件
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
    } else {
      setError("邮箱或密码错误");
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-center mb-6">登录</h2>
          {error && (
            <div className="bg-red-50 text-red-500 p-3 rounded mb-4">
              {error}
            </div>
          )}
          {success && (
            <div className="bg-green-50 text-green-600 p-3 rounded mb-4">
              登录成功！正在跳转...
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
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
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
            >
              登录
            </button>
          </form>
          <p className="text-center mt-4 text-gray-600">
            还没有账号？
            <Link href="/auth/register" className="text-blue-600 hover:underline">
              立即注册
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
