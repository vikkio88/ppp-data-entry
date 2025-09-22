export const strings = {
  globals: {
    next: "Next",
    stop: "Stop",
  },
  login: {
    title: "PPP DataEntry",
    episodeNumber: "Episode Number",
    name: "Your Name/Nickname",
  },
  collecting: {
    title: "Collecting Info for Episode %episode%",
    menews: "MeNews",
    lorrowap: "Lorro-wap",
    main: "Main",
  },
};

export function t(str: string, params?: Record<string, string | number>) {
  if (!params) return str;

  return str.replace(/%(\w+)%/g, (_, key: string) => {
    const value = params[key];
    return value !== undefined ? String(value) : `%${key}%`;
  });
}
