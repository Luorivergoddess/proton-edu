"use client";

import React, { useState } from "react";

interface Notification {
  id: string;
  type: "system" | "course" | "activity";
  title: string;
  content: string;
  date: string;
  isRead: boolean;
}

const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "system",
    title: "系统升级通知",
    content: "系统将于今晚22:00-23:00进行升级维护，请合理安排学习时间。",
    date: "2025-03-25 08:00",
    isRead: false,
  },
  {
    id: "2",
    type: "course",
    title: "课程提醒",
    content: '您报名的"第一届 PPhO 试卷讲解"课程将在明天上午10:00开始。',
    date: "2025-03-24 15:30",
    isRead: true,
  },
  {
    id: "3",
    type: "activity",
    title: "活动通知",
    content: "第二届 PPhO 挑战赛即将开始，赢取丰厚积分奖励！",
    date: "2025-03-24 09:00",
    isRead: false,
  },
];

export default function Notifications() {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [activeTab, setActiveTab] = useState<"all" | "unread">("all");

  const handleMarkAsRead = (id: string) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  const filteredNotifications = activeTab === "all"
    ? notifications
    : notifications.filter(n => !n.isRead);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const getTypeIcon = (type: Notification["type"]) => {
    switch (type) {
      case "system":
        return "🔧";
      case "course":
        return "📚";
      case "activity":
        return "🎯";
    }
  };

  const getTypeColor = (type: Notification["type"]) => {
    switch (type) {
      case "system":
        return "bg-yellow-100 text-yellow-800";
      case "course":
        return "bg-blue-100 text-blue-800";
      case "activity":
        return "bg-green-100 text-green-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-lg ${
              activeTab === "all"
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            全部通知
          </button>
          <button
            onClick={() => setActiveTab("unread")}
            className={`px-4 py-2 rounded-lg flex items-center ${
              activeTab === "unread"
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            未读通知
            {unreadCount > 0 && (
              <span className="ml-2 px-2 py-0.5 text-xs bg-red-500 text-white rounded-full">
                {unreadCount}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {filteredNotifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 rounded-lg border ${
              notification.isRead ? "bg-gray-50" : "bg-white"
            }`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`p-2 rounded-lg ${getTypeColor(notification.type)}`}
              >
                {getTypeIcon(notification.type)}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h4 className="font-semibold">{notification.title}</h4>
                  <span className="text-sm text-gray-500">{notification.date}</span>
                </div>
                <p className="mt-1 text-gray-600">{notification.content}</p>
              </div>
            </div>
            {!notification.isRead && (
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => handleMarkAsRead(notification.id)}
                  className="text-sm text-blue-500 hover:text-blue-600"
                >
                  标记为已读
                </button>
              </div>
            )}
          </div>
        ))}

        {filteredNotifications.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            暂无{activeTab === "unread" ? "未读" : ""}通知
          </div>
        )}
      </div>
    </div>
  );
}
