import { forwardRef, Ref } from "react";
import Link from "next/link";
type HeroSectionProps = {};

const HeroSection = forwardRef<HTMLOptionElement, HeroSectionProps>(
  (_, ref: Ref<HTMLOptionElement>) => {
    return (
      <div>
        <section
          className="min-h-screen flex items-center xl:px-4 py-20 bg-black"
          ref={ref}
        >
          <div className="xl:mx-12 lg:px-20 md:px-14 px-7 font-montserratB text-white ">
            <div className="lg:text-7xl heading  translate-y-24 md:text-6xl text-5xl md:leading-[4rem] lg:leading-[4.96rem]">
              Sahyadri Open Source{" "}
              <span className="text-chartreuse-200">Community</span>
            </div>{" "}
            <div>
              <p className="md:grow clip-path opacity-0 translate-y-24 form grow font-montserratR lg:w-[50rem] pt-5">
                A community driven by tech enthusiasts and open-source
                contributors, to help young students to be part of the
                open-source ecosystem by providing training and skill
                development.
              </p>
              <Link
                href="/"
                className="md:grow clip-path opacity-0 translate-y-24 form flex mt-7 text-sm justify-center rounded-full items-center bg-chartreuse-200 hover:bg-white text-black w-[7.25rem] h-[2.125rem]"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
);

HeroSection.displayName = "HeroSection";
export default HeroSection;
