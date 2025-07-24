
import SpotifyNP from "@/components/SpotifyNP";
import Connect from "@/components/Connect";
import YapAboutMe from "@/components/YapAboutMe";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 w-full h-full">
      <YapAboutMe/>
      <SpotifyNP />
      <Connect />
    </div>
  );
}
