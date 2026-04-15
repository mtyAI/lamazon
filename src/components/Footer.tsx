"use client";

export default function Footer() {
  return (
    <footer className="mt-auto">
      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="block w-full bg-orange-700 py-3 text-center text-sm text-white transition-colors hover:bg-orange-600"
      >
        トップへ戻る ↑
      </button>

      {/* Links */}
      <div className="bg-orange-800 py-10 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 md:grid-cols-4">
          <div>
            <h4 className="mb-3 font-bold">Lamazonについて</h4>
            <ul className="space-y-2 text-sm text-orange-200">
              <li><a href="#" className="hover:text-white">会社概要</a></li>
              <li><a href="#" className="hover:text-white">採用情報</a></li>
              <li><a href="#" className="hover:text-white">プレスリリース</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-bold">お買い物ガイド</h4>
            <ul className="space-y-2 text-sm text-orange-200">
              <li><a href="#" className="hover:text-white">支払い方法</a></li>
              <li><a href="#" className="hover:text-white">配送について</a></li>
              <li><a href="#" className="hover:text-white">返品・交換</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-bold">ヘルプ</h4>
            <ul className="space-y-2 text-sm text-orange-200">
              <li><a href="#" className="hover:text-white">よくある質問</a></li>
              <li><a href="#" className="hover:text-white">お問い合わせ</a></li>
              <li><a href="#" className="hover:text-white">利用規約</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-bold">SNS</h4>
            <ul className="space-y-2 text-sm text-orange-200">
              <li><a href="#" className="hover:text-white">Twitter / X</a></li>
              <li><a href="#" className="hover:text-white">Instagram</a></li>
              <li><a href="#" className="hover:text-white">YouTube</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-orange-900 py-4 text-center text-sm text-orange-300">
        © 2026 Lamazon, Inc. All rights reserved. 🦙
      </div>
    </footer>
  );
}
