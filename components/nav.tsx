"use client";
import Socials from "./socials";

const routes = ["about", "experience"];

const Nav = () => {
  return (
    <nav className="w-8/12 lg:w-auto lg:h-full lg:w-100 flex flex-col gap-4 lg:gap-24 lg:content-between lg:justify-between">
      <section>
        <h1 className="text-4xl font-bold whitespace-nowrap text-gray-200">
          Lewis Campbell
        </h1>
        <h3 className="text-base font-semibold my-2 text-gray-200">
          Software developer
        </h3>
        <p className="whitespace-normal text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos maxime
          quasi officiis nobis.
        </p>
      </section>
      <section className="hidden lg:block lg:flex-1">
        <ul className="tree">
          {routes.map((route, i) => (
            <li key={`link-${i}`} className={`tracking-widest uppercase`}>
              <a href={`#${route}`}>{route}</a>
            </li>
          ))}
        </ul>
      </section>
      <section className="lg:self-center">
        <Socials
          github="https://github.com/Auenc"
          linkedin="https://www.linkedin.com/in/lewis-campbell-930b3649/"
          email="mailto:ljoncb@gmail.com"
        />
      </section>
    </nav>
  );
};

export default Nav;
