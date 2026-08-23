import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="relative mx-auto w-full max-w-3xl px-6 pt-10">
      <div className="glow-soft pointer-events-none absolute inset-x-0 top-0 mx-auto h-[120%] w-[90vw] max-w-3xl" />
      <div className="relative z-10 flex flex-col gap-8">
        <div className="grid size-[88px] place-items-center rounded-lg bg-gradient-to-br from-[#6F8CCA] to-[#2B2B2B] text-2xl font-bold text-white sm:size-[120px] sm:text-3xl">
          {profile.initials}
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row">
            <div className="space-y-2 font-semibold">
              <h1 className="text-[28px] leading-none text-neutral-900">{profile.name}</h1>
              <h2 className="font-mono text-base uppercase text-[#6F8CCA]">{profile.title}</h2>
            </div>
            <div className="flex gap-2">
              <a
                href={profile.gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="grid size-10 place-items-center rounded-[8px] border border-black/15 bg-white text-neutral-700 transition hover:bg-black/5"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid size-10 place-items-center rounded-[8px] border border-black/15 bg-white text-[#0A66C2] transition hover:bg-black/5"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                </svg>
              </a>
              <a
                href={profile.gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-[8px] border border-black/15 bg-gradient-to-b from-[#484848] to-[#242424] px-4 py-2 text-sm font-medium text-white transition hover:opacity-95"
              >
                Let&rsquo;s Chat
              </a>
            </div>
          </div>

          <p className="max-w-2xl tracking-tight text-neutral-900 md:text-base">
            I build <span className="font-semibold">supply chain systems</span> that move goods{" "}
            <span className="font-semibold">more efficiently at scale</span>.
          </p>

          <a
            href={profile.resume}
            download
            className="w-fit rounded-[8px] border border-black/15 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-black/5"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
