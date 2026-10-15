import { useState } from 'react';
import { Mail, Phone, Camera, CheckCircle2, ChevronDown } from 'lucide-react';
import { GEAR_KIT, PRESS_AWARDS, SERVICES, FAQS } from '../data/portfolioData';

export default function AboutPage() {
  const [selectedService, setSelectedService] = useState('Brand film');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    date: '',
    budget: '₹1 Lakh – ₹3 Lakh',
    message: ''
  });

  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const serviceTypes = ['Travel & Road trip', 'Photo shoot', 'Brand film', 'Music video', 'Editing only'];

  return (
    <div className="bg-[#D9D7D1] text-[#161616]">
      {/* 1. About Hero Section */}
      <section className="max-w-[1320px] mx-auto px-6 md:px-8 pt-16 pb-20 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-end">
        <div className="flex flex-col gap-8">
          <h1 className="m-0 font-['Big_Shoulders_Display',sans-serif] font-black text-6xl sm:text-7xl md:text-8xl lg:text-[140px] leading-[0.84] uppercase tracking-tight">
            Hi, I'm Harendra Beniwal.
          </h1>
          <p className="m-0 text-xl leading-relaxed text-[#2E2D2A] max-w-xl">
            Cinematographer, travel filmmaker, and director behind <strong>Dark Night Films</strong> (<a href="https://www.instagram.com/_darknightfilms/" target="_blank" rel="noreferrer" className="text-[#C8281E] hover:underline font-semibold">@_darknightfilms</a>). Dedicated to capturing high-altitude road trips, motorcycle diaries, moody narrative cinema, and commercial brand stories with visceral depth.
          </p>

          {/* Quick Details dl */}
          <dl className="m-0 grid grid-cols-2 border-t-2 border-[#161616]">
            <div className="py-4 pr-4 flex flex-col gap-1 border-b border-[#B9B6AF]">
              <dt className="text-xs font-mono uppercase text-[#55524C]">Based in</dt>
              <dd className="m-0 font-bold text-base">Jaipur, Rajasthan &amp; Mumbai</dd>
            </div>
            <div className="py-4 pr-4 flex flex-col gap-1 border-b border-[#B9B6AF]">
              <dt className="text-xs font-mono uppercase text-[#55524C]">Shooting since</dt>
              <dd className="m-0 font-bold text-base">2018</dd>
            </div>
            <div className="py-4 pr-4 flex flex-col gap-1">
              <dt className="text-xs font-mono uppercase text-[#55524C]">Languages</dt>
              <dd className="m-0 font-bold text-base">Hindi, English, Rajasthani</dd>
            </div>
            <div className="py-4 pr-4 flex flex-col gap-1">
              <dt className="text-xs font-mono uppercase text-[#55524C]">Travel</dt>
              <dd className="m-0 font-bold text-base">Available Across India &amp; Worldwide</dd>
            </div>
          </dl>
        </div>

        {/* Director Portrait */}
        <div className="aspect-[4/5] max-h-[640px] bg-[#3A3936] overflow-hidden rounded-[2px] border border-[#161616] shadow-xl relative">
          <img
            src="/p3.jpg"
            alt="Dark Night Films Director"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 font-mono text-xs text-[#EDEBE6] bg-black/75 px-3 py-1.5 backdrop-blur-xs">
            [Director • On Set Monitoring ARRI RAW]
          </div>
        </div>
      </section>

      {/* 2. In The Bag (Gear / Kit) */}
      <section aria-label="Kit" className="bg-[#121212] text-[#EDEBE6] py-20 md:py-24 border-y border-[#2A2A28]">
        <div className="max-w-[1320px] mx-auto px-6 md:px-8 flex flex-col gap-10">
          <h2 className="m-0 font-['Big_Shoulders_Display',sans-serif] font-black text-5xl sm:text-6xl md:text-8xl uppercase tracking-tight">
            In the bag
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {GEAR_KIT.map((kit, idx) => (
              <div key={idx} className="border-t border-[#3A3936] pt-5 flex flex-col gap-2">
                <h3 className="m-0 font-['Big_Shoulders_Display',sans-serif] font-bold text-2xl uppercase tracking-wide text-white">
                  {kit.category}
                </h3>
                <p className="m-0 text-sm text-[#C9C6BE] leading-relaxed">
                  {kit.items}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Screenings & Press */}
      <section aria-label="Recognition" className="max-w-[1320px] mx-auto px-6 md:px-8 py-20 md:py-24 flex flex-col gap-8">
        <h2 className="m-0 font-['Big_Shoulders_Display',sans-serif] font-black text-5xl sm:text-6xl md:text-8xl uppercase tracking-tight">
          Screenings &amp; press
        </h2>
        <div className="flex flex-col border-t-2 border-[#161616]">
          {PRESS_AWARDS.map((item, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6 py-5 border-b border-[#B9B6AF] font-sans"
            >
              <span className="w-24 font-mono text-sm text-[#55524C]">{item.year}</span>
              <span className="flex-1 font-bold text-lg text-[#161616]">{item.award}</span>
              <span className="text-sm font-mono text-[#4A4843]">[{item.project}]</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Services */}
      <section aria-label="Services" className="max-w-[1320px] mx-auto px-6 md:px-8 pb-20 md:pb-24 flex flex-col gap-10">
        <h2 className="m-0 font-['Big_Shoulders_Display',sans-serif] font-black text-5xl sm:text-6xl md:text-8xl uppercase tracking-tight">
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((srv, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-[2px] flex flex-col justify-between gap-6 ${
                srv.featured
                  ? 'bg-[#161616] text-[#EDEBE6] border-2 border-[#C8281E] shadow-xl'
                  : 'bg-[#EDEBE6] text-[#161616] border border-[#B9B6AF]'
              }`}
            >
              <div className="flex flex-col gap-4">
                <h3 className="m-0 font-['Big_Shoulders_Display',sans-serif] font-black text-3xl md:text-4xl uppercase tracking-wide">
                  {srv.title}
                </h3>
                <p className={`m-0 text-sm leading-relaxed ${srv.featured ? 'text-[#C9C6BE]' : 'text-[#4A4843]'}`}>
                  {srv.desc}
                </p>
                <ul className="m-0 p-0 list-none flex flex-col gap-2 pt-2 border-t border-black/10 dark:border-white/10 text-xs font-mono">
                  {srv.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2">
                      <span className="text-[#C8281E]">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t border-black/10 dark:border-white/10 flex justify-between items-baseline">
                <span className="font-['Big_Shoulders_Display',sans-serif] font-bold text-2xl tracking-wide">
                  {srv.price}
                </span>
                <a
                  href="#contact"
                  className={`text-xs uppercase font-mono font-bold tracking-wider hover:underline ${
                    srv.featured ? 'text-[#C8281E]' : 'text-[#161616]'
                  }`}
                >
                  Enquire →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Good To Know (FAQs) */}
      <section aria-label="Questions" className="max-w-[900px] mx-auto px-6 md:px-8 pb-24 flex flex-col gap-8">
        <h2 className="m-0 font-['Big_Shoulders_Display',sans-serif] font-black text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-center md:text-left">
          Good to know
        </h2>
        <div className="flex flex-col border-t border-[#B9B6AF]">
          {FAQS.map((faq, fIdx) => {
            const isOpen = openFaq === fIdx;
            return (
              <div key={fIdx} className="border-b border-[#B9B6AF] py-5">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                  className="w-full text-left flex justify-between items-center gap-4 cursor-pointer focus:outline-none group"
                >
                  <span className="font-bold text-lg md:text-xl text-[#161616] group-hover:text-[#C8281E] transition-colors">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-[#55524C] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#C8281E]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="m-0 mt-3 text-base text-[#4A4843] leading-relaxed animate-fade-in font-normal">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. Booking & Contact Form */}
      <section id="contact" className="bg-[#121212] text-[#EDEBE6] py-24 md:py-28 border-t border-[#2A2A28]">
        <div className="max-w-[1320px] mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Info Column */}
          <div className="flex flex-col gap-8">
            <h2 className="m-0 font-['Big_Shoulders_Display',sans-serif] font-black text-6xl sm:text-7xl md:text-9xl leading-[0.86] uppercase tracking-tight">
              Let's make something.
            </h2>
            <p className="m-0 text-xl text-[#C9C6BE] leading-relaxed max-w-md">
              Tell us about your project, vision, schedule, and goals. We reply with initial thoughts and availability within 24 hours.
            </p>

            <div className="flex flex-col gap-4 text-base font-medium">
              <a
                href="mailto:hello@darknightfilms.com"
                className="inline-flex items-center gap-3 text-[#EDEBE6] hover:text-[#C8281E] transition-colors font-mono"
              >
                <Mail size={18} className="text-[#C8281E]" /> hello@darknightfilms.com
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-[#EDEBE6] hover:text-[#C8281E] transition-colors font-mono"
              >
                <Phone size={18} className="text-[#C8281E]" /> WhatsApp: +91 98765 43210
              </a>
              <a
                href="https://www.instagram.com/_darknightfilms/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-[#EDEBE6] hover:text-[#C8281E] transition-colors font-mono"
              >
                <Camera size={18} className="text-[#C8281E]" /> Instagram: @_darknightfilms
              </a>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="bg-[#161616] p-8 md:p-10 rounded-[2px] border border-[#2A2A28]">
            {formSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                <CheckCircle2 size={56} className="text-[#C8281E]" />
                <h3 className="m-0 font-['Big_Shoulders_Display',sans-serif] font-black text-4xl uppercase text-white">
                  Enquiry Received
                </h3>
                <p className="m-0 text-base text-[#C9C6BE] max-w-sm">
                  Thank you! We've received your shoot request for <strong>{selectedService}</strong> and will be in touch within 24 hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-[#2A2A28] hover:bg-[#3A3936] text-white text-sm font-semibold rounded-[2px] cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Shoot Type Buttons */}
                <fieldset className="m-0 p-0 border-0 flex flex-col gap-2">
                  <legend className="text-sm font-medium text-[#C9C6BE] mb-2 font-mono">
                    WHAT DO YOU NEED?
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {serviceTypes.map((type) => {
                      const isPicked = selectedService === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setSelectedService(type)}
                          aria-pressed={isPicked}
                          className={`min-h-[42px] px-4 rounded-full text-sm font-medium transition-all cursor-pointer ${
                            isPicked
                              ? 'bg-[#C8281E] text-white border border-[#C8281E]'
                              : 'bg-transparent text-[#EDEBE6] border border-[#5A5853] hover:border-white'
                          }`}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                {/* Input Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="flex flex-col gap-2 text-sm font-medium text-[#C9C6BE]">
                    Your name
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Aryan Sharma"
                      className="min-h-[48px] px-3.5 rounded-[2px] border border-[#5A5853] bg-[#1C1C1A] text-[#EDEBE6] placeholder-[#55524C] text-sm focus:border-[#C8281E] outline-none"
                    />
                  </label>

                  <label className="flex flex-col gap-2 text-sm font-medium text-[#C9C6BE]">
                    Email or phone
                    <input
                      type="text"
                      required
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="aryan@brand.com"
                      className="min-h-[48px] px-3.5 rounded-[2px] border border-[#5A5853] bg-[#1C1C1A] text-[#EDEBE6] placeholder-[#55524C] text-sm focus:border-[#C8281E] outline-none"
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="flex flex-col gap-2 text-sm font-medium text-[#C9C6BE]">
                    Estimated shoot date
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="min-h-[48px] px-3.5 rounded-[2px] border border-[#5A5853] bg-[#1C1C1A] text-[#EDEBE6] text-sm focus:border-[#C8281E] outline-none [color-scheme:dark]"
                    />
                  </label>

                  <label className="flex flex-col gap-2 text-sm font-medium text-[#C9C6BE]">
                    Budget range
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="min-h-[48px] px-3.5 rounded-[2px] border border-[#5A5853] bg-[#1C1C1A] text-[#EDEBE6] text-sm focus:border-[#C8281E] outline-none"
                    >
                      <option>Under ₹50,000</option>
                      <option>₹50,000 – ₹1 Lakh</option>
                      <option>₹1 Lakh – ₹3 Lakh</option>
                      <option>₹3 Lakh – ₹5 Lakh</option>
                      <option>₹5 Lakh+</option>
                    </select>
                  </label>
                </div>

                <label className="flex flex-col gap-2 text-sm font-medium text-[#C9C6BE]">
                  Tell me about the project
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your concept, locations, deliverables, or inspiration..."
                    className="p-3.5 rounded-[2px] border border-[#5A5853] bg-[#1C1C1A] text-[#EDEBE6] placeholder-[#55524C] text-sm focus:border-[#C8281E] outline-none resize-y"
                  ></textarea>
                </label>

                <button
                  type="submit"
                  className="min-h-[52px] bg-[#C8281E] hover:bg-[#a51e16] text-white font-semibold text-base rounded-[2px] transition-colors cursor-pointer"
                >
                  Send enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
