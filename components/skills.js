import skills from "../data/skills.json";
import utilStyles from "../styles/utils.module.css";
import Section from "./section";
import Transition_title from "./transition_title";

export default function Skills(params) {
  const skills_data = skills.skills;
  console.log(skills_data);

  return (
    <>
      <div className="bg-zinc-100">
        <Section>
          <Transition_title>
            <h2 className={utilStyles.headingXl}>Programming Skills</h2>
          </Transition_title>
          <ul className="flex flex-wrap justify-between text-left mt-10 flex-col md:flex-row">
            {skills_data?.map((item) => (
              <li key={item.id} className="md:w-[48%] w-full mb-2">
                <div className="flex justify-between mb-1 text-base font-medium">
                  <span>{item.title}</span>
                  <span>{item.rate}%</span>
                </div>
                <div className="w-full bg-zinc-300 rounded-full h-2.5 mb-4 dark:bg-zinc-700">
                  <div
                    className="bg-zinc-500 h-2.5 rounded-full dark:bg-zinc-300"
                    style={{ width: `${item.rate}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </>
  );
}
