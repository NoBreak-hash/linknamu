import type { LinkItem } from "@/data/profile";

export default function LinkCard({ link }: { link: LinkItem }) {
  return (
    <li>
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        data-link-id={link.id}
        className="block w-full rounded-2xl border-2 border-stone-900 bg-white px-5 py-4 text-center font-semibold shadow-[0_3px_0_0_rgba(28,25,23,1)] transition hover:-translate-y-0.5 hover:bg-emerald-50 active:translate-y-0.5 active:shadow-none focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400 dark:border-stone-200 dark:bg-stone-900 dark:shadow-[0_3px_0_0_rgba(231,229,228,1)] dark:hover:bg-stone-800"
      >
        {link.title}
        {link.description && (
          <span className="mt-1 block text-sm font-normal text-stone-500 dark:text-stone-400">
            {link.description}
          </span>
        )}
      </a>
    </li>
  );
}
