import { OrbitingCircles } from "./OrbitingCircles";

export function FrameWorks() {
  const skills = [
    "csharp",
    "css3",
    "git",
    "github",
    "html5",
    "javascript",
    "microsoft",
    "react",
    "sqlite",
    "stripe",
    "tailwindcss",
    "threejs",
    "visualstudiocode",
    "vitejs",
    "wordpress",
  ];

  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center ">
      <OrbitingCircles iconSize={40} radius={200}>
        {skills.map((skill, index) => (
          <Icon
            key={index}
            src={`/assets/logos/${skill}.svg`}
            className="w-5"
          />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={27} radius={125} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon
            key={index}
            src={`/assets/logos/${skill}.svg`}
            className="w-5"
          />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => {
  return <img src={src} className="rounded-sm hover:scale-110 duration-200" />;
};
