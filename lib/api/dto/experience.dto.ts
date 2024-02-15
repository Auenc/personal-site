type Experience = {
  id: number;
  company: string;
  title: string;
  description: string;
  start: string;
  end: string;
  where: string;
};

export type StrapiExerience = {
  id: number;
  attributes: Omit<Experience, "id">;
};

export default Experience;
