import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
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
            I believe in the power of collaboration to deliver efficient and
            reliable virtual support. As an extension of your team, I take time
            to understand your goals, workflows, and priorities. I work closely
            with you to provide organized, proactive assistance that supports
            your business and helps you exceed your objectives.
          </p>
        </div>

        {/* Iterative */}
        <div className="max-w-xl">
          <h3 className="text-lg sm:text-xl font-serif text-[#1f2430] mb-4">
            Iterative
          </h3>
          <p className="text-sm sm:text-base text-[#1f2430]/80 leading-relaxed">
            I take an iterative and detail-oriented approach to ensure my
            support aligns with your business needs and working style. We’ll
            continuously refine processes and tasks together, making adjustments
            as needed to improve efficiency, accuracy, and overall
            productivity—ensuring no detail is overlooked.
          </p>
        </div>
      </div>
    </section>
  );
}
