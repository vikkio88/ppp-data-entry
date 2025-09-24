export const AUTHORS = ["Lorro", "Nick", "Sio", "Other"] as const;
export type Author = (typeof AUTHORS)[number] | string;

export type VotoPizze = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type Timestamp = { hours: number; minutes: number; seconds: number };

export type BaseTopic = {
  author: Author;
  description: string;
  tags?: string[];
  link?: string;
  timestamp?: Timestamp;
};
export type Pizza = {
  slices: VotoPizze;
  description?: string;
};

export type MainTopic = BaseTopic & { pizza?: Pizza };

export type Episode = {
  number: number;
  date?: Date;
  menews: BaseTopic[];
  lorrowap: BaseTopic[];
  main: MainTopic[];
  dolcetto: BaseTopic[];
  amaro: BaseTopic[];
  lore: BaseTopic[];
  others: BaseTopic[];
  meta: {
    user: string;
    date: Date;
  };
};

export type CollectionType = "lorrowap" | "menews" | "main";
