import utilStyles from "../styles/utils.module.css";
import Section from "./section";
import Transition from "./transition";
import Transition_title from "./transition_title";

export default function Get_in_touch(params) {
  return (
    <>
      <div className="bg-zinc-200">
        <Section>
          <div
            className={`min-h-screen flex justify-center items-center text-center ${utilStyles.amm_shape_bg}`}
          >
            <div>
              <Transition_title>
                <h4 className="text-xl md:text-4xl font-medium mb-5 md:mb-10">
                  Hello! Thank you for visiting us! <br />
                  We will get back soon.
                </h4>
              </Transition_title>
              <Transition>
                <h1 className="text-3xl md:text-6xl font-bold ">
                  This page is under maintenance.
                </h1>
              </Transition>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}
