import SpotifyNP from "@/components/SpotifyNP";
import Connect from "@/components/Connect";
import YapAboutMe from "@/components/YapAboutMe";
import SpotifyNP2 from "@/components/SpotifyNP2";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 w-full h-full">
      <YapAboutMe />
      {/* <SpotifyNP /> */}
      <SpotifyNP2 />
      <Connect />
    </div>
  );
}
