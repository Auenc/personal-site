import Markdown from "react-markdown";

export interface BioSectionProps {
  title: string;
  content: string;
}

const BioSection = ({ title, content }: BioSectionProps) => {
  return (
    <section className="lg:p-4">
      <div className="sticky top-0 lg:relative bg-slate-900/75 my-8 lg:my-0 py-4 backdrop-blur">
        <h2
          id={title}
          className="font-semibold text-lg text-gray-200 uppercase"
        >
          {title}
        </h2>
      </div>
      <Markdown>{content}</Markdown>
    </section>
  );
};

export default BioSection;
