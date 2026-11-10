export type LinkItem = {
  id: string;
  title: string;
  url: string;
  description?: string;
};

export type Profile = {
  name: string;
  bio: string;
  avatarUrl?: string;
  links: LinkItem[];
};

// TODO: 아래는 화면 확인용 더미 값입니다. 실제 내용으로 교체하세요.
// - avatarUrl: public 폴더에 사진을 넣고 경로를 바꾸면 됩니다. (예: "/avatar.jpg")
// - url: 각 서비스의 내 프로필 주소로 바꾸세요.
export const profile: Profile = {
  name: "김낙진",
  bio: "세계최강 원통형 베터리",
  avatarUrl: "/avatar-placeholder.svg",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com/your-id" },
    { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/in/your-id" },
    { id: "blog", title: "Blog", url: "https://your-blog.example.com" },
  ],
};
