export interface HeadingProps {
  text: string;
}

const Heading = ({ text }: HeadingProps) => {
  return (
    <div className="sticky top-0 lg:relative bg-slate-900/75 my-8 lg:my-0 py-4 backdrop-blur">
      <h2 id={text} className="font-semibold text-lg text-gray-200 uppercase">
        {text}
      </h2>
    </div>
  );
};

export default Heading;
