import BioSection from "@/components/bio-section";
import Nav from "@/components/nav";
import Socials from "@/components/socials";

export default function Home() {
  const dummyContent = `lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit voluptate officia assumenda minus expedita saepe autem in, eius distinctio repudiandae illum dolor quasi, voluptatem illo numquam, doloremque alias ipsum rerum.`;
  return (
    <>
      <main className="h-full p-4 lg:w-8/12 lg:m-auto lg:flex lg:justify-center lg:content-center lg:gap-8">
        <Nav />
        <article className="lg:h-full lg:overflow-y-scroll scroll-smooth scroll-m-0 no-scrollbar">
          <BioSection
            title="about"
            content={dummyContent + dummyContent + dummyContent}
          />
          <BioSection
            title="experience"
            content={dummyContent + dummyContent + dummyContent}
          />
          <BioSection
            title="projects"
            content={dummyContent + dummyContent + dummyContent}
          />
          <BioSection
            title="blog"
            content={dummyContent + dummyContent + dummyContent}
          />
        </article>
      </main>
    </>
  );
}
