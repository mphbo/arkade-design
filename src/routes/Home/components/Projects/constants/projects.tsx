export interface IProject {
  name: string;
  summary: string;
  image: string;
  learnMore?: {
    text: JSX.Element;
    image: string;
  };
}

export const projects: IProject[] = [
  {
    name: "Dark Arkade",
    summary: "Music Portfolio Site",
    image: "/dark-arkade.png",
    learnMore: {
      text: (
        <p>
          The Dark Arkade is not a person, it is not a being. The Dark Arkade is
          the walls around us, the floor we stand on, the sky above us and the
          earth below. It is the world we live in whether you believe it or
          not... Welcome to THE DARK ARKADE 🕹
        </p>
      ),
      image: "/dark-arkade2.png",
    },
  },
  {
    name: "Dark Arkade (Larry Tate)",
    summary: "Music Portfolio Site",
    image: "/dark-arkade.png",
    learnMore: {
      text: (
        <p>
          The Dark Arkade is not a person, it is not a being. The Dark Arkade is
          the walls around us, the floor we stand on, the sky above us and the
          earth below. It is the world we live in whether you believe it or
          not... Welcome to THE DARK ARKADE 🕹
        </p>
      ),
      image: "/dark-arkade2.png",
    },
  },
  {
    name: "Dark Arkade (Larry Tate)",
    summary: "Music Portfolio Site",
    image: "/dark-arkade.png",
    learnMore: {
      text: (
        <p>
          The Dark Arkade is not a person, it is not a being. The Dark Arkade is
          the walls around us, the floor we stand on, the sky above us and the
          earth below. It is the world we live in whether you believe it or
          not... Welcome to THE DARK ARKADE 🕹
        </p>
      ),
      image: "/dark-arkade2.png",
    },
  },
  {
    name: "Dark Arkade (Larry Tate)",
    summary: "Music Portfolio Site",
    image: "/dark-arkade.png",
    learnMore: {
      text: (
        <p>
          The Dark Arkade is not a person, it is not a being. The Dark Arkade is
          the walls around us, the floor we stand on, the sky above us and the
          earth below. It is the world we live in whether you believe it or
          not... Welcome to THE DARK ARKADE 🕹
        </p>
      ),
      image: "/dark-arkade2.png",
    },
  },
];
