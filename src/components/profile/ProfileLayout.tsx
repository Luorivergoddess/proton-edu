"use client";

import React, { useState, ReactNode } from "react";
import { Tab } from "@headlessui/react";
import { FiUser, FiAward, FiBell, FiGift, FiSettings, FiMenu, FiX } from "react-icons/fi";

interface ProfileLayoutProps {
  children: ReactNode;
}

interface TabInfo {
  name: string;
  icon: ReactNode;
}

export default function ProfileLayout({ children }: ProfileLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs: TabInfo[] = [
    { name: "个人信息", icon: <FiUser className="w-5 h-5" /> },
    { name: "成就中心", icon: <FiAward className="w-5 h-5" /> },
    { name: "我的通知", icon: <FiBell className="w-5 h-5" /> },
    { name: "积分商城", icon: <FiGift className="w-5 h-5" /> },
    { name: "设置", icon: <FiSettings className="w-5 h-5" /> },
  ];

  const childrenArray = React.Children.toArray(children);

  const handleTabChange = (index: number) => {
    setSelectedTab(index);
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* 移动端菜单按钮 */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="fixed md:hidden left-4 top-20 z-30 p-2 rounded-lg bg-white shadow-lg"
      >
        <FiMenu className="w-6 h-6" />
      </button>

      <Tab.Group vertical selectedIndex={selectedTab} onChange={handleTabChange}>
        <div className="flex min-h-screen">
          {/* 侧边栏遮罩 */}
          <div
            className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
              isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setIsSidebarOpen(false)}
          />

          {/* 侧边栏 */}
          <div
            className={`
              fixed md:relative inset-y-0 left-0 z-40
              w-64 md:w-20 shrink-0
              bg-white shadow-lg
              transform transition-all duration-300 ease
              ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
              mt-16 md:mt-0
              md:rounded-none rounded-r-2xl
            `}
          >
            {/* 移动端关闭按钮 */}
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="absolute right-4 top-4 p-2 md:hidden"
            >
              <FiX className="w-6 h-6" />
            </button>

            <div className="p-4 h-full overflow-y-auto">
              <div className="h-14" />
              <Tab.List className="flex flex-col space-y-2">
                {tabs.map((tab, index) => (
                  <Tab
                    key={tab.name}
                    className={({ selected }) =>
                      `flex items-center space-x-3 w-full py-3 px-4 text-left rounded-lg transition-colors ${
                        selected
                          ? "bg-blue-500 text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`
                    }
                  >
                    <div className="flex-shrink-0">{tab.icon}</div>
                    <span className="block md:hidden">{tab.name}</span>
                  </Tab>
                ))}
              </Tab.List>
            </div>
          </div>

          {/* 内容区域 */}
          <div className="flex-1 p-4 md:p-6">
            <Tab.Panels>
              {childrenArray.map((child, idx) => (
                <Tab.Panel
                  key={idx}
                  className="bg-white rounded-lg shadow-sm p-6"
                >
                  {child}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </div>
        </div>
      </Tab.Group>
    </div>
  );
}
