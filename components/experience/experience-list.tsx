import Heading from "../heading";
import Experience from "./experience";
import TExperience from "../../lib/api/dto/experience.dto";

export interface ExperienceListProps {
  experiences: TExperience[];
}

const ExperienceList = ({ experiences }: ExperienceListProps) => {
  return (
    <section className="lg:p-4">
      <Heading text={"Experience"} />
      <div>
        {experiences.map((experience, index) => (
          <Experience key={`exp-${index}`} experience={experience} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceList;
