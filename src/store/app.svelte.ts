import type { BaseTopic, CollectionType, MainTopic } from "../libs/types";

export const PHASES = ["login", "collecting", "finished"] as const;
export type Phase = (typeof PHASES)[number];

const nextPhase: Record<Phase, Phase | undefined> = {
  login: "collecting",
  collecting: "finished",
  finished: undefined,
};

class AppState {
  #phase = $state<Phase>("login");

  meta?: {
    episode: number;
    user: string;
    date: Date;
  };

  #lorrowaps: BaseTopic[] = $state([]);
  #menews: BaseTopic[] = $state([]);
  #main: MainTopic[] = $state([]);

  get phase(): Phase {
    return this.#phase;
  }

  next() {
    let n = nextPhase[this.#phase];
    if (n) {
      this.#phase = n;
    }
  }

  startSession({ episode, user }: { episode: number; user: string }) {
    this.meta = { episode, user, date: new Date() };
  }

  add(type: CollectionType, body: MainTopic | BaseTopic) {
    switch (type) {
      case "lorrowap":
        this.#lorrowaps.push(body as BaseTopic);
        break;
      case "menews":
        this.#menews.push(body as BaseTopic);
        break;
      case "main":
        this.#main.push(body as MainTopic);
        break;
    }
  }

  get main() {
    return this.#main;
  }

  get lorrowaps() {
    return this.#lorrowaps;
  }

  get menews() {
    return this.#menews;
  }
}

const app = new AppState();
export default app;
