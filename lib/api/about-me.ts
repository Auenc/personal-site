import { get } from "./client";
import { AboutMeDto } from "./dto/about-me.dto";
import { Strapi } from "./dto/strapi";

export const getAboutMe = async (): Promise<string> => {
  const res = await get("/about-me");
  const { data: aboutMeDto }: Strapi<AboutMeDto> = await res.json();

  if (!aboutMeDto) {
    throw new Error("Failed to fetch about me");
  }

  return aboutMeDto.attributes.content;
};
