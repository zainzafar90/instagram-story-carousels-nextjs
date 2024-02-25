import { create } from "zustand";

type StoryProgressState = {
  progresses: number[];
  initProgresses: (length: number) => void;
  setProgress: (index: number, progress: number) => void;
  fillProgressesUpTo: (index: number) => void;
};

export const useStoryProgressStore = create<StoryProgressState>((set) => ({
  progresses: [],
  initProgresses: (length) =>
    set(() => ({
      progresses: Array.from({ length }, () => 0),
    })),
  setProgress: (index, progress) =>
    set((state) => {
      const updatedProgresses = [...state.progresses];
      updatedProgresses[index] = progress;
      return { progresses: updatedProgresses };
    }),
  fillProgressesUpTo: (index) =>
    set((state) => {
      const updatedProgresses = state.progresses.map((_, i) =>
        i <= index ? 100 : 0
      );
      return { progresses: updatedProgresses };
    }),
}));
