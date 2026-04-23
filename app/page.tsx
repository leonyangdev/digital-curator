import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { asset } from "@/lib/utils";

const featuredPosts = [
  {
    id: 1,
    category: "DESIGN",
    readTime: "8 min read",
    title: "The Architecture of Digital Calm",
    excerpt: "Exploring how we can build interfaces that lower resting heart rates rather than demanding constant attention. A study in tonal depth and whitespace.",
    image: asset("/images/desk-workspace.png"),
  },
  {
    id: 2,
    category: "LIFE",
    title: "Embracing the Slow Morning",
    excerpt: "Why resisting the urge to check notifications in the first hour of waking changes the trajectory of the entire day.",
    image: asset("/images/morning-mug.png"),
  },
  {
    id: 3,
    category: "CULTURE",
    title: "The Return of Physical Media",
    excerpt: "In an era of endless streaming, the tactile nature of books and vinyl offers a grounding permanence.",
    image: asset("/images/open-book.png"),
  },
];

const latestPosts = [
  {
    date: "OCT 12, 2023",
    title: "The Lost Art of Letter Writing",
    excerpt: "Reclaiming intention through the slow, deliberate process of putting pen to paper in a digital age.",
    image: asset("/images/writing-notebook.png"),
  },
  {
    date: "OCT 05, 2023",
    title: "Finding Stillness in Motion",
    excerpt: "Observations from a month spent traveling entirely by train across the coastal landscapes.",
    image: asset("/images/calm-beach.png"),
  },
  {
    date: "SEP 28, 2023",
    title: "Curating Your Space",
    excerpt: "How reducing physical possessions can lead to greater mental clarity and focused creativity.",
    image: asset("/images/minimalist-interior.png"),
  },
];

const tags = ["Design", "Slow Living", "Architecture", "Photography", "Essays", "Culture", "Travel"];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[88px]">
        {/* Hero Section */}
        <section className="py-24 px-6 flex items-center justify-center gap-16">
          <div className="max-w-[720px] space-y-8">
            <h1 className="font-serif text-7xl leading-[72px] tracking-tight text-[#296A55]">
              Curating thoughts,<br />one essay at a time.
            </h1>
            <p className="text-2xl leading-8 text-[#5B6061]">
              A digital sanctuary exploring the intersection of design, slow living, and technology.
            </p>
            <div className="flex gap-4 pt-4">
              <Link
                href="/journal"
                className="px-8 py-3 bg-gradient-to-br from-[#296A55] to-[#AEF0D6] text-[#E5FFF2] rounded-md font-medium hover:opacity-90 transition"
              >
                Read Latest Essay
              </Link>
              <Link
                href="/about"
                className="px-8 py-3 border-b-2 border-[#AEF0D6] text-[#296A55] rounded-md font-medium hover:bg-[#F2F4F4] transition"
              >
                About Me
              </Link>
            </div>
          </div>
          <div className="w-[448px] h-[560px] rounded-lg overflow-hidden shadow-lg relative">
            <Image src={asset("/images/hero.png")} alt="Abstract minimalist architecture" fill className="object-cover" />
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-24 bg-[#F2F4F4]">
          <div className="max-w-[1232px] mx-auto px-6">
            <div className="flex items-end justify-between mb-16">
              <h2 className="font-serif text-4xl text-[#2F3334]">Featured Selections</h2>
              <Link href="/journal" className="text-[#296A55] hover:underline">
                View all featured
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-2 bg-white border border-[rgba(175,179,179,0.15)] rounded-lg overflow-hidden">
                <div className="h-[448px] relative">
                  <Image src={asset("/images/desk-workspace.png")} alt="Desk workspace" fill className="object-cover" />
                </div>
                <div className="p-12 space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-[#4C645A] font-medium tracking-wider">DESIGN</span>
                    <span className="text-[#5B6061]">• 8 min read</span>
                  </div>
                  <h3 className="font-serif text-3xl leading-9 text-[#2F3334]">
                    The Architecture of Digital Calm
                  </h3>
                  <p className="text-lg leading-7 text-[#5B6061]">
                    Exploring how we can build interfaces that lower resting heart rates rather than demanding constant attention. A study in tonal depth and whitespace.
                  </p>
                  <Link href="/post/1" className="inline-flex items-center gap-2 text-[#296A55] font-medium pt-4 hover:underline">
                    Read full essay →
                  </Link>
                </div>
              </div>
              <div className="space-y-8">
                {featuredPosts.slice(1).map((post) => (
                  <div key={post.id} className="bg-white border border-[rgba(175,179,179,0.15)] rounded-lg overflow-hidden">
                    <div className="h-48 relative">
                      <Image src={post.image} alt={post.title} fill className="object-cover" />
                    </div>
                    <div className="p-6 space-y-2">
                      <span className="text-xs text-[#4C645A] font-medium tracking-wider">{post.category}</span>
                      <h4 className="font-serif text-xl leading-7 text-[#2F3334]">{post.title}</h4>
                      <p className="text-sm leading-5 text-[#5B6061]">{post.excerpt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Latest Posts & Sidebar */}
        <section className="py-24">
          <div className="max-w-[1232px] mx-auto px-6 grid grid-cols-3 gap-16">
            <div className="col-span-2 space-y-12">
              <h2 className="font-serif text-3xl text-[#2F3334]">Latest Entries</h2>
              <div className="space-y-12">
                {latestPosts.map((post, i) => (
                  <div key={i} className="flex gap-8 p-4 rounded-lg hover:bg-[#F2F4F4] transition">
                    <div className="w-48 h-32 rounded-lg overflow-hidden flex-shrink-0 relative">
                      <Image src={post.image} alt={post.title} fill className="object-cover" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <span className="text-xs text-[#5B6061] tracking-wider">{post.date}</span>
                      <h3 className="font-serif text-2xl text-[#2F3334]">{post.title}</h3>
                      <p className="text-[#5B6061]">{post.excerpt}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="px-6 py-2 bg-[#CEE9DC] text-[#296A55] rounded-md hover:bg-[#AEF0D6] transition">
                Load More Archive
              </button>
            </div>

            <aside className="space-y-16">
              <div className="bg-[#F2F4F4] border border-[rgba(175,179,179,0.15)] rounded-lg p-8 space-y-6">
                <h3 className="font-serif text-xl text-[#2F3334]">Explore Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/journal?tag=${tag.toLowerCase()}`}
                      className="px-4 py-2 bg-white rounded-xl text-sm text-[#5B6061] shadow-sm hover:shadow transition"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-[#AEF0D6] rounded-lg p-8 space-y-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#AEF0D6] blur-[40px] opacity-50" />
                <h3 className="font-serif text-2xl text-[#185C48] relative">Letters from the Curator</h3>
                <p className="text-sm text-[#185C48] opacity-90 relative">
                  A monthly digest of thoughtful essays, curated links, and quiet observations delivered to your inbox.
                </p>
                <div className="space-y-3 pt-3 relative">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-md bg-white text-sm"
                  />
                  <button className="w-full px-4 py-3 bg-[#296A55] text-[#E5FFF2] rounded-md font-medium hover:opacity-90 transition">
                    Subscribe
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
