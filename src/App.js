import React, { useEffect, useState } from "react";

// Dollsies University — Single-file React component
// Tailwind CSS assumed available in the host environment.

export default function GlobalHorizonsUniversityApp() {
  const [showCongrats, setShowCongrats] = useState(true);
  const [showOffer, setShowOffer] = useState(false);
  const [sentEmail, setSentEmail] = useState(false);

  useEffect(() => {
    // Auto-hide congratulations after a small delay if desired
    const t = setTimeout(() => {
      // keep open so user can click — do nothing here
    }, 3000);
    return () => clearTimeout(t);
  }, []);

  function openOffer() {
    setShowOffer(true);
    setShowCongrats(false);
  }

  function sendDummyEmail() {
    // Simulate sending and then open a mailto for convenience
    setSentEmail(true);
    const subject = encodeURIComponent("Your Offer from Dollsies University (Full Ride)");
    const body = encodeURIComponent(
      `Dear Rhitika,\n\nCongratulations! You have been admitted to Dollsies University (DU) to the Bachelor of Global Affairs (IR & Global Affairs major + Economics minor) program with a FULL RIDE scholarship.\n\nProgram: Bachelor of Global Affairs (IR & Global Affairs major + Economics minor)\nScholarship: Full Ride Scholarship (tuition, room & board, stipend)\nStart Date: September 1, 2026\n\nPlease reply to this email to confirm your acceptance.\n\nWarm regards,\nAdmissions Office\nDollsies University\nadmissions@DU.soff\n+1 (555) 394-2847`
    );
    // Open user's email client (this is only a convenience and will not actually send automatically)
    window.location.href = `mailto:rhitika.phuyal@soff.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Top nav */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-md flex items-center justify-center bg-gradient-to-br from-blue-600 to-yellow-400 text-white font-bold">DU</div>
            <div>
              <h1 className="text-xl font-semibold">Dollsies University</h1>
              <div className="text-xs text-gray-500">Shaping Leaders for a Connected World</div>
            </div>
          </div>
          <nav className="space-x-4 text-sm">
            <a className="hover:underline" href="#about">About</a>
            <a className="hover:underline" href="#academics">Academics</a>
            <a className="hover:underline" href="#student-life">Student Life</a>
            <a className="hover:underline" href="#careers">Careers</a>
            <a className="hover:underline" href="#international">International</a>
            <a className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm" href="#apply">Apply</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-extrabold">Welcome to Dollsies University</h2>
            <p className="mt-4 text-gray-700">A supportive university with an international outlook, dedicated to social science education, experiential learning, and strong career outcomes including pathways to NGOs, IGOs, and the United Nations.</p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <span className="font-semibold">Class size:</span>
                <span>Average 25 students with close faculty mentorship and seminar-style classes.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-semibold">Scholarships:</span>
                <span>Generous financial aid and international student grants: need-aware and merit-based awards available.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-semibold">Career pathways:</span>
                <span>Strong NGO/IGO ties and UN internship support; dedicated career counselors.</span>
              </li>
            </ul>

            <div className="mt-6 flex gap-3">
              <button onClick={() => document.getElementById('academics')?.scrollIntoView({behavior:'smooth'})} className="px-4 py-2 bg-blue-600 text-white rounded-md">Explore Academics</button>
              <button onClick={() => document.getElementById('apply')?.scrollIntoView({behavior:'smooth'})} className="px-4 py-2 border rounded-md">Apply</button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md bg-white">
            <img alt="campus" src="https://i.pinimg.com/1200x/88/61/80/88618064b2e310ed81d8b01c452f4ca0.jpg" className="w-full h-72 object-cover" />
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-12 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold">About DU</h3>
          <p className="mt-3 text-gray-700">Dollsies University is a small university focused on social sciences, interdisciplinary research, and global engagement. With an average seminar size of 25 students, faculty are accessible and mentorship-driven. Our campus culture prioritizes wellbeing, cultural diversity, and professional growth.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-md">
              <h4 className="font-semibold">Personalized Guidance</h4>
              <p className="text-sm text-gray-600 mt-2">Academic advisors and faculty mentors work closely with students to shape academic pathways and research projects.</p>
            </div>
            <div className="p-4 border rounded-md">
              <h4 className="font-semibold">International Support</h4>
              <p className="text-sm text-gray-600 mt-2">An International Student Office offers visa help, housing guidance, airport pickup, and a buddy program.</p>
            </div>
            <div className="p-4 border rounded-md">
              <h4 className="font-semibold">Campus Life</h4>
              <p className="text-sm text-gray-600 mt-2">Active clubs, cultural societies, and campus events ensure students find coDUnity and leadership roles.</p>
            </div>
          </div>
        </section>

        {/* Academics */}
        <section id="academics" className="mt-8">
          <h3 className="text-2xl font-bold">School of Social Sciences</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded shadow-sm">
              <h4 className="font-semibold">Programs</h4>
              <ul className="mt-3 list-disc list-inside text-gray-700">
                <li>Bachelor of Global Affairs (IR & Global Affairs major + Economics minor) — majors: International Relations, Development Studies, Sociology, Anthropology, Psychology, Public Policy</li>
                <li>Research labs & fieldwork opportunities</li>
                <li>Global immersion and study-abroad partnerships</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded shadow-sm">
              <h4 className="font-semibold">Faculty & Mentorship</h4>
              <p className="mt-3 text-gray-700">Faculty maintain open office hours and supervise small-cap research teams. Our structure supports strong student-teacher relationships and personalized academic development.</p>
            </div>
          </div>
        </section>

        {/* Student life */}
        <section id="student-life" className="mt-8 bg-white p-6 rounded shadow-sm">
          <h3 className="text-2xl font-bold">Student Life & Clubs</h3>
          <p className="mt-3 text-gray-700">Clubs and student organizations are vibrant. Below are a few of the active groups:</p>
          <ul className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <li className="p-4 border rounded-md">
              <strong>Model UN</strong>
              <div className="text-sm text-gray-600 mt-2">Active delegations and coaching for international conferences.</div>
            </li>
            <li className="p-4 border rounded-md">
              <strong>South Asian Students Association</strong>
              <div className="text-sm text-gray-600 mt-2">Weekly cultural nights, food events, and peer support for South Asian students especially Rhitika Phuyal from Nepal</div>
            </li>
            <li className="p-4 border rounded-md">
              <strong>Debate & Policy Society</strong>
              <div className="text-sm text-gray-600 mt-2">Workshops, speaker series, and policy labs for social science students.</div>
            </li>
          </ul>
        </section>

        {/* Food & weather */}
        <section className="mt-8 bg-white p-6 rounded shadow-sm">
          <h3 className="text-2xl font-bold">Food & Campus Climate</h3>
          <p className="mt-3 text-gray-700">Dining services provide a wide range of international cuisines with special emphasis on South Asian staples for South Asian people: Biryani, dal, Pizza, Pasta options. The local weather is mild and student-friendly designed so international students, including those from Nepal, can comfortably adapt.</p>
        </section>

        {/* Careers */}
        <section id="careers" className="mt-8 bg-white p-6 rounded shadow-sm">
          <h3 className="text-2xl font-bold">Careers, Internships & UN Pathways</h3>
          <p className="mt-3 text-gray-700">A dedicated Career & Employer Relations office supports internship placements, CV workshops, and networking with NGOs and IGOs. We provide dedicated support for students seeking internships at the United Nations and similar organisations : application coaching, referees, and alumni introductions.</p>
        </section>

        {/* International office */}
        <section id="international" className="mt-8 bg-white p-6 rounded shadow-sm">
          <h3 className="text-2xl font-bold">International Student Office</h3>
          <ul className="mt-3 list-disc list-inside text-gray-700">
            <li>Visa & immigration assistance</li>
            <li>Pre-departure briefings & cultural orientation</li>
            <li>Airport pickup & short-term housing</li>
            <li>Buddy program pairing domestic and international students</li>
          </ul>
        </section>

        {/* Scholarships & apply */}
        <section id="apply" className="mt-8 bg-white p-6 rounded shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold">Scholarships & Financial Aid</h3>
              <p className="mt-3 text-gray-700">We offer a broad range of scholarships for merit, need, and for international students. A select number of full-ride scholarships are awarded each year for outstanding applicants.</p>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setShowCongrats(true)} className="px-4 py-2 bg-yellow-400 rounded-md">Get Personalized Offer</button>
              <a className="px-4 py-2 border rounded-md" href="#" onClick={(e) => { e.preventDefault(); alert('You donot approach university, universities approach you.'); }}>Open Application Portal</a>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-md">
              <h4 className="font-semibold">Full Ride Scholarship</h4>
              <p className="text-sm text-gray-600 mt-2">Covers tuition, room & board, and annual stipend. Typical recipients show strong academic record, leadership, and commitment to global public service.</p>
            </div>

            <div className="p-4 border rounded-md">
              <h4 className="font-semibold">International Grants</h4>
              <p className="text-sm text-gray-600 mt-2">Additional funds available for travel, research, and living support for international students.</p>
            </div>
          </div>
        </section>

        {/* Footer contact */}
        <footer className="mt-12 border-t pt-6">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:justify-between gap-6">
            <div>
              <div className="font-semibold">Contact Admissions</div>
              <div className="text-sm text-gray-600 mt-2">admissions@DU.soff | scholarships@DU.soff | +977 9746521081</div>
            </div>

            <div className="text-sm text-gray-600">© {new Date().getFullYear()} Dollsies University</div>
          </div>
        </footer>
      </main>

      {/* Congratulations popup with confetti */}
      {showCongrats && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-30" onClick={() => setShowCongrats(false)} />
          <div className="relative bg-white rounded-xl p-8 max-w-xl mx-4 shadow-2xl text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-yellow-400 flex items-center justify-center text-white font-bold text-xl">DU</div>
            </div>
            <h2 className="text-2xl font-extrabold">🎉 Congratulations, Rhitika!</h2>
            <p className="mt-3 text-gray-700">You are accepted to <strong>Dollsies University</strong> with a <strong>Full Ride Scholarship</strong>.</p>
            <div className="mt-6 flex justify-center gap-3">
              <button onClick={openOffer} className="px-4 py-2 bg-blue-600 text-white rounded-md">View Your Offer Letter</button>
              <button onClick={() => setShowCongrats(false)} className="px-4 py-2 border rounded-md">Close</button>
            </div>

            {/* Simple confetti animation */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <Confetti />
            </div>
          </div>
        </div>
      )}

      {/* Offer letter modal */}
      {showOffer && (
        <div className="fixed inset-0 z-60 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-40" onClick={() => setShowOffer(false)} />
          <div className="relative bg-white rounded-lg p-8 max-w-3xl mx-4 shadow-2xl">
            <div className="flex justify-between items-start gap-4">
              <div>
                <h2 className="text-2xl font-bold">Offer Letter</h2>
                <div className="text-sm text-gray-600 mt-1">Admissions Office — Dollsies University</div>
              </div>
              <div className="text-right">
                <div className="font-semibold">Date:</div>
                <div className="text-sm text-gray-600">December 21, 2025</div>
              </div>
            </div>

            <div className="mt-6 bg-gray-50 p-6 rounded-md">
              <h3 className="text-lg font-semibold">Offer of Admission — Rhitika Phuyal</h3>
              <p className="mt-2 text-sm text-gray-700">Dear Rhitika,</p>
              <p className="mt-2 text-sm text-gray-700">We are pleased to offer you admission to the <strong>Bachelor of Global Affairs (IR & Global Affairs major + Economics minor)</strong> program at Dollsies University beginning Fall 2026. You have been awarded a <strong>Full Ride Scholarship</strong> covering tuition, room and board, and an annual living stipend.</p>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-white border rounded">
                  <div className="text-sm text-gray-600">Program</div>
                  <div className="font-medium">Bachelor of Global Affairs (IR & Global Affairs major + Economics minor)</div>
                </div>
                <div className="p-3 bg-white border rounded">
                  <div className="text-sm text-gray-600">Scholarship</div>
                  <div className="font-medium">Full Ride Scholarship</div>
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-700">Next steps: please confirm your acceptance by replying to admissions@DU.soff or by clicking the "Send Acceptance Email" button below. Our International Student Office will contact you with visa guidance and pre-departure information.</p>

              <div className="mt-6 flex gap-3">
                <button onClick={sendDummyEmail} className="px-4 py-2 bg-yellow-400 rounded-md">Send Acceptance Email</button>
                <button onClick={() => setShowOffer(false)} className="px-4 py-2 border rounded-md">Close</button>
              </div>

              {sentEmail && <div className="mt-4 text-sm text-green-600"></div>}
            </div>

            <div className="mt-6 text-xs text-gray-500"></div>
          </div>
        </div>
      )}
    </div>
  );
}

// Simple confetti component using absolutely-positioned elements
function Confetti() {
  const pieces = Array.from({ length: 24 });
  return (
    <div aria-hidden className="w-full h-full relative">
      {pieces.map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-4 rounded-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 10}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
            background: randomColor(i),
            animation: `confetti-fall ${3 + Math.random() * 3}s linear ${Math.random() * 0.5}s infinite`,
          }}
        />
      ))}

      <style>{`
        @keyframes confetti-fall {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 1 }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0 }
        }
      `}</style>
    </div>
  );
}

function randomColor(i) {
  const colors = ["#F59E0B", "#06B6D4", "#3B82F6", "#EF4444", "#10B981", "#8B5CF6"];
  return colors[i % colors.length];
}
