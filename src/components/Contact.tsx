import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <footer className="mx-auto w-full max-w-3xl border-t border-black/10 px-6 py-8">
      <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-neutral-400">
          © {new Date().getFullYear()} {profile.name}.
        </p>
        <div className="flex items-center gap-3">
          <a
            href={profile.gmailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs font-semibold tracking-wide text-neutral-500 uppercase transition hover:text-[#6F8CCA]"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs font-semibold tracking-wide text-neutral-500 uppercase transition hover:text-[#6F8CCA]"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
