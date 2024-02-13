import BioSection from "@/components/bio-section";
import Socials from "@/components/socials";

export default function Home() {
  const dummyContent = `lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit voluptate officia assumenda minus expedita saepe autem in, eius distinctio repudiandae illum dolor quasi, voluptatem illo numquam, doloremque alias ipsum rerum.`;
  return (
    <>
      <main className="h-full p-4 lg:w-8/12 lg:m-auto lg:flex lg:justify-center lg:content-center lg:gap-8">
        <nav className="w-8/12 lg:w-auto lg:h-full lg:w-100 flex flex-col gap-4 lg:gap-24 lg:content-between lg:justify-between">
          <section>
            <h1 className="text-4xl font-bold whitespace-nowrap text-gray-200">
              Lewis Campbell
            </h1>
            <h3 className="text-base font-semibold my-2 text-gray-200">
              Freelance software developer
            </h3>
            <p className="whitespace-normal text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              maxime quasi officiis nobis.
            </p>
          </section>
          <section className="hidden lg:block lg:flex-1">
            <ul className="tree">
              <li className="active tracking-widest uppercase">
                <a href="#about">about</a>
              </li>
              <li className="tracking-widest uppercase">
                <a href="#experience">experience</a>
              </li>
              <li className="tracking-widest uppercase">
                <a href="#projects">PROJECTS</a>
              </li>
              <li className="tracking-widest uppercase">
                <a href="#blog">blog</a>
              </li>
            </ul>
          </section>
          <section className="lg:self-center">
            <Socials
              twitter="https://twitter.com"
              youtube="https://youtube.com"
              github="https://github.com"
              linkedin="https://linkedin.com"
              email="mailto:ljoncb@gmail.com"
            />
          </section>
        </nav>
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
