import Image from "next/image";
import Link from "next/link";
import About from "./components/About";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#bdbbbf]">
      {/* NAVBAR */}
      <header className="flex items-center justify-between px-6 sm:px-10 lg:px-12 py-6 bg-[#f3f0eb] border-b border-black/20">
        <Link
          href="/"
          className="text-lg sm:text-xl font-medium text-black hover:text-gray-500 transition duration-300 tracking-widest"
        >
          Yemisi
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm text-gray-700">
            About Me
          </a>
          <a href="#" className="text-sm text-gray-700">
            Skills
          </a>
          <button className="bg-black text-white px-5 py-2 rounded-full text-sm tracking-widest">
            Contact
          </button>
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
            I help small businesses and entrepreneurs build meaningful digital
            experiences.
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
    </main>
  );
}
