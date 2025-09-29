const fs = require("fs");
import { FEED_OUTPUT_DIR, URL } from "../config";
import type { EpisodeWrapper, Link } from "../types/feed";
import { parseLinks } from "../libs/linkParser";
import { feedParser } from "./parser";

const main = async () => {
  const shows = (await feedParser(URL)) as EpisodeWrapper[];

  save(shows, "shows");
  const episodes: any[] = [];
  let links: Link[] = [];
  for (const episodeData of shows) {
    const episode = episodeData.data;
    const currentEpisodeLinks = parseLinks(episodeData);
    links = links.concat(currentEpisodeLinks);
    console.log(`\t\t- ${episode.title}`);

    episodes.push({
      title: episode.title,
      image: episode.image.url || null,
      fileUrl: episode.enclosures[0]?.url || null,
      links: currentEpisodeLinks,
      content: episode.description,
      publishedDate: episode.pubDate,
    });
    console.log("\t\t...done\n");
  }

  save(links, "links");
  save(episodes, "episodes");

  console.log("...all done bye <3\n");
};

const now = () => new Date().toISOString();

const save = (data: any, prefix: string) => {
  let filename = now().replace(/:/gm, ".");
  filename = `${prefix}_${filename}.json`;
  console.log(`\t saving ${filename} file...`);
  fs.writeFileSync(
    `${FEED_OUTPUT_DIR}/${filename}`,
    JSON.stringify(data, null, 2)
  );

  return filename;
};

main();
