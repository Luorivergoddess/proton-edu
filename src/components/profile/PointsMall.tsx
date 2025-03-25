"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  description: string;
  points: number;
  image: string;
  stock: number;
}

interface PointsRecord {
  id: string;
  type: "earn" | "spend";
  amount: number;
  description: string;
  date: string;
}

const mockProducts: Product[] = [
  {
    id: "1",
    name: "精品课程优惠券",
    description: "可用于购买任意精品课程",
    points: 500,
    image: "https://placehold.co/400x300/1a73e8/ffffff?text=课程优惠券",
    stock: 10,
  },
  {
    id: "2",
    name: "定制学习手册",
    description: "高质量印刷的个性化学习手册",
    points: 300,
    image: "https://placehold.co/400x300/34a853/ffffff?text=学习手册",
    stock: 5,
  },
  {
    id: "3",
    name: "会员月卡",
    description: "1个月会员资格",
    points: 1000,
    image: "https://placehold.co/400x300/ea4335/ffffff?text=会员月卡",
    stock: 999,
  },
];

const mockPointsRecords: PointsRecord[] = [
  {
    id: "1",
    type: "earn",
    amount: 5,
    description: "每日签到",
    date: "2025-03-25",
  },
  {
    id: "2",
    type: "earn",
    amount: 20,
    description: "完成课程：质心运动定理",
    date: "2025-03-24",
  },
  {
    id: "3",
    type: "spend",
    amount: 500,
    description: "兑换课程优惠券",
    date: "2025-03-23",
  },
];

export default function PointsMall() {
  const [activeTab, setActiveTab] = useState<"mall" | "records">("mall");
  const [userPoints] = useState(520); // 实际应从用户数据获取

  const handleExchange = (product: Product) => {
    if (userPoints < product.points) {
      alert("积分不足");
      return;
    }
    if (product.stock <= 0) {
      alert("库存不足");
      return;
    }
    // 实际项目中这里应该调用API进行兑换
    alert("兑换成功！");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <button
            onClick={() => setActiveTab("mall")}
            className={`px-4 py-2 rounded-lg ${
              activeTab === "mall"
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            积分商城
          </button>
          <button
            onClick={() => setActiveTab("records")}
            className={`px-4 py-2 rounded-lg ${
              activeTab === "records"
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            积分明细
          </button>
        </div>
        <div className="text-lg font-semibold">
          当前积分：<span className="text-blue-600">{userPoints}</span>
        </div>
      </div>

      {activeTab === "mall" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg border p-4 space-y-4"
            >
              <div className="relative h-40 w-full bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-blue-600 font-semibold">
                  {product.points} 积分
                </p>
                <p className="text-gray-500 text-sm">
                  库存: {product.stock}
                </p>
              </div>
              <button
                onClick={() => handleExchange(product)}
                disabled={userPoints < product.points || product.stock <= 0}
                className={`w-full py-2 rounded-lg ${
                  userPoints < product.points || product.stock <= 0
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                立即兑换
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {mockPointsRecords.map((record) => (
            <div
              key={record.id}
              className="bg-white rounded-lg border p-4 flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">{record.description}</p>
                <p className="text-sm text-gray-500">{record.date}</p>
              </div>
              <div
                className={`text-lg font-semibold ${
                  record.type === "earn" ? "text-green-600" : "text-red-600"
                }`}
              >
                {record.type === "earn" ? "+" : "-"}{record.amount}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
