import React from "react";
import SlashDivider from "./SlashDivider";

const YapAboutMe = () => {
  return (
    <>
      <section className="w-full flex flex-col gap-4 justify-start p-[0.4rem] leading-[1.625rem]">
        <h2 className="font-CabinetGrotesk_ExtraLight font-CabinetGrotesk_Medium text-lg text-[#ddbb90]">
          Hola, señorita or monsieur—whichever you are—I'm{" "}
          <mark className="text-[#ddbb90]">srummanf</mark>.
        </h2>

        <p className="font-CabinetGrotesk_ExtraLight font-CabinetGrotesk_Thin text-md text-gray-400">
          A developer who loves to build, break, and rebuild — mostly in code,
          occasionally in life.
        </p>
        <p className="font-CabinetGrotesk_ExtraLight font-CabinetGrotesk_ExtraLight text-md text-gray-400">
          You'll find me somewhere between solving bugs, reading Ghalib,
          exploring AI models, and watching reels I said I wouldn't.
        </p>
        <p className="font-CabinetGrotesk_ExtraLight font-CabinetGrotesk_ExtraLight text-md text-gray-400">
          I read quotes of philosophy — Fyodor, Camus, Kafka — and somehow still
          believe in love. Urdu poetry? Absolutely. Romantic nonsense? Count me
          in. I'm the kind of guy who'll debug code and recite Ghalib in the
          same breath.
        </p>
        <p className="font-CabinetGrotesk_ExtraLight font-CabinetGrotesk_Light text-md text-gray-400">
          I'm a romantic at heart, spiritual by nature, and somewhere in between
          the calm of silence and the chaos of conversations. An ambivert who
          talks deeply and also nonsense — both with equal joy.
        </p>
        <p className="font-CabinetGrotesk_ExtraLight font-CabinetGrotesk_Thin text-md text-gray-400 mb-0">
          Not exactly a music maniac, but I do vibe to ghazals and soft songs
          when they find me or hit me on a rainy night.
        </p>
        <p className="font-CabinetGrotesk_ExtraLight font-CabinetGrotesk_Light text-sm text-gray-400">
          I admire the brilliance of{" "}
          <span className="text-[#b56333]">Iron Man</span> — tech, heart,
          sacrifice. But there’s something about Al Pacino. *The Godfather*?
          Legendary. *Scent of a Woman*? Don’t even get me started —{" "}
          <span className="italic text-[#ddbb90]">Woo Haah!</span>
        </p>
        <SlashDivider />
        {/* <p className="font-CabinetGrotesk_Thin text-md text-gray-400 mb-0">
          So yeah, that's me. <mark className="text-[#ddbb90]">srummanf</mark> —
          building, writing, vibing. Always down for a thoughtful chat or
          complete nonsense. Just depends on the hour.
        </p> */}
      </section>
    </>
  );
};

export default YapAboutMe;
