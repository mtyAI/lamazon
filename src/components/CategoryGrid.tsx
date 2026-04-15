const categories = [
  { name: "ファッション", emoji: "👗", color: "bg-pink-100 hover:bg-pink-200" },
  { name: "家電・カメラ", emoji: "📷", color: "bg-blue-100 hover:bg-blue-200" },
  { name: "食品・飲料", emoji: "🍱", color: "bg-green-100 hover:bg-green-200" },
  { name: "本・マンガ", emoji: "📚", color: "bg-yellow-100 hover:bg-yellow-200" },
  { name: "ゲーム", emoji: "🎮", color: "bg-purple-100 hover:bg-purple-200" },
  { name: "スポーツ", emoji: "⚽", color: "bg-orange-100 hover:bg-orange-200" },
  { name: "ビューティー", emoji: "💄", color: "bg-rose-100 hover:bg-rose-200" },
  { name: "ペット用品", emoji: "🐾", color: "bg-amber-100 hover:bg-amber-200" },
];

export default function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">
        カテゴリーから探す
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
        {categories.map((cat) => (
          <a
            key={cat.name}
            href="#"
            className={`${cat.color} flex flex-col items-center gap-2 rounded-2xl p-4 transition-all hover:scale-105 hover:shadow-md`}
          >
            <span className="text-4xl">{cat.emoji}</span>
            <span className="text-sm font-semibold text-gray-700">
              {cat.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
