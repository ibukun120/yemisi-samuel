export default function Skills() {
  return (
    <section id="skills" className="bg-[#f3f0eb] px-6 sm:px-10 lg:px-20 py-20">
      {/* Section Header */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-serif text-[#1f2430] mb-6">
          Skills & Expertise
        </h2>
        <p className="text-[#1f2430]/80 max-w-2xl mb-16">
          I provide reliable virtual support by combining strong organizational
          skills, clear communication, and proficiency in modern digital tools.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Skill Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-lg font-medium text-[#1f2430] mb-4">
              Administrative Support
            </h3>
            <ul className="space-y-2 text-sm text-[#1f2430]/80">
              <li>• Calendar & email management</li>
              <li>• Data entry & documentation</li>
              <li>• File organization</li>
              <li>• Travel scheduling</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-lg font-medium text-[#1f2430] mb-4">
              Communication
            </h3>
            <ul className="space-y-2 text-sm text-[#1f2430]/80">
              <li>• Professional email handling</li>
              <li>• Client & customer support</li>
              <li>• Meeting coordination</li>
              <li>• Clear written communication</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-lg font-medium text-[#1f2430] mb-4">
              Productivity & Organization
            </h3>
            <ul className="space-y-2 text-sm text-[#1f2430]/80">
              <li>• Task prioritization</li>
              <li>• Time management</li>
              <li>• Attention to detail</li>
              <li>• Process optimization</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-lg font-medium text-[#1f2430] mb-4">
              Digital Tools
            </h3>
            <ul className="space-y-2 text-sm text-[#1f2430]/80">
              <li>• Google Workspace</li>
              <li>• Microsoft Office</li>
              <li>• Slack, Zoom, Teams</li>
              <li>• Trello, Asana, Notion</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-lg font-medium text-[#1f2430] mb-4">
              Customer Support
            </h3>
            <ul className="space-y-2 text-sm text-[#1f2430]/80">
              <li>• Client follow-ups</li>
              <li>• Issue resolution</li>
              <li>• Professional etiquette</li>
              <li>• CRM management</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-lg font-medium text-[#1f2430] mb-4">
              Additional Skills
            </h3>
            <ul className="space-y-2 text-sm text-[#1f2430]/80">
              <li>• Internet research</li>
              <li>• Social media scheduling</li>
              <li>• Canva basics</li>
              <li>• Confidentiality & reliability</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
