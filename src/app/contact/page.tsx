"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log({ name, email, message });
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">联系我们</h1>
        <p className="text-lg text-gray-600">我们期待听到您的声音</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">联系方式</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">地址</h3>
              <p className="mt-2 text-gray-600">
                上海市浦东新区张江镇
                <br />
                张衡路123号创新大厦5楼
                <br />
                邮编: 201203
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">电话</h3>
              <p className="mt-2 text-gray-600">电话: （+86）0359-3444-5221</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">电子邮件</h3>
              <p className="mt-2 text-gray-600">info@eduproton.me</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">工作时间</h3>
              <p className="mt-2 text-gray-600">
                周一至周五: 9:00 AM - 6:00 PM
                <br />
                周六: 10:00 AM - 4:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">给我们留言</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                姓名
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                电子邮件
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                留言内容
              </label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              发送消息
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
