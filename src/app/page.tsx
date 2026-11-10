import { profile } from "@/data/profile";
import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-4 pb-10 pt-6 sm:pt-12">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>

      <div className="mt-4">
        <ProfileHeader name={profile.name} bio={profile.bio} avatarUrl={profile.avatarUrl} />
      </div>

      <ul className="mt-10 flex flex-col gap-6">
        {profile.links.map((link) => (
          <LinkCard key={link.id} link={link} />
        ))}
      </ul>

      <footer className="mt-auto pt-12 text-center text-xs text-stone-400 dark:text-stone-500">
        🌳 링크나무
      </footer>
    </main>
  );
}
