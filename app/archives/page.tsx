import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

type Post = { date: string; title: string; excerpt: string; tags: string[]; image?: boolean };
type Month = { name: string; active: boolean; posts: Post[] };
type YearGroup = { year: string; active: boolean; months: Month[] };

const archiveData: YearGroup[] = [
  {
    year: "2024",
    active: true,
    months: [
      {
        name: "October",
        active: true,
        posts: [
          {
            date: "Oct 24",
            title: "The Architecture of Silence",
            excerpt: "Exploring minimalist spaces and how the absence of visual noise contributes to mental clarity in digital design.",
            tags: ["Design", "Theory"],
          },
          {
            date: "Oct 12",
            title: "Tactile Interfaces",
            excerpt: "Moving beyond flat design to create digital experiences that feel physically grounded through subtle shadows and micro-textures.",
            tags: ["UI/UX"],
          },
        ],
      },
      {
        name: "September",
        active: false,
        posts: [
          {
            date: "Sep 28",
            title: "Typography as Voice",
            excerpt: "How serif and sans-serif pairings can dictate the entire emotional resonance of an editorial piece.",
            tags: [],
            image: true,
          },
        ],
      },
    ],
  },
  {
    year: "2023",
    active: false,
    months: [
      {
        name: "December",
        active: false,
        posts: [
          {
            date: "Dec 05",
            title: "Year in Review: Color Trends",
            excerpt: "A look back at the shift towards earthy, organic palettes in digital product design.",
            tags: [],
          },
        ],
      },
    ],
  },
];

const categories = [
  { name: "Design Theory", count: "24 Essays", large: true },
  { name: "Development", count: "12 Posts" },
  { name: "Visuals", count: "18 Galleries" },
  { name: "Personal Journal", count: "8 Entries" },
];

const tagCloud = ["Typography", "Minimalism", "Color Palette", "UX Patterns", "CSS Architecture", "Editorial Layouts", "Photography", "Inspiration"];

export default function ArchivesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[88px]">
        <div className="max-w-[1280px] mx-auto px-6 py-12">
          {/* Header */}
          <div className="mb-8 space-y-4">
            <h1 className="font-serif text-6xl text-[#2F3334] leading-[60px]">The Archives.</h1>
            <p className="text-lg text-[#5B6061] max-w-[672px]">
              A curated collection of past thoughts, visual essays, and design explorations, organized for serendipitous discovery.
            </p>
          </div>

          <div className="flex gap-16 items-start">
            {/* Timeline */}
            <div className="flex-1 space-y-16">
              {archiveData.map((yearGroup) => (
                <div key={yearGroup.year} className="space-y-8">
                  {/* Year header */}
                  <div className="bg-[rgba(249,249,249,0.9)] backdrop-blur-[12px] py-4">
                    <div className="flex items-center gap-4">
                      <span className={`font-serif text-4xl ${yearGroup.active ? "text-[#296A55]" : "text-[#5B6061]"}`}>
                        {yearGroup.year}
                      </span>
                      <div className="flex-1 h-px bg-[#DFE3E4]" />
                    </div>
                  </div>

                  {yearGroup.months.map((month) => (
                    <div key={month.name} className="pl-8 border-l-2 border-[rgba(223,227,228,0.5)] space-y-6">
                      <h3 className={`font-serif text-2xl ${month.active ? "text-[#2F3334]" : "text-[#5B6061]"}`}>
                        {month.name}
                      </h3>
                      <div className="space-y-4">
                        {month.posts.map((post, i) => (
                          <div key={i} className="flex gap-6 p-4 rounded-lg hover:bg-[#F2F4F4] transition">
                            <div className="w-16 pt-1 flex-shrink-0">
                              <span className="text-sm text-[#5B6061]">{post.date}</span>
                            </div>
                            <div className="flex-1 space-y-2">
                              <h4 className="font-serif text-xl text-[#2F3334]">
                                <Link href="/post/architecture-of-silence" className="hover:text-[#296A55] transition">
                                  {post.title}
                                </Link>
                              </h4>
                              <p className="text-sm text-[#5B6061] leading-6">{post.excerpt}</p>
                              {post.tags.length > 0 && (
                                <div className="flex gap-2 pt-1">
                                  {post.tags.map((tag) => (
                                    <span key={tag} className="px-2 py-1 bg-[rgba(206,233,220,0.5)] rounded text-xs text-[#4C645A]">
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                            {post.image && (
                              <div className="w-24 h-16 rounded-lg overflow-hidden flex-shrink-0 relative">
                                <Image src="/images/typography-layout.png" alt={post.title} fill className="object-cover" />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}

              <div className="flex justify-center pt-8">
                <button className="flex items-center gap-2 px-6 py-3 border-b-2 border-[#AEF0D6] text-[#296A55] hover:bg-[#F2F4F4] transition rounded-md">
                  Load Earlier Years ↓
                </button>
              </div>
            </div>

            {/* Right Sidebar */}
            <aside className="w-[283px] flex-shrink-0 space-y-12">
              {/* Browse by Category */}
              <div className="bg-[#F2F4F4] rounded-[32px] p-8 space-y-6">
                <h3 className="font-serif text-2xl text-[#2F3334]">Curated Subjects</h3>
                <div className="space-y-3">
                  {/* Large card */}
                  <div className="relative rounded-lg overflow-hidden h-40">
                    <Image src="/images/category-interior.png" alt="Design Theory" fill className="object-cover opacity-60" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                      <div>
                        <h4 className="font-serif text-xl text-[#2F3334]">Design Theory</h4>
                        <p className="text-sm text-[#5B6061]">24 Essays</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white rounded-lg p-5 space-y-1">
                      <h4 className="font-serif text-lg text-[#2F3334]">Development</h4>
                      <p className="text-xs text-[#5B6061]">12 Posts</p>
                    </div>
                    <div className="bg-white rounded-lg p-5 space-y-1">
                      <h4 className="font-serif text-lg text-[#2F3334]">Visuals</h4>
                      <p className="text-xs text-[#5B6061]">18 Galleries</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-[rgba(41,106,85,0.1)] to-[rgba(174,240,214,0.2)] border border-[rgba(41,106,85,0.05)] rounded-lg p-5 flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-lg text-[#2F3334]">Personal Journal</h4>
                    </div>
                    <div className="bg-white rounded-xl px-3 py-1 text-sm text-[#5B6061]">
                      8<br />Entries
                    </div>
                  </div>
                </div>
              </div>

              {/* Tag Cloud */}
              <div className="space-y-4">
                <h3 className="font-serif text-xl text-[#2F3334] flex items-center gap-2">
                  <span>🏷</span> Index of Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tagCloud.map((tag) => (
                    <Link
                      key={tag}
                      href={`/journal?tag=${tag.toLowerCase()}`}
                      className="px-4 py-2 bg-[#F2F4F4] rounded text-sm text-[#2F3334] hover:bg-[#DFE3E4] transition"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
