import Heading from "./heading";
import Markdown from "react-markdown";

export interface BioSectionProps {
  title: string;
  content: string;
}

const BioSection = ({ title, content }: BioSectionProps) => {
  return (
    <section className="lg:p-4">
      <Heading text={title} />
      <Markdown>{content}</Markdown>
    </section>
  );
};

export default BioSection;
