"use client";

import React, { useState } from "react";
import { UserProfile } from "@/types/user";
import Avatar from "@/components/common/Avatar";

// 模拟数据，实际应该从API获取
const mockUserData: UserProfile = {
  id: "1",
  name: "张三",
  email: "zhangsan@example.com",
  phone: "13800138000",
  points: 520,
  level: 3,
  continuousSignIn: 5,
  lastSignIn: "2025-03-24",
  progress: {
    completedCourses: 3,
    totalCourses: 10,
  },
};

export default function PersonalInfo() {
  const [user, setUser] = useState<UserProfile>(mockUserData);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = async () => {
    // 实际项目中应该调用API
    setIsSignedIn(true);
    setUser(prev => ({
      ...prev,
      points: prev.points + 5,
      continuousSignIn: prev.continuousSignIn + 1,
      lastSignIn: new Date().toISOString().split("T")[0],
    }));
  };

  const progress = (user.progress.completedCourses / user.progress.totalCourses) * 100;

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-6">
        <Avatar username={user.name} size="lg" />
        <div className="flex-1">
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-600">等级 {user.level}</p>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-600">{user.phone}</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold text-blue-600">{user.points}</p>
          <p className="text-sm text-gray-600">积分</p>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="font-semibold">每日签到</h3>
            <p className="text-sm text-gray-600">已连续签到 {user.continuousSignIn} 天</p>
          </div>
          <button
            onClick={handleSignIn}
            disabled={isSignedIn}
            className={`px-4 py-2 rounded-lg transition-colors ${
              isSignedIn
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            {isSignedIn ? "已签到" : "签到"}
          </button>
        </div>
        <div className="space-y-2">
          <p className="text-sm text-gray-600">签到规则：</p>
          <ul className="text-sm text-gray-600 list-disc list-inside">
            <li>每日签到可获得5积分</li>
            <li>连续签到7天可额外获得10积分</li>
            <li>完成课程可获得20积分</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold mb-2">学习进度</h3>
        <div className="relative w-full h-2 bg-gray-200 rounded">
          <div
            className="absolute left-0 top-0 h-full bg-blue-500 rounded"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-2 text-sm text-gray-600">
          已完成 {user.progress.completedCourses}/{user.progress.totalCourses} 门课程
        </p>
      </div>
    </div>
  );
}
