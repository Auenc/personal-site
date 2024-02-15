import { get } from "./client";
import TExperience, { StrapiExerience } from "./dto/experience.dto";

export const getExperiences = async (): Promise<TExperience[]> => {
  const res = await get("/experiences");
  const data = await res.json();
  return data.data.map((data: StrapiExerience) => ({
    id: data.id,
    ...data.attributes,
  }));
};
