export type Author = "Lorro" | "Nick" | "Sio" | string;

export type VotoPizze = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type Episode = {
  number: number;
  date?: Date;
  menews: { author: Author; topic: string; link?: string }[];
  lorrowap: { author: Author; topic: string; link?: string }[];
  main: {
    author: Author;
    topic: string;
    link?: string;
    pizza: {
      fette: VotoPizze;
      descrizione?: string;
    };
  }[];
  dolcetto: { author: Author; topic: string; link?: string }[];
  amaro: { author: Author; topic: string; link?: string }[];
  lore: { author: Author; description: string }[];
  dieciPizze: { author: Author; description: string }[];
  meta: {
    user: string;
    date: Date;
  };
};
