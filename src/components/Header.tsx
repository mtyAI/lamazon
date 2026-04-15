"use client";

import { useState } from "react";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="sticky top-0 z-50">
      {/* Main nav bar */}
      <div className="bg-orange-600 text-white">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
          {/* Logo */}
          <a href="/" className="shrink-0 text-2xl font-bold tracking-tight">
            🦙 Lamazon
          </a>

          {/* Search bar */}
          <div className="flex flex-1 max-w-2xl">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Lamazonで検索"
              className="w-full rounded-l-full bg-white px-4 py-2 text-gray-900 placeholder-gray-400 outline-none"
            />
            <button className="rounded-r-full bg-orange-400 px-5 py-2 font-semibold transition-colors hover:bg-orange-300">
              🔍
            </button>
          </div>

          {/* Right nav */}
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a
              href="#"
              className="transition-colors hover:text-orange-200"
            >
              <div className="text-xs text-orange-200">こんにちは、ゲストさん</div>
              <div className="font-bold">アカウント</div>
            </a>
            <a
              href="#"
              className="transition-colors hover:text-orange-200"
            >
              <div className="text-xs text-orange-200">返品も</div>
              <div className="font-bold">注文履歴</div>
            </a>
            <a
              href="#"
              className="relative flex items-center gap-1 transition-colors hover:text-orange-200"
            >
              <span className="text-2xl">🛒</span>
              <span className="absolute -right-2 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-orange-900">
                0
              </span>
              <span className="ml-2 font-bold">カート</span>
            </a>
          </nav>
        </div>
      </div>

      {/* Sub nav */}
      <div className="bg-orange-700 text-white text-sm">
        <div className="mx-auto flex max-w-7xl items-center gap-6 overflow-x-auto px-4 py-2">
          <a href="#" className="flex items-center gap-1 font-bold whitespace-nowrap hover:text-orange-200">
            ☰ すべてのカテゴリー
          </a>
          <a href="#" className="whitespace-nowrap hover:text-orange-200">タイムセール</a>
          <a href="#" className="whitespace-nowrap hover:text-orange-200">新着商品</a>
          <a href="#" className="whitespace-nowrap hover:text-orange-200">ランキング</a>
          <a href="#" className="whitespace-nowrap hover:text-orange-200">ファッション</a>
          <a href="#" className="whitespace-nowrap hover:text-orange-200">家電・カメラ</a>
          <a href="#" className="whitespace-nowrap hover:text-orange-200">食品・飲料</a>
          <a href="#" className="whitespace-nowrap hover:text-orange-200">本・マンガ</a>
        </div>
      </div>
    </header>
  );
}
