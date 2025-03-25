"use client";

import React from "react";

interface AvatarProps {
  username: string;
  size?: "sm" | "md" | "lg";
}

const Avatar: React.FC<AvatarProps> = ({ username, size = "md" }) => {
  // 获取用户名首字母
  const initial = username.charAt(0).toUpperCase();

  // 基于用户名生成固定的颜色
  const getColor = (str: string) => {
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-red-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-indigo-500",
    ];
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    hash = Math.abs(hash);
    return colors[hash % colors.length];
  };

  const sizeClasses = {
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10 text-base",
    lg: "w-12 h-12 text-lg",
  };

  return (
    <div
      className={`
        ${sizeClasses[size]}
        ${getColor(username)}
        rounded-full
        flex
        items-center
        justify-center
        text-white
        font-semibold
        select-none
      `}
    >
      {initial}
    </div>
  );
};

export default Avatar;
