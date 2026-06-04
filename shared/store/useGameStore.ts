import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * Local-only gamification state.
 *
 * Persistence is via Zustand's `persist` middleware (localStorage). No
 * server, no auth — the whole loop runs in the browser.
 *
 * Use `hasStarted` to decide whether to render the Landing or the
 * Dashboard on `/`. It flips to `true` the first time the user makes
 * any meaningful action (start a lesson, gain XP, mark a streak).
 */

const DEFAULT_NEXT_LEVEL_XP = 500;
const DEFAULT_DAILY_GOAL_MIN = 10;

export interface GameState {
  hasStarted: boolean;
  /** Unix ms of last app open. */
  lastVisitedAt: number | null;
  /** Unix ms of last lesson completion. */
  lastLessonAt: number | null;

  xp: number;
  level: number;
  /** XP threshold to reach next level (recomputed on level-up). */
  nextLevelXp: number;

  streak: number;
  /** Number of streak freezes available (max 2). */
  streakFreezes: number;

  hearts: number;
  maxHearts: number;

  gems: number;

  /** Today's goal in minutes (5 / 10 / 20). */
  dailyGoalMin: number;
  /** Minutes spent training today. Resets at local midnight via `tickDay`. */
  dailyMinutesDone: number;
  /** Unix ms of last `dailyMinutesDone` reset. */
  dailyResetAt: number | null;

  // ---- Actions ----
  markStarted: () => void;
  awardXp: (amount: number) => void;
  loseHeart: () => void;
  refillHearts: () => void;
  addGems: (amount: number) => void;
  incrementStreak: () => void;
  resetStreak: () => void;
  setDailyGoal: (minutes: number) => void;
  addDailyMinutes: (minutes: number) => void;
  tickDay: () => void;
  reset: () => void;
}

const initial: Pick<
  GameState,
  | 'hasStarted'
  | 'lastVisitedAt'
  | 'lastLessonAt'
  | 'xp'
  | 'level'
  | 'nextLevelXp'
  | 'streak'
  | 'streakFreezes'
  | 'hearts'
  | 'maxHearts'
  | 'gems'
  | 'dailyGoalMin'
  | 'dailyMinutesDone'
  | 'dailyResetAt'
> = {
  hasStarted: false,
  lastVisitedAt: null,
  lastLessonAt: null,
  xp: 0,
  level: 1,
  nextLevelXp: DEFAULT_NEXT_LEVEL_XP,
  streak: 0,
  streakFreezes: 0,
  hearts: 5,
  maxHearts: 5,
  gems: 0,
  dailyGoalMin: DEFAULT_DAILY_GOAL_MIN,
  dailyMinutesDone: 0,
  dailyResetAt: null,
};

const xpForLevel = (level: number) =>
  Math.round(DEFAULT_NEXT_LEVEL_XP * Math.pow(1.15, level - 1));

const useGameStore = create<GameState>()(
  persist(
    set => ({
      ...initial,

      markStarted: () =>
        set(state => ({
          hasStarted: true,
          lastVisitedAt: Date.now(),
          // Seed streak on the very first start.
          streak: state.streak === 0 ? 1 : state.streak,
        })),

      awardXp: amount =>
        set(state => {
          let xp = state.xp + amount;
          let level = state.level;
          let nextLevelXp = state.nextLevelXp;
          while (xp >= nextLevelXp) {
            xp -= nextLevelXp;
            level += 1;
            nextLevelXp = xpForLevel(level);
          }
          return {
            xp,
            level,
            nextLevelXp,
            hasStarted: true,
            lastLessonAt: Date.now(),
          };
        }),

      loseHeart: () =>
        set(state => ({ hearts: Math.max(0, state.hearts - 1) })),

      refillHearts: () => set(state => ({ hearts: state.maxHearts })),

      addGems: amount => set(state => ({ gems: state.gems + amount })),

      incrementStreak: () =>
        set(state => ({ streak: state.streak + 1, hasStarted: true })),

      resetStreak: () => set({ streak: 0 }),

      setDailyGoal: minutes =>
        set({ dailyGoalMin: Math.max(1, Math.round(minutes)) }),

      addDailyMinutes: minutes =>
        set(state => ({
          dailyMinutesDone: state.dailyMinutesDone + minutes,
          hasStarted: true,
        })),

      tickDay: () =>
        set(state => {
          const now = Date.now();
          const last = state.dailyResetAt ?? 0;
          const oneDayMs = 24 * 60 * 60 * 1000;
          if (now - last >= oneDayMs) {
            return { dailyMinutesDone: 0, dailyResetAt: now };
          }
          return {};
        }),

      reset: () => set({ ...initial }),
    }),
    {
      name: 'kanadojo-game-store',
      version: 1,
    },
  ),
);

export default useGameStore;
