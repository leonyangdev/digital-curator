import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const articles = [
  {
    slug: "architecture-of-silence",
    category: "DESIGN",
    date: "October 12, 2023",
    title: "The Architecture of Silence",
    excerpt: "Exploring how physical spaces shape our internal landscapes. Why empty rooms and minimalist design aren't just aesthetic…",
    image: "/images/article-architecture.png",
  },
  {
    slug: "disconnecting-to-reconnect",
    category: "TECHNOLOGY",
    date: "September 28, 2023",
    title: "Disconnecting to Reconnect",
    excerpt: "A personal experiment in digital minimalism. Navigating a month without social media and rediscovering the nuances of analog…",
    image: "/images/article-workspace.png",
  },
  {
    slug: "notes-from-the-coast",
    category: "TRAVEL",
    date: "August 15, 2023",
    title: "Notes from the Coast",
    excerpt: "Observations from two weeks spent entirely offline on the rugged northern coastline. Reflections on time, tide, and the luxury of…",
    image: "/images/article-ocean.png",
  },
  {
    slug: "art-of-slow-mornings",
    category: "LIFE",
    date: "July 04, 2023",
    title: "The Art of Slow Mornings",
    excerpt: "Reclaiming the first hours of the day. A guide to establishing morning rituals that prioritize intention over urgency, setting a…",
    image: "/images/article-coffee-book.png",
  },
];

const categories = [
  { name: "All Writings", count: 42, active: true },
  { name: "Design", count: 18 },
  { name: "Technology", count: 12 },
  { name: "Life", count: 8 },
  { name: "Travel", count: 4 },
];

const tags = ["#architecture", "#minimalism", "#productivity", "#essays", "#typography"];

export default function JournalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[88px]">
        <div className="max-w-[1280px] mx-auto px-12 py-32 flex gap-24">
          {/* Sidebar */}
          <aside className="w-64 flex-shrink-0 space-y-12">
            <div className="space-y-4">
              <h3 className="font-serif text-lg text-[#2F3334]">Explore</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search journal..."
                  className="w-full pl-10 pr-4 py-3 bg-[#DFE3E4] rounded text-sm"
                />
                <svg className="absolute left-3 top-3.5 w-4 h-4 text-[#5B6061]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-lg text-[#2F3334]">Curations</h3>
              <ul className="space-y-3">
                {categories.map((cat) => (
                  <li key={cat.name} className="flex items-center justify-between">
                    <span className={`text-sm ${cat.active ? "text-[#296A55] font-medium" : "text-[#5B6061]"}`}>
                      {cat.name}
                    </span>
                    <span className={`text-xs ${cat.active ? "text-[#5B6061]" : "text-[#777B7C]"}`}>
                      {cat.count}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-lg text-[#2F3334]">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-[#F2F4F4] rounded-xl text-xs text-[#5B6061]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          {/* Article Feed */}
          <section className="flex-1 space-y-12">
            <div className="space-y-2">
              <h1 className="font-serif text-4xl text-[#2F3334]">Journal</h1>
              <p className="text-lg text-[#5B6061]">Thoughts, essays, and observations.</p>
            </div>

            <div className="space-y-16">
              {articles.map((article) => (
                <article key={article.slug} className="flex gap-8 p-6 rounded-lg hover:bg-[#F2F4F4] transition">
                  <div className="w-64 h-48 rounded-lg overflow-hidden flex-shrink-0 relative">
                    <Image src={article.image} alt={article.title} fill className="object-cover" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3 text-xs">
                      <span className="font-semibold tracking-wider text-[#296A55] bg-[#F2F4F4] px-2 py-1 rounded">
                        {article.category}
                      </span>
                      <span className="text-[#5B6061] opacity-50">•</span>
                      <time className="text-[#5B6061]">{article.date}</time>
                    </div>
                    <h2 className="font-serif text-2xl text-[#2F3334] leading-8">
                      <Link href={`/post/${article.slug}`} className="hover:text-[#296A55] transition">
                        {article.title}
                      </Link>
                    </h2>
                    <p className="text-[#5B6061] leading-7">{article.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between pt-8 border-t border-[rgba(175,179,179,0.15)]">
              <button className="flex items-center gap-2 text-sm text-[#5B6061] opacity-50">
                ← Previous
              </button>
              <div className="flex items-center gap-4">
                {[1, 2, 3, "...", 8].map((page, i) => (
                  <button
                    key={i}
                    className={`text-sm ${page === 1 ? "font-semibold text-[#296A55]" : "text-[#5B6061]"} ${page === "..." ? "opacity-50" : ""}`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button className="flex items-center gap-2 text-sm text-[#5B6061]">
                Next →
              </button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
