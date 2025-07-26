import React from "react";
import { location } from "@/data/location";
import NotFound from "@/components/NotFound";
import SlashDivider from "@/components/SlashDivider";
import Links from "@/components/Links";

const NotFoundPage = () => {
  return (
    <>
      <NotFound />
      <SlashDivider />
      <Links />
    </>
  );
};

export default NotFoundPage;
