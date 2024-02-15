import TExperience from "../../lib/api/dto/experience.dto";

export interface ExperienceProps {
  experience: TExperience;
}

const Experience = ({ experience }: ExperienceProps) => {
  let dates = experience.start;
  if (experience.end) {
    dates += " - " + experience.end;
  }
  return (
    <div className="pb-4 last:pb-0">
      <div>
        <span className="text-lg font-semibold mr-2 text-gray-200">
          {experience.company}
        </span>
        <span>{experience.title}</span>
      </div>
      <span className="text-sm text-gray-300">
        {dates}, {experience.where}
      </span>
      <p className="whitespace-normal text-base">{experience.description}</p>
    </div>
  );
};

export default Experience;
