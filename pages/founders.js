// pages/founders.js
import Image from "next/image";
import { useState } from "react";

export default function Founders() {
  // Optional: toggle for showing Srini’s detailed timeline
  const [showSriniTimeline, setShowSriniTimeline] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* ======================
            FOUNDER 1: SRINIVAS
         ====================== */}
        <section className="mb-12 text-center">
          {/* Header / Introduction */}
          <div className="inline-block mb-4 animate-bounce">
            <Image
              src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg"
              alt="Mr. Srinivas Goud Rachakonda (Dummy)"
              width={200}
              height={200}
              className="rounded-full object-cover mx-auto shadow-lg"
              priority
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Mr. Srinivas Goud Rachakonda
          </h1>
          <p className="text-gray-700 max-w-xl mx-auto">
            Founder &amp; CEO of Mensa Investments (DIFC) Ltd. Visionary leader in{" "}
            <em>investment banking &amp; financial technologies</em>.
          </p>
          <p className="text-sm text-gray-500 mt-1 italic">
            “Srini” — from modest roots in Gadkol village to a global finance figure
          </p>
        </section>

        {/* Main Content / Detailed Info about Srini */}
        <section className="space-y-8">
          {/* Personal & Family Background */}
          <div className="bg-white rounded-lg shadow p-6 transition hover:shadow-xl">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-700">
              Personal &amp; Family Background
            </h2>
            <p className="text-gray-700 mb-3">
              Born in <strong>Gadkol village</strong>, Nizamabad district,
              Telangana, India, Srinivas—often called “Srini”—grew up in a toddy-tapping
              family. His father, <em>Rachakonda Devagoud</em>, served as the{" "}
              <strong>Sarpanch (head) of Gadkol village</strong>. Over the years,
              the family has been deeply involved in community building, providing free
              water, constructing temples, and developing community halls. Specific
              sibling details remain private, reflecting Srini’s wish to keep his family
              life low-profile.
            </p>
          </div>

          {/* Early Life Challenges */}
          <div className="bg-white rounded-lg shadow p-6 transition hover:shadow-xl">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-700">
              Early Life Challenges
            </h2>
            <p className="mb-3 text-gray-700">
              Srinivas experienced undiagnosed arthritis from age eight, limiting his
              mobility but never diminishing his academic enthusiasm. A notable anecdote
              involves him lacking train fare to visit home, relying on the goodwill of
              a lecturer. Eventually, a former politician provided a loan of{" "}
              <strong>₹20,000</strong>, enabling Srini to pursue college. Despite these
              struggles, he secured a top-30 rank in district exams, earning entry to
              reputable government-funded institutions.
            </p>
          </div>

          {/* Education */}
          <div className="bg-white rounded-lg shadow p-6 transition hover:shadow-xl">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-700">
              Education
            </h2>
            <p className="text-gray-700 mb-2">
              He completed a <strong>Bachelor of Computer Applications</strong> in
              Hyderabad, funding tuition through odd jobs like operating a telephone
              booth (where he studied every morning) and tutoring children. Later, he
              earned a <strong>Master’s in Information Systems</strong> (from Osmania
              University, 2004) and also participated in the Strategic Leaders Development
              Program (2018) at the University of Michigan - Stephen M. Ross School of
              Business.
            </p>
            <p className="text-gray-700">
              This strong tech background underpins his integration of blockchain, AI,
              and big data into finance, shaping his unique approach to wealth
              management.
            </p>
          </div>

          {/* Early Professional Trajectory in India */}
          <div className="bg-white rounded-lg shadow p-6 transition hover:shadow-xl">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-700">
              Early Professional Trajectory in India
            </h2>
            <p className="text-gray-700 mb-3">
              Srini initially joined <strong>HSBC</strong> in credit card sales and
              quickly garnered accolades, winning an international trip early on. He
              then moved into wealth management at <em>DCB Bank (2001-2004)</em> and
              later <em>ICICI Bank (2004-2008)</em>, helping launch NRI services. 
              His consistent success in Hyderabad eventually facilitated a transfer to{" "}
              <strong>Dubai</strong> around 2006.
            </p>
          </div>

          {/* Dubai Career Timeline */}
          <div className="bg-white rounded-lg shadow p-6 transition hover:shadow-xl relative">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-700">
              Professional Experience in Dubai
            </h2>
            <button
              className="absolute top-4 right-4 text-white bg-indigo-600 px-3 py-1 rounded hover:bg-indigo-700 transition-colors"
              onClick={() => setShowSriniTimeline(!showSriniTimeline)}
            >
              {showSriniTimeline ? "Hide Timeline" : "Show Timeline"}
            </button>

            {showSriniTimeline && (
              <div className="mt-6 animate-fadeIn text-gray-700">
                <ul className="list-none space-y-4">
                  {/* 1) Founder & CEO - Mensa Investments */}
                  <li className="bg-gray-50 p-3 rounded shadow hover:shadow-md transition">
                    <strong>Oct 2021 - Present (3 yrs 4 mos)</strong>  
                    <br />
                    <em>Founder &amp; CEO, Mensa Investments Corporation (DIFC) Ltd</em>  
                    <br />
                    Dubai, United Arab Emirates  
                    <br />
                    Leading an independent asset and wealth management firm (Category
                    3C license under DFSA), focusing on capital raising, M&amp;A advisory,
                    financial planning, real estate, and fintech solutions.
                  </li>

                  {/* 2) Managing Director & Co-Founder - Branford Capital */}
                  <li className="bg-gray-50 p-3 rounded shadow hover:shadow-md transition">
                    <strong>Feb 2021 - Feb 2022 (1 yr 1 mo)</strong>  
                    <br />
                    <em>Managing Director &amp; Co-Founder, Branford Capital Limited</em>  
                    <br />
                    Dubai, United Arab Emirates
                  </li>

                  {/* 3) Director - Wealth Management, UBS */}
                  <li className="bg-gray-50 p-3 rounded shadow hover:shadow-md transition">
                    <strong>Sep 2019 - Feb 2021 (1 yr 6 mos)</strong>  
                    <br />
                    <em>Director - Wealth Management, UBS</em>  
                    <br />
                    Dubai, United Arab Emirates
                  </li>

                  {/* 4) Director, Senior Private Banker - Mashreq Bank */}
                  <li className="bg-gray-50 p-3 rounded shadow hover:shadow-md transition">
                    <strong>Nov 2013 - Sep 2019 (5 yrs 11 mos)</strong>  
                    <br />
                    <em>Director, Senior Private Banker - Private Banking, Mashreq Bank</em>  
                    <br />
                    Dubai, United Arab Emirates  
                    <ul className="list-disc list-inside ml-4 mt-1">
                      <li>Managed HNWI &amp; UHNWI clients with AUM of USD 200mn+</li>
                      <li>
                        Covered GCC, Jordan, Egypt, South Africa, Kenya, India
                      </li>
                      <li>
                        Top-performing Private Banker (CEO’s Club, top 5%) for 2016, 2017,
                        2018
                      </li>
                      <li>
                        Member of “Mawaheb Talent Pool” (top 1% of Bank’s Talent)
                      </li>
                      <li>
                        Qualified for multiple international Business Conventions (Amsterdam,
                        St. Petersburg, Rome, Phuket, Barcelona)
                      </li>
                    </ul>
                  </li>

                  {/* 5) Senior Relationship Manager - Citi Gold */}
                  <li className="bg-gray-50 p-3 rounded shadow hover:shadow-md transition">
                    <strong>Sep 2012 - Oct 2013 (1 yr 2 mos)</strong>  
                    <br />
                    <em>Senior Relationship Manager - Citi Gold Private Client, Citi</em>  
                    <br />
                    Dubai, United Arab Emirates
                  </li>

                  {/* 6) Senior Relationship Manager - Standard Chartered */}
                  <li className="bg-gray-50 p-3 rounded shadow hover:shadow-md transition">
                    <strong>Feb 2008 - Sep 2012 (4 yrs 8 mos)</strong>  
                    <br />
                    <em>Senior Relationship Manager - Priority Banking, Standard Chartered</em>  
                    <br />
                    Dubai, United Arab Emirates
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Philanthropy & SRINI Foundation */}
          <div className="bg-white rounded-lg shadow p-6 transition hover:shadow-xl">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-700">
              Philanthropy &amp; SRINI Foundation
            </h2>
            <p className="text-gray-700 mb-3">
              Despite a thriving global career, Srini remains closely connected to his
              native village. In January 2020, he donated <strong>₹11 lakhs</strong> to
              the “Palle Pragathi” initiative, focusing on school improvements and
              broader rural development in Nizamabad district.
            </p>
            <p className="text-gray-700">
              Additionally, he’s establishing the <strong>SRINI Foundation</strong>{" "}
              (Society for Rural Inclusive Growth and Needy of India), aimed at
              enhancing <em>education, healthcare, and sustainable development</em> in
              rural communities. By integrating financial technologies (e.g.,
              blockchain, microfinance), the Foundation aspires to promote inclusive
              growth at grassroots levels across India.
            </p>
          </div>

          {/* Awards & Recognition */}
          <div className="bg-white rounded-lg shadow p-6 transition hover:shadow-xl">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-700">
              Awards &amp; Recognition
            </h2>
            <p className="text-gray-700">
              In <strong>October 2024</strong>, Srini received the prestigious 
              <em> “Icons of the UAE”</em> award in Dubai, highlighting his impactful work
              in <strong>investment banking and fintech</strong>. This honor exemplifies
              his influence within the Gulf region’s financial sector and underscores his
              role as a global leader in financial technologies.
            </p>
          </div>

          {/* Personal Life */}
          <div className="bg-white rounded-lg shadow p-6 transition hover:shadow-xl">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-700">
              Personal Life
            </h2>
            <p className="text-gray-700">
              Srini is known to be married with children, though specific family details
              remain private. He balances his professional commitments with a deep sense
              of responsibility toward community welfare, reflecting the values of
              humility and service ingrained since childhood.
            </p>
          </div>
        </section>

        {/* ======================
            FOUNDER 2: JANAKI
         ====================== */}
        <section className="mt-16">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Mrs. Janaki
          </h1>

          <div className="bg-white rounded-lg shadow p-6 transition hover:shadow-xl flex flex-col md:flex-row items-start md:items-center">
            {/* Placeholder image for Janaki */}
            <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-6 flex justify-center">
              <Image
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                alt="Mrs. Janaki (Dummy)"
                width={300}
                height={300}
                className="object-cover rounded-md shadow-md"
              />
            </div>
            <div className="w-full md:w-2/3">
              <p className="mb-2 text-gray-700">
                <strong>Mrs. Janaki</strong> co-founded the SRINI Foundation alongside
                Srinivas, sharing the vision of uplifting rural communities through
                strategic programs in <em>education</em>, <em>healthcare</em>, and{" "}
                <em>sustainability</em>. Although she maintains a relatively low public
                profile, Mrs. Janaki’s behind-the-scenes leadership has shaped many of
                the foundation’s initiatives, ensuring impactful grassroots reach.
              </p>
              <p className="text-gray-700">
                Drawing on her background in community development, she passionately
                advocates for women’s empowerment, youth skill development, and
                inclusive growth models. Her collaborative approach and empathy
                reinforce the foundation’s values of service and innovation.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
