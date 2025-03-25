"use client";

import React from "react";
import { UserProfile } from "@/types/user";

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  progress: number;
  total: number;
  completed: boolean;
}

const mockAchievements: Achievement[] = [
  {
    id: "1",
    title: "学习先锋",
    description: "完成30门课程",
    icon: "🎓",
    progress: 3,
    total: 30,
    completed: false,
  },
  {
    id: "2",
    title: "打卡达人",
    description: "连续签到30天",
    icon: "📅",
    progress: 5,
    total: 30,
    completed: false,
  },
  {
    id: "3",
    title: "积分富豪",
    description: "累计获得1000积分",
    icon: "💰",
    progress: 520,
    total: 1000,
    completed: false,
  },
];

interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  dateEarned: string;
}

const mockBadges: Badge[] = [
  {
    id: "1",
    name: "初学者",
    icon: "🌱",
    description: "完成第一门课程",
    dateEarned: "2025-03-20",
  },
  {
    id: "2",
    name: "勤奋学习",
    icon: "📚",
    description: "连续签到7天",
    dateEarned: "2025-03-22",
  },
];

export default function Achievements() {
  return (
    <div className="space-y-8">
      {/* 等级展示 */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-2">Level 3</h2>
        <p className="text-blue-100 mb-4">距离下一等级还需要200积分</p>
        <div className="w-full bg-white/20 rounded-full h-2">
          <div className="bg-white rounded-full h-2 w-3/5" />
        </div>
      </div>

      {/* 成就列表 */}
      <div>
        <h3 className="text-xl font-semibold mb-4">进行中的成就</h3>
        <div className="grid gap-4">
          {mockAchievements.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-white border rounded-lg p-4 flex items-center space-x-4"
            >
              <div className="text-3xl">{achievement.icon}</div>
              <div className="flex-1">
                <h4 className="font-semibold">{achievement.title}</h4>
                <p className="text-sm text-gray-600">{achievement.description}</p>
                <div className="mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 rounded-full h-2"
                      style={{
                        width: `${(achievement.progress / achievement.total) * 100}%`,
                      }}
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {achievement.progress}/{achievement.total}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 徽章展示 */}
      <div>
        <h3 className="text-xl font-semibold mb-4">获得的徽章</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {mockBadges.map((badge) => (
            <div
              key={badge.id}
              className="bg-white border rounded-lg p-4 text-center"
            >
              <div className="text-4xl mb-2">{badge.icon}</div>
              <h4 className="font-semibold">{badge.name}</h4>
              <p className="text-sm text-gray-600">{badge.description}</p>
              <p className="text-xs text-gray-500 mt-2">
                获得于 {badge.dateEarned}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
