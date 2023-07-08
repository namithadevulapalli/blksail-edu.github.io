import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Image from "@theme/IdealImage";

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<"svg">>;
  Img?: React.ComponentType<Image>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Immersive Experience",
    Img: require("./images/fishing_auv_laspezia.jpg"),
    description: (
      <>
        Understand the principles of underwater robotics, program in Python and
        C++, control underwater vehicles, and explore real-world applications
        and challenges.
      </>
    ),
  },
  {
    title: "Hands-on Learning",
    Img: require("./images/three_bluerov2s.jpg"),
    description: (
      <>
        Get practical experience programming and operating underwater robotic
        vehicles with guided hands-on sessions.
      </>
    ),
  },
  {
    title: "Empowering Skills",
    Img: require("./images/assembling_beaver.jpg"),
    description: (
      <>
        Develop skills that will help you explore future careers in marine
        engineering, oceanography, environmental science, and more.
      </>
    ),
  },
];

function Feature({ title, Svg, Img, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {Svg && <Svg className={styles.featureSvg} role="img" />}
        {Img && <Image className={styles.featureImg} img={Img} />}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
