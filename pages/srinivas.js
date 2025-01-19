import Image from "next/image";
import { useState } from "react";

/**
 * This page compiles all key details about
 * Mr. Srinivas Goud Rachakonda in a modern,
 * animated, timeline-like layout.
 */
export default function SrinivasPage() {
  // Optional: a simple state to toggle extra sections if desired.
  const [showTimeline, setShowTimeline] = useState(true);

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header / Introduction */}
        <section className="mb-12 text-center">
          <div className="inline-block mb-4 animate-bounce">
            {/* Example placeholder portrait */}
            <Image
              src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg"
              alt="Srinivas Goud Rachakonda (Dummy)"
              width={200}
              height={200}
              className="rounded-full object-cover mx-auto shadow-lg"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Mr. Srinivas Goud Rachakonda
          </h1>
          <p className="text-gray-700 max-w-xl mx-auto">
            Founder & CEO of Mensa Investments (DIFC) Ltd.  
            Visionary leader in <em>investment banking & financial technologies</em>.
          </p>
          <p className="text-sm text-gray-500 mt-1 italic">
            “Srini” — from modest roots in Gadkol village to a global finance leader
          </p>
        </section>

        {/* Main Content / Detailed Info */}
        <section className="space-y-8">
          {/* Personal & Family Background */}
          <div className="bg-white rounded-lg shadow p-6 transition hover:shadow-xl">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-700">
              1. Personal & Family Background
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Born in <strong>Gadkol (Godkal) village</strong>, Nizamabad district,
              Telangana, India, Srinivas (often called “Srini”) was raised in a modest
              toddy-tapping family. His father,{" "}
              <em>Rachakonda Srinivas Goud</em>, went to great lengths—sometimes
              borrowing at high interest rates—to ensure Srini’s education. Later,
              his parents returned to the village to focus on community development
              projects, including providing free water, building temples, and
              constructing community halls. Specific details about siblings remain
              private, consistent with Srini’s preference to keep his personal life
              low-profile.
            </p>
            <p className="text-gray-700 leading-relaxed">
              In some accounts, his father has been recognized as:
              <ul className="list-disc list-inside ml-4">
                <li>Head (Sarpanch) of Godkal village</li>
                <li>Chairman of Nakrekal municipality</li>
              </ul>
              underscoring the family’s longstanding dedication to public service.
            </p>
          </div>

          {/* Early Life Challenges */}
          <div className="bg-white rounded-lg shadow p-6 transition hover:shadow-xl">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-700">
              2. Early Life Challenges
            </h2>
            <p className="mb-3 text-gray-700">
              Srini’s childhood was marked by financial hurdles—his father often
              borrowed money at steep interest just to keep him in school. He also
              grappled with undiagnosed arthritis from age eight, a condition that
              impacted his mobility but never dampened his academic drive.
            </p>
            <p className="text-gray-700">
              A particularly telling anecdote: on one occasion, Srini couldn’t afford
              the train fare to visit home during holidays, relying on the goodwill of
              a lecturer. Later, a former politician extended him a loan of{" "}
              <strong>₹20,000</strong> after multiple rejections, enabling him to
              pursue higher education. His resilience and determination shone through
              these struggles, evidenced by top ranks in district exams and successful
              entry into reputable government-funded schools.
            </p>
          </div>

          {/* Education */}
          <div className="bg-white rounded-lg shadow p-6 transition hover:shadow-xl">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-700">
              3. Education
            </h2>
            <p className="text-gray-700 mb-2">
              Srinivas completed a <strong>Bachelor of Computer Applications (BCA)</strong> in
              Hyderabad, funding his tuition through a combination of loans and odd
              jobs—such as working at a telephone booth (where he studied early each
              morning) and tutoring local children. Later, he pursued a{" "}
              <strong>Master’s degree</strong> in either <em>Information Technology</em> or{" "}
              <em>Information Systems</em> (sources vary), frequently attending evening
              classes while maintaining a full-time job.
            </p>
            <p className="text-gray-700">
              This tech-focused education would prove vital in shaping his unique
              approach to finance, integrating blockchain, AI, and big data analytics
              into wealth management models.
            </p>
          </div>

          {/* Early Professional Trajectory */}
          <div className="bg-white rounded-lg shadow p-6 transition hover:shadow-xl">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-700">
              4. Early Professional Trajectory in India
            </h2>
            <p className="text-gray-700 mb-3">
              Srini’s first break came selling credit cards for <strong>HSBC</strong>,
              where he excelled—winning recognition and even earning an international
              trip early on. He then moved into wealth management roles at{" "}
              <em>Development Credit Bank</em> and <em>ICICI Bank</em>, playing a pivotal
              role in launching NRI (Non-Resident Indian) services.
            </p>
            <p className="text-gray-700">
              His success in Hyderabad led to a transfer to <strong>Dubai</strong> around
              2006, marking the beginning of an illustrious international career.
            </p>
          </div>

          {/* Move to Dubai & Key Roles */}
          <div className="bg-white rounded-lg shadow p-6 transition hover:shadow-xl">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-700">
              5. Relocation to Dubai & Mensa Investments
            </h2>
            <p className="mb-3 text-gray-700">
              Over the next 18+ years in the UAE, Srini worked at renowned institutions:
              <ul className="list-disc list-inside ml-4">
                <li>Standard Chartered</li>
                <li>Citibank N.A.</li>
                <li>Mashreq Private Bank</li>
                <li>UBS AG</li>
              </ul>
              He developed expertise in <em>wealth and private banking, real estate,
              mortgage solutions, FX, structured products, asset management, and
              alternative investments.</em>
            </p>
            <p className="text-gray-700">
              Eventually, he founded <strong>Mensa Investments Corporation (DIFC) Ltd</strong>, 
              also referred to as <em>Mensa Group</em>, around 2015 (in some accounts, 
              after amassing over 22 years of experience). Today, as <strong>Founder &amp; CEO</strong>, 
              he provides comprehensive financial services—<em>capital raising, asset 
              management, M&amp;A advisory, and financial planning</em>—while embracing 
              cutting-edge technologies like <em>blockchain</em> and <em>AI</em>. Mensa is 
              regulated under a Category 3C license by the <em>Dubai Financial Services 
              Authority (DFSA)</em>, underscoring its commitment to rigorous standards.
            </p>
          </div>

          {/* Philanthropy & SRINI Foundation */}
          <div className="bg-white rounded-lg shadow p-6 transition hover:shadow-xl">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-700">
              6. Philanthropy &amp; SRINI Foundation
            </h2>
            <p className="text-gray-700 mb-3">
              Despite his global success, Srini remains closely tied to Gadkol village.
              Notably, in January 2020, he donated amounts listed variously as{" "}
              <strong>₹1.60 crore</strong> or <strong>₹11 lakh</strong> to the “Palle
              Pragathi” initiative, focusing on improving school infrastructure and
              overall rural development in Nizamabad district. 
            </p>
            <p className="text-gray-700 mb-3">
              He is also establishing the <strong>SRINI Foundation</strong> (Society for
              Rural Inclusive Growth and Needy of India) to further drive initiatives
              around <em>education, healthcare, and sustainable development</em> in India’s 
              rural communities. By leveraging financial and fintech expertise (e.g., 
              microfinance, blockchain solutions), the foundation aims to promote 
              inclusive growth at the grassroots level.
            </p>
            <div className="flex items-center space-x-4 mt-4">
              <Image
                src="https://images.pexels.com/photos/3770586/pexels-photo-3770586.jpeg"
                alt="Philanthropy (Dummy)"
                width={400}
                height={250}
                className="rounded shadow-md hover:scale-105 transition-transform duration-300 object-cover"
              />
              <Image
                src="https://images.pexels.com/photos/1912868/pexels-photo-1912868.jpeg"
                alt="Village Initiative (Dummy)"
                width={400}
                height={250}
                className="rounded shadow-md hover:scale-105 transition-transform duration-300 object-cover"
              />
            </div>
          </div>

          {/* Awards & Recognition */}
          <div className="bg-white rounded-lg shadow p-6 transition hover:shadow-xl">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-700">
              7. Awards &amp; Recognition
            </h2>
            <p className="text-gray-700">
              In <strong>October 2024</strong>, Srini received the prestigious{" "}
              <em>“Icons of the UAE”</em> award in Dubai, honoring his groundbreaking work 
              in <strong>investment banking and financial technologies</strong>. This 
              accolade highlights his impact on the Gulf region’s financial landscape 
              and underscores his role as a global thought leader in fintech.
            </p>
          </div>

          {/* Professional Reputation & Personal Life */}
          <div className="bg-white rounded-lg shadow p-6 transition hover:shadow-xl">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-700">
              8. Professional Reputation &amp; Personal Life
            </h2>
            <p className="text-gray-700 mb-3">
              Known for strong analytical skills, innovative thinking, and a client-centric
              mindset, Srini has serviced numerous high-net-worth clients. His story—from
              a rural family in Telangana to a global fintech leader—serves as an example
              of resilience, perseverance, and humility. 
            </p>
            <p className="text-gray-700">
              While details about his immediate family remain private, it is known that 
              he is married with children, balancing professional responsibilities 
              alongside his commitment to community welfare. His values emphasize 
              humility, service, and social responsibility, reflecting the influence 
              of his upbringing and family ethos.
            </p>
          </div>

          {/* Timeline Toggle Example (Optional) */}
          <div className="text-center mt-8">
            <button
              onClick={() => setShowTimeline(!showTimeline)}
              className="bg-indigo-600 text-white px-6 py-2 rounded shadow hover:bg-indigo-700 transition-colors"
            >
              {showTimeline ? "Hide Key Timeline" : "Show Key Timeline"}
            </button>
          </div>

          {showTimeline && (
            <div className="mt-6 bg-white rounded shadow p-6 animate-fadeIn">
              <h3 className="text-xl font-bold mb-4 text-indigo-700">
                Quick Timeline
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>• <strong>Childhood:</strong> Raised in toddy-tapping family; father’s high-interest loans</p>
                <p>• <strong>Schooling:</strong> Top-30 district rank, overcame arthritis & financial hardship</p>
                <p>• <strong>College:</strong> BCA + Master’s in IT/IS (worked at telephone booth, tutoring, etc.)</p>
                <p>• <strong>Early Career (India):</strong> HSBC credit cards → Dev. Credit Bank → ICICI Bank → 
                  success in wealth management, NRI services</p>
                <p>• <strong>Dubai (2006+):</strong> Roles at Standard Chartered, Citibank, Mashreq, UBS AG</p>
                <p>• <strong>Founded Mensa (c.2015):</strong> Focus on capital raising, M&amp;A, asset mgmt., 
                  fintech solutions, regulated by DFSA</p>
                <p>• <strong>Philanthropy:</strong> Large donations to “Palle Pragathi,” building SRINI Foundation</p>
                <p>• <strong>October 2024:</strong> Receives “Icons of the UAE” award in Dubai</p>
                <p>• <strong>Ongoing:</strong> Expanding Mensa globally & fostering rural development in India</p>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
