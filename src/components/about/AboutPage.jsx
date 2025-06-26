import React from "react";
import {
  GiAbstract085,
  GiAbstract096,
  GiAirMan,
  GiAmethyst,
} from "react-icons/gi";
import FeatureCard from "./FeatureCard";
import Header from "../common/Header";

const AboutPage = () => {
  const appTitle = "About LinkShortener";
  const appDescription =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, molestiae veritatis nam non ullam eligendi assumenda numquam velit deserunt labore, exercitationem incidunt praesentium veniam totam ex nulla eaque obcaecati officiis pariatur quisquam repellat qui? Sint et ab at deleniti odio iure alias minus placeat iste reiciendis hic temporibus minima rerum molestias inventore, doloremque corporis nihil nisi consequuntur excepturi, eos ducimus nemo. Inventore culpa tempore facere incidunt vero laboriosam ut doloribus. Eaque labore corrupti harum repellendus, non, nostrum aspernatur accusantium illum sint repellat esse excepturi dolores optio cum eveniet? Magni doloribus autem nemo eos unde voluptatum eum debitis tempora assumenda nobis?Lorem ipsum dolor sit, amet consectetur adipisicing elit.";

  const features = [
    {
      icon: <GiAbstract096 />,
      title: "Feature 1",
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                eius distinctio deleniti corporis veritatis impedit facere quas
                quos, amet cupiditate doloremque autem nobis, accusantium`,
    },
    {
      icon: <GiAbstract085 />,
      title: "Feature 2",
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                eius distinctio deleniti corporis veritatis impedit facere quas
                quos, amet cupiditate doloremque autem nobis, accusantium`,
    },
    {
      icon: <GiAirMan />,
      title: "Feature 3",
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                eius distinctio deleniti corporis veritatis impedit facere quas
                quos, amet cupiditate doloremque autem nobis, accusantium`,
    },
    {
      icon: <GiAmethyst />,
      title: "Feature 4",
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                eius distinctio deleniti corporis veritatis impedit facere quas
                quos, amet cupiditate doloremque autem nobis, accusantium`,
    },
  ];

  return (
    <div className="about-page flex items-center justify-center w-full h-full">
      <div className="flex flex-col gap-6 w-[80%] p-6 scroll-pt-80 mx-auto border-2 border-orange-100 rounded-md  shadow-2xl shadow-orange-100 text-orange-100">
        <h1 className="font-bold italic text-orange-100 text-4xl">
          {appTitle}
        </h1>
        <div className="pt-0 md:flex md:gap-6">
          <p className="md:w-1/2 p-2 pl-0  text-justify text-sm">
            {appDescription}
          </p>
          <div className="grid grid-cols-2 md:w-1/2 gap-4 p-2 bg-amber-100/20 rounded-md">
            {features.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
