import Image from "next/image";
import Link from "next/link";
import About from "./components/About";
import Footer from "./components/Footer";
import Skills from "./components/Skills2";
import Call from "./components/Call";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#bdbbbf]">
      {/* NAVBAR */}
      <header className="flex items-center justify-between px-6 sm:px-10 lg:px-12 py-6 bg-[#f3f0eb] border-b border-black/20">
        <Link
          href="/"
          className="text-lg sm:text-xl font-medium text-black hover:text-gray-500 transition duration-300 tracking-widest"
        >
          Oluwayemisi
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#about" className="text-sm text-gray-700">
            About Me
          </Link>
          <Link href="#skills" className="text-sm text-gray-700">
            Skills
          </Link>
          <Link href="#contact" className="bg-black text-white px-5 py-2 rounded-full text-sm tracking-widest">
            Contact
          </Link>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 px-6 sm:px-10 lg:px-16 py-16 lg:py-20">
        {/* LEFT CONTENT */}
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl lg:text-[64px] leading-tight font-serif text-[#1f2430]">
            Hey, I’m Yemisi Samuel.
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[#1f2430]/80">
            I help small businesses and entrepreneurs build meaningful digital experiences by handling tasks like admin support, social media management, content creation, and more—so they can focus on growing their business
          </p>

          <button className="mt-10 bg-[#f9a399] text-black px-8 sm:px-10 py-3 sm:py-4 rounded-full text-sm">
            Work with Me
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px] rounded-[36px] lg:rounded-[48px] overflow-hidden">
          <Image
            src="/images/yem1.jpeg"
            alt="Yemisi portrait"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <About />
      <Skills/>
      <Call />
      {/* FOOTER */} 
      <Footer />
    </main>
   );
}
