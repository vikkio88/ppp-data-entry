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
}

const app = new AppState();
export default app;
