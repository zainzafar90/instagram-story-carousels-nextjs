import dynamic from "next/dynamic";

const StoryCarousel = dynamic(() => import("@/components/story-carousel"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="space-y-12 pb-6">
      <StoryCarousel />
    </main>
  );
}
