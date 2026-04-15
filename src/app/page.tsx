import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import CategoryGrid from "@/components/CategoryGrid";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

const featuredProducts = [
  {
    id: 1,
    name: "ワイヤレスノイズキャンセリングヘッドホン Pro Max",
    price: 12800,
    originalPrice: 19800,
    rating: 4.5,
    reviewCount: 1283,
    image: "🎧",
    badge: "タイムセール",
  },
  {
    id: 2,
    name: "オーガニック抹茶パウダー 200g 京都産",
    price: 1980,
    rating: 4.8,
    reviewCount: 567,
    image: "🍵",
  },
  {
    id: 3,
    name: "スマートウォッチ Fitness Pro 最新モデル",
    price: 8900,
    originalPrice: 14800,
    rating: 4.3,
    reviewCount: 892,
    image: "⌚",
    badge: "ベストセラー",
  },
  {
    id: 4,
    name: "超軽量折りたたみ傘 ワンタッチ自動開閉",
    price: 2480,
    originalPrice: 3980,
    rating: 4.6,
    reviewCount: 2041,
    image: "☂️",
  },
  {
    id: 5,
    name: "プログラミング入門 ゼロから学ぶReact開発",
    price: 2640,
    rating: 4.7,
    reviewCount: 324,
    image: "📘",
  },
  {
    id: 6,
    name: "ポータブルBluetoothスピーカー 防水IPX7",
    price: 4980,
    originalPrice: 7980,
    rating: 4.4,
    reviewCount: 1567,
    image: "🔊",
    badge: "50%OFF",
  },
  {
    id: 7,
    name: "オーガニックコットン Tシャツ ユニセックス",
    price: 3280,
    rating: 4.2,
    reviewCount: 738,
    image: "👕",
  },
  {
    id: 8,
    name: "ステンレスタンブラー 真空断熱 500ml",
    price: 1890,
    originalPrice: 2980,
    rating: 4.9,
    reviewCount: 3215,
    image: "🥤",
    badge: "人気No.1",
  },
];

const recommendedProducts = [
  {
    id: 9,
    name: "ロボット掃除機 AI搭載 自動ゴミ収集",
    price: 34800,
    originalPrice: 49800,
    rating: 4.6,
    reviewCount: 456,
    image: "🤖",
    badge: "新着",
  },
  {
    id: 10,
    name: "キャンプ用テント 4人用 ワンタッチ設営",
    price: 15800,
    rating: 4.5,
    reviewCount: 289,
    image: "⛺",
  },
  {
    id: 11,
    name: "高級チョコレート詰め合わせ 24個入り",
    price: 3680,
    rating: 4.8,
    reviewCount: 1023,
    image: "🍫",
  },
  {
    id: 12,
    name: "エルゴノミクス オフィスチェア メッシュ",
    price: 29800,
    originalPrice: 39800,
    rating: 4.4,
    reviewCount: 672,
    image: "🪑",
    badge: "25%OFF",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <HeroBanner />
        <CategoryGrid />

        {/* Featured products */}
        <section className="mx-auto max-w-7xl px-4 py-10">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">
            🔥 注目のアイテム
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Deal banner */}
        <section className="bg-gradient-to-r from-orange-500 to-yellow-400 py-12 text-center text-white">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            🎉 本日限定タイムセール
          </h2>
          <p className="mt-2 text-lg opacity-90">
            残り時間 12:34:56 — お見逃しなく！
          </p>
          <button className="mt-6 rounded-full bg-white px-8 py-3 font-bold text-orange-600 shadow-lg transition-transform hover:scale-105">
            セール会場へ →
          </button>
        </section>

        {/* Recommended products */}
        <section className="mx-auto max-w-7xl px-4 py-10">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">
            ✨ あなたへのおすすめ
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {recommendedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Promo strip */}
        <section className="mx-auto max-w-7xl px-4 pb-10">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 p-6 text-center">
              <div className="text-4xl">🚚</div>
              <h3 className="mt-2 font-bold text-orange-800">送料無料</h3>
              <p className="mt-1 text-sm text-orange-600">
                ¥2,000以上のご注文で
              </p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-yellow-100 to-yellow-200 p-6 text-center">
              <div className="text-4xl">🔄</div>
              <h3 className="mt-2 font-bold text-yellow-800">30日間返品無料</h3>
              <p className="mt-1 text-sm text-yellow-600">
                安心してお買い物
              </p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-pink-100 to-pink-200 p-6 text-center">
              <div className="text-4xl">💎</div>
              <h3 className="mt-2 font-bold text-pink-800">ポイント2倍</h3>
              <p className="mt-1 text-sm text-pink-600">
                プライム会員限定
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
