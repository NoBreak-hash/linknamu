type ProfileHeaderProps = {
  name: string;
  bio: string;
  avatarUrl?: string;
};

export default function ProfileHeader({ name, bio, avatarUrl }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="h-36 w-36 overflow-hidden rounded-full border-2 border-stone-900 bg-emerald-100 dark:border-stone-100 dark:bg-emerald-900">
        {avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={avatarUrl} alt={`${name} 프로필 사진`} className="h-full w-full object-cover" />
        ) : (
          <span
            aria-hidden="true"
            className="flex h-full w-full items-center justify-center text-5xl font-bold text-emerald-800 dark:text-emerald-200"
          >
            {name.slice(0, 1)}
          </span>
        )}
      </div>
      <h1 className="mt-5 text-2xl font-bold">{name}</h1>
      <p className="mt-2 text-base text-stone-600 dark:text-stone-400">{bio}</p>
    </header>
  );
}
