import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { asset } from "@/lib/utils";

export function generateStaticParams() {
  return [{ slug: "architecture-of-silence" }];
}

export default function PostPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9F9F9]">
      <Header />
      {/* Reading progress bar */}
      <div className="fixed left-0 top-0 bottom-0 w-2 bg-[rgba(249,249,249,0.5)] backdrop-blur-[16px] z-40" />

      <main className="flex-1 pt-[88px]">
        <div className="max-w-[1280px] mx-auto px-32">
          {/* Post Header */}
          <div className="py-32 text-center space-y-8">
            <div className="flex items-center justify-center gap-4 text-xs tracking-wider">
              <span className="font-semibold text-[#296A55] uppercase">Design Theory</span>
              <span className="w-1 h-1 rounded-full bg-[#AFB3B3]" />
              <time className="text-[#5B6061] uppercase">October 24, 2024</time>
              <span className="w-1 h-1 rounded-full bg-[#AFB3B3]" />
              <span className="text-[#5B6061] uppercase">8 Min Read</span>
            </div>
            <h1 className="font-serif text-6xl font-medium leading-[60px] tracking-tight text-[#2F3334]">
              The Architecture of Silence:<br />Designing for Cognitive Rest
            </h1>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#DFE3E4]" />
              <div className="text-left">
                <p className="font-medium text-[#2F3334]">Elena Rostova</p>
                <p className="text-xs text-[#5B6061]">Lead Design Critic</p>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-16">
            <div className="w-full h-[544px] relative rounded-lg shadow-lg overflow-hidden">
              <Image src={asset("/images/featured-architecture.png")} alt="Featured Architecture" fill className="object-cover" />
            </div>
            <p className="text-center text-xs text-[#5B6061] mt-4">
              The Kōyō House, Kyoto. Designed by Studio Ma. Photography by H. Tanaka.
            </p>
          </div>

          {/* Content + TOC layout */}
          <div className="flex gap-24 justify-center">
            {/* TOC Sidebar */}
            <aside className="w-64 flex-shrink-0">
              <div className="sticky top-24 pl-6 border-l border-[rgba(175,179,179,0.3)] space-y-6">
                <p className="text-xs text-[#5B6061] tracking-wider uppercase">Contents</p>
                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <span className="w-0.5 h-5 bg-[#296A55] flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-[#296A55]">The Myth of the Empty Pixel</span>
                  </li>
                  <li className="pl-4 text-sm text-[#5B6061]">Material Honesty</li>
                  <li className="pl-4 text-sm text-[#5B6061]">Implementing Tonal Layering</li>
                </ul>
              </div>
            </aside>

            {/* Article Body */}
            <article className="w-[672px] space-y-10">
              <p className="font-serif text-2xl leading-8 text-[#5B6061]">
                <span className="text-4xl font-medium text-[#5B6061] float-left mr-2 leading-8">I</span>
                n an era defined by constant notification and visual clutter, the most profound statement a designer can make is often nothing at all. The concept of "white space" has evolved from a typographical necessity into a psychological imperative.
              </p>

              <blockquote className="pl-8 border-l-2 border-[#AEF0D6] relative">
                <span className="absolute -left-2 -top-4 text-6xl text-[#DFE3E4] font-serif italic opacity-50">"</span>
                <p className="font-serif text-2xl leading-8 text-[#5B6061]">
                  Space is not a void to be filled, but a volume to be shaped. It is the breath between the notes that creates the music.
                </p>
              </blockquote>

              <p className="font-serif text-lg leading-7 text-[#2F3334]">
                We build digital environments that mimic the frenetic energy of a crowded city square. Every pixel is monetized, every interaction optimized for engagement. Yet, cognitive science suggests that our brains require "structural silence" to process complex information and form meaningful memories.
              </p>

              <h2 className="font-serif text-3xl text-[#2F3334] pt-2">The Myth of the Empty Pixel</h2>

              <p className="font-serif text-lg leading-7 text-[#2F3334]">
                To the untrained eye, empty space is a missed opportunity. A blank canvas waiting to be filled with a banner ad or a secondary navigation menu. However, true minimalist architecture—whether physical or digital—treats empty space as an active material. It is the mortar that holds the bricks of content together.
              </p>

              {/* Inline bento image */}
              <div className="bg-[#F2F4F4] rounded-lg p-6 flex gap-6">
                <div className="w-[300px] h-[300px] rounded overflow-hidden flex-shrink-0 relative">
                  <Image src={asset("/images/interior-details.png")} alt="Minimalist interior details" fill className="object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-center space-y-4">
                  <h3 className="font-serif text-xl text-[#2F3334]">Material Honesty</h3>
                  <p className="text-[#5B6061] leading-6">
                    When we strip away ornamental borders and drop shadows, we must rely on the inherent quality of our typography and imagery. The "No-Line" rule forces a discipline of tonal hierarchy.
                  </p>
                </div>
              </div>

              <h2 className="font-serif text-3xl text-[#2F3334] pt-2">Implementing Tonal Layering</h2>

              <p className="font-serif text-lg leading-7 text-[#2F3334]">
                Moving away from the stark demarcations of the past requires a softer approach. By stacking surfaces—<code className="bg-[#F2F4F4] px-1 rounded">surface</code> as the canvas, <code className="bg-[#F2F4F4] px-1 rounded">surface-container-low</code> for sections, and <code className="bg-[#F2F4F4] px-1 rounded">surface-container-lowest</code> for active elements—we create a tactile depth that feels natural.
              </p>

              <p className="font-serif text-lg leading-7 text-[#2F3334]">
                This approach is not merely aesthetic; it is profoundly empathetic to the user. It whispers rather than shouts. In the end, the ultimate luxury in modern design is clarity.
              </p>

              {/* Tags & Share */}
              <div className="bg-[#F2F4F4] rounded-lg px-8 py-6 flex items-center justify-between mt-20">
                <div className="flex gap-2">
                  {["#Minimalism", "#UXDesign", "#Theory"].map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-white rounded-xl text-sm text-[#5B6061] shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-[#5B6061]">Share</span>
                  <button className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center hover:shadow transition">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </button>
                  <button className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center hover:shadow transition">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </button>
                </div>
              </div>

              {/* Comments */}
              <div className="space-y-8 pt-12">
                <h3 className="font-serif text-2xl text-[#2F3334]">Responses (3)</h3>

                <div className="bg-white rounded-lg p-6 shadow-sm flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#DFE3E4] flex-shrink-0" />
                  <div className="flex-1 space-y-4">
                    <textarea
                      placeholder="Add to the discussion..."
                      className="w-full bg-[#DFE3E4] rounded p-4 text-sm resize-none h-20"
                    />
                    <div className="flex justify-end">
                      <button className="px-6 py-2 bg-gradient-to-b from-[#296A55] to-[#AEF0D6] text-[#E5FFF2] rounded-md text-sm font-medium">
                        Publish
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#DFE3E4] flex-shrink-0" />
                  <div className="flex-1 bg-[#F2F4F4] rounded-[0_8px_8px_8px] p-5 space-y-3">
                    <div className="flex items-baseline justify-between">
                      <span className="font-medium text-[#2F3334]">Marcus Vance</span>
                      <span className="text-xs text-[#5B6061]">2 hours ago</span>
                    </div>
                    <p className="text-sm text-[#5B6061] leading-6">
                      The point about structural silence is brilliant. We often confuse 'white space' with 'empty space', failing to realize that the space itself is the structure holding the elements in tension.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
