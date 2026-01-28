import Image from "next/image";

export default function About() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      {/* IMAGE */}
      <div className="relative h-[300px] sm:h-[400px] md:h-auto">
        <Image
          src="/images/yem2.jpg" // replace with your image
          alt="Workspace setup"
          fill
          className="object-contain "
          priority
        />
      </div>

      {/* CONTENT */}
      <div className="bg-[#f3f0eb] px-6 sm:px-10 md:px-20 py-16 md:py-24 flex flex-col justify-center">
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-serif text-[#1f2430] mb-12">
          About Me
        </h2>

        {/* Collaborative */}
        <div className="mb-12 max-w-xl">
          <h3 className="text-lg sm:text-xl font-serif text-[#1f2430] mb-4">
            Collaborative
          </h3>
          <p className="text-sm sm:text-base text-[#1f2430]/80 leading-relaxed">
            I believe in the power of collaboration to create exceptional
            websites. As an extension of your team, I immerse myself in your
            vision and goals. I work closely with you to develop a website that
            not only reflects your brand but exceeds your expectations.
          </p>
        </div>

        {/* Iterative */}
        <div className="max-w-xl">
          <h3 className="text-lg sm:text-xl font-serif text-[#1f2430] mb-4">
            Iterative
          </h3>
          <p className="text-sm sm:text-base text-[#1f2430]/80 leading-relaxed">
            I take an iterative approach in my work to ensure the final result
            aligns with your creative vision and reflects your unique brand
            identity. We’ll work together to refine and fine-tune your site’s
            design, leaving no detail overlooked.
          </p>
        </div>
      </div>
    </section>
  );
}
