import BioSection from "@/components/bio-section";
import ExperienceList from "@/components/experience/experience-list";
import TExperience from "@/lib/api/dto/experience.dto";
import Nav from "@/components/nav";
import { getAboutMe } from "@/lib/api/about-me";
import { getExperiences } from "@/lib/api/experience";

export default async function Home() {
  const aboutMe = await getAboutMe();
  const xps: TExperience[] = await getExperiences();
  const dummyContent = `lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit voluptate officia assumenda minus expedita saepe autem in, eius distinctio repudiandae illum dolor quasi, voluptatem illo numquam, doloremque alias ipsum rerum.`;
  return (
    <>
      <main className="h-full p-4 lg:w-8/12 lg:m-auto lg:flex lg:justify-center lg:content-center lg:gap-8">
        <Nav />
        <article className="lg:h-full lg:overflow-y-scroll scroll-smooth scroll-m-0 no-scrollbar">
          <BioSection title="about" content={aboutMe} />
          <ExperienceList experiences={xps} />
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
