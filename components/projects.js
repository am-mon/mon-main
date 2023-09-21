import { useState } from "react";
import projects from "../data/projects.json";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
import Button from "./button";
import Section from "./section";

export default function Projects(params) {
  const projects_data = projects.projects;
  console.log(projects_data);

  const [items, setItems] = useState(6);

  return (
    <>
      <div className="bg-zinc-50">
        <Section>
          <h2 className={utilStyles.headingXl}>Projects</h2>
          <ul className="flex flex-wrap justify-between text-left mt-10 flex-col md:flex-row">
            {projects_data?.slice(0, items).map((item) => (
              <li
                key={item.id}
                className="flex justify-between lg:w-[32%] md:w-[49%] w-full box-border p-6 md:mb-[2%] mb-3 shadow-lg shadow-grey-500/50 rounded bg-white"
              >
                <div className="w-[50%] relative">
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-sm text-zinc-600 mt-3">
                    {item.description}
                  </p>
                  <ul className="flex flex-wrap text-xs text-zinc-500 mt-3">
                    {item.programming_languages.map((list, index) => (
                      <li
                        key={index}
                        className="mr-1 mb-1 bg-zinc-200 px-2 py-1 rounded"
                      >
                        {list}
                      </li>
                    ))}
                  </ul>
                  <a
                    className="block mt-3 text-sm xl:absolute bottom-0 left-0 static"
                    href={item.url}
                    target="_blank"
                  >
                    <Button>View Website</Button>
                  </a>
                </div>
                <div className="w-[47%]">
                  {item.img && (
                    <Image
                      src={`/assets/images/${item.img}`}
                      width={500}
                      height={500}
                      alt={item.title}
                    />
                  )}
                </div>
              </li>
            ))}
          </ul>
          {projects_data?.length > items && (
            <>
              <button
                onClick={() => setItems(items + 6)}
                className="block decoration-0 hover:decoration-0 mt-5 mx-auto bg-black text-white py-2 px-5 rounded-lg hover:bg-orange-500"
              >
                View More
              </button>
            </>
          )}
        </Section>
      </div>
    </>
  );
}