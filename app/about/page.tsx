import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { asset } from "@/lib/utils";

const focusAreas = [
  "Editorial Design", "Digital Strategy", "Visual Identity",
  "Long-form Writing", "Creative Direction", "Typography",
];

const socialLinks = [
  { icon: "✉", label: "hello@thecurator.com" },
  { icon: "𝕏", label: "Twitter / X" },
  { icon: "📷", label: "Instagram" },
  { icon: "in", label: "LinkedIn" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[88px]">
        <div className="max-w-[1280px] mx-auto px-6 py-24">
          <div className="flex gap-16">
            {/* Left Column */}
            <div className="w-[457px] flex-shrink-0 space-y-8">
              <div className="relative rounded-lg overflow-hidden">
                <div className="w-full h-[572px] relative">
                  <Image src={asset("/images/profile-photo.png")} alt="Profile photo" fill className="object-cover" />
                </div>
                <div className="absolute inset-0 rounded-lg shadow-[inset_0_0_0_1px_rgba(175,179,179,0.15)]" />
              </div>

              <div className="bg-white rounded-lg p-8 space-y-6 shadow-[0_12px_32px_rgba(47,51,52,0.06),0_0_0_1px_rgba(175,179,179,0.15)]">
                <h3 className="font-serif text-2xl text-[#2F3334]">Connect</h3>
                <ul className="space-y-4">
                  {socialLinks.map((link) => (
                    <li key={link.label} className="flex items-center gap-3">
                      <span className="w-5 text-center text-[#5B6061]">{link.icon}</span>
                      <a href="#" className="text-[#5B6061] hover:text-[#296A55] transition font-medium">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 space-y-16">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="font-serif text-7xl text-[#2F3334] leading-[72px]">My Story</h1>
                  <p className="font-serif text-3xl text-[#5B6061]">
                    Curating the digital landscape, one essay at a time.
                  </p>
                </div>
                <div className="space-y-6 pt-4">
                  <p className="text-[#2F3334] leading-7">
                    I began The Digital Curator as a space to document the intersections of design, technology, and culture. Over the past decade, my work has evolved from simple observations into a comprehensive study of how we interact with digital spaces.
                  </p>
                  <p className="text-[#2F3334] leading-7">
                    My approach is rooted in the belief that digital environments should be as thoughtfully crafted as physical ones. I strive to bring intentionality, calm, and high aesthetic standards to everything I create, whether it's an essay, a visual exploration, or a digital product.
                  </p>
                  <p className="text-[#2F3334] leading-7">
                    When I'm not writing or designing, you can find me exploring analog photography, reading modernist literature, or seeking out the quietest coffee shops in the city.
                  </p>
                </div>
              </div>

              {/* Areas of Focus */}
              <div className="bg-[#F2F4F4] rounded-lg p-12 space-y-6">
                <h2 className="font-serif text-3xl text-[#2F3334]">Areas of Focus</h2>
                <div className="flex flex-wrap gap-3">
                  {focusAreas.map((area) => (
                    <span
                      key={area}
                      className="px-5 py-2.5 bg-white rounded-xl text-sm font-medium text-[#2F3334] shadow-[0_4px_12px_rgba(47,51,52,0.03),0_0_0_1px_rgba(175,179,179,0.15)]"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-[#F2F4F4] rounded-lg p-12 space-y-6 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-64 h-64 bg-gradient-to-br from-[#AEF0D6] to-[#F2F4F4] blur-[64px] opacity-30 rounded-full" />
                <h2 className="font-serif text-3xl text-[#2F3334] relative">Get in Touch</h2>
                <p className="text-[#5B6061] relative">
                  For collaborations, speaking inquiries, or just to say hello.
                </p>
                <form className="space-y-6 relative">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm text-[#5B6061]">Name</label>
                      <input
                        type="text"
                        placeholder="Jane Doe"
                        className="w-full px-4 py-3 bg-[#DFE3E4] rounded-md text-[#AFB3B3] text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-[#5B6061]">Email</label>
                      <input
                        type="email"
                        placeholder="jane@example.com"
                        className="w-full px-4 py-3 bg-[#DFE3E4] rounded-md text-[#AFB3B3] text-base"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-[#5B6061]">Message</label>
                    <textarea
                      placeholder="How can we collaborate?"
                      rows={5}
                      className="w-full px-4 py-3 bg-[#DFE3E4] rounded-md text-[#AFB3B3] resize-none"
                    />
                  </div>
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-8 py-4 bg-gradient-to-b from-[#296A55] to-[#AEF0D6] text-[#E5FFF2] rounded-md font-semibold shadow-[0_12px_32px_rgba(47,51,52,0.06)] hover:opacity-90 transition"
                    >
                      Send Message →
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
