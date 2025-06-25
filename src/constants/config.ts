type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
  };
};

export const config: TConfig = {
  html: {
    title: "Siddu's Portfolio",
    fullName: "Siddu",
    email: "guttulasiddharth1109@mail.com",
  },
  hero: {
    name: "Siddu",
    p: [
      "I am a Web developer",
      "with a passion for creating immersive experiences.",
    ],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: {
        span: "Your Email",
        placeholder: "What's your email?",
      },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `Guttula Siddharth (Siddu), a dedicated software developer and a passionate national-level badminton player. 
I enjoy building impactful applications using modern technologies like React, Node.js, and MongoDB.

My journey is a blend of tech and sports. On one hand, I love crafting real-world web projects and learning full-stack development. 
On the other, I’m a competitive badminton player who has represented my state at various levels. This balance of discipline and creativity shapes my approach to every challenge I take on.

When I’m not coding or debugging, I’m probably on the court training for my next badminton tournament. I believe in continuous learning, 
whether it’s through building apps or pushing my limits in sports.

Contact me at guttulasiddharth1109@gmail.com. 
I’m always eager to connect with fellow developers and sports enthusiasts, so feel free to reach out!`,
    },
  },
};
