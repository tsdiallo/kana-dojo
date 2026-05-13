'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Bug,
  CircleHelp,
  Cookie,
  FileDiff,
  FileLock2,
  Flame,
  Gem,
  Heart,
  Medal,
  ScrollText,
  Sparkle,
  Sparkles,
  Star,
  Trophy,
  Zap,
} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import clsx from 'clsx';

import { Link } from '@/core/i18n/routing';
import { useClick } from '@/shared/hooks/generic/useAudio';
import GoldenLion from './GoldenLion';

const GOLD = '#F5C518';
const GOLD_DEEP = '#B8860B';
const GOLD_LIGHT = '#FFE7A8';

const learningPath = [
  {
    label: 'Hiragana',
    sub: 'ひらがな',
    href: '/learn-hiragana',
    state: 'active' as const,
    icon: Star,
    offset: 'translate-x-0',
  },
  {
    label: 'Katakana',
    sub: 'カタカナ',
    href: '/learn-katakana',
    state: 'unlocked' as const,
    icon: Star,
    offset: 'translate-x-16 sm:translate-x-24',
  },
  {
    label: 'First Words',
    sub: '言葉',
    href: '/vocabulary',
    state: 'unlocked' as const,
    icon: Gem,
    offset: 'translate-x-0',
  },
  {
    label: 'Kanji N5',
    sub: '漢字',
    href: '/kanji',
    state: 'locked' as const,
    icon: Trophy,
    offset: '-translate-x-16 sm:-translate-x-24',
  },
  {
    label: 'JLPT Path',
    sub: 'N5 → N1',
    href: '/jlpt',
    state: 'locked' as const,
    icon: Medal,
    offset: 'translate-x-0',
  },
] as const;

const dailyQuests = [
  {
    icon: Zap,
    title: 'Earn 30 XP',
    progress: 60,
    reward: '15 XP',
  },
  {
    icon: Flame,
    title: 'Practice 3 lessons',
    progress: 33,
    reward: 'Streak +1',
  },
  {
    icon: Star,
    title: 'Get 20 kana right',
    progress: 80,
    reward: '20 XP',
  },
] as const;

const leaderboard = [
  { rank: 1, name: 'Hikari', xp: 4820, you: false },
  { rank: 2, name: 'You', xp: 4310, you: true },
  { rank: 3, name: 'Kenji', xp: 3995, you: false },
  { rank: 4, name: 'Aoi', xp: 3712, you: false },
  { rank: 5, name: 'Daichi', xp: 3580, you: false },
] as const;

const features = [
  {
    icon: Flame,
    title: 'Daily streaks',
    desc: 'Show up every day. Watch the flame grow. Lose it and the lion remembers.',
  },
  {
    icon: Zap,
    title: 'XP & levels',
    desc: 'Every correct answer counts. Level up your dojo rank session by session.',
  },
  {
    icon: Trophy,
    title: 'Weekly leagues',
    desc: 'Bronze → Silver → Gold → Diamond. Climb the ranks against other learners.',
  },
  {
    icon: Heart,
    title: 'Hearts system',
    desc: 'Five hearts per session. Make them count. Refills over time, or earn them back.',
  },
  {
    icon: Medal,
    title: 'Skill trophies',
    desc: 'Complete a kana set, master a JLPT level, unlock a trophy. Collect them all.',
  },
  {
    icon: Gem,
    title: 'Gem rewards',
    desc: 'Spin for gems, spend them on power-ups, streak freezes, and bonus practice.',
  },
] as const;

const legalLinks = [
  { name: 'terms', href: '/terms', icon: ScrollText },
  { name: 'privacy', href: '/privacy', icon: Cookie },
  { name: 'security', href: '/security', icon: FileLock2 },
  { name: 'patch notes', href: '/patch-notes', icon: FileDiff },
  { name: 'credits', href: '/credits', icon: Sparkle },
  { name: 'about', href: '/about', icon: CircleHelp },
] as const;

const LandingPage = () => {
  const { playClick } = useClick();

  return (
    <div
      className='relative flex min-h-[100dvh] w-full flex-col overflow-x-hidden bg-white text-black'
      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
    >
      {/* ============== TOP BAR ============== */}
      <header
        className={clsx(
          'sticky top-0 z-40 w-full',
          'border-b-2 border-black/90',
          'bg-white',
        )}
      >
        <div className='mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-8'>
          <Link
            href='/'
            prefetch
            onClick={() => playClick()}
            className='group flex items-center gap-2.5 hover:cursor-pointer'
          >
            <div
              className='flex h-10 w-10 items-center justify-center rounded-xl border-b-4 border-black'
              style={{ background: GOLD }}
            >
              <span lang='ja' className='text-lg font-black text-black'>
                道
              </span>
            </div>
            <span className='text-xl font-black tracking-tight'>
              Kana<span style={{ color: GOLD_DEEP }}>Dojo</span>
            </span>
          </Link>

          {/* Mock stats — Duolingo style */}
          <div className='flex items-center gap-3 sm:gap-5'>
            <StatPill
              icon={<Flame size={18} className='fill-current' />}
              value='7'
              color='#FF7A00'
              hideOnMobile={false}
            />
            <StatPill
              icon={<Zap size={18} className='fill-current' />}
              value='1,250'
              color={GOLD}
              hideOnMobile
            />
            <StatPill
              icon={<Heart size={18} className='fill-current' />}
              value='5'
              color='#E11D48'
              hideOnMobile
            />

            <div className='ml-1 flex items-center gap-2'>
              <FontAwesomeIcon
                icon={faGithub}
                size='lg'
                className={clsx(
                  'hidden text-black/80 duration-250 hover:scale-105 hover:cursor-pointer hover:text-black sm:inline-flex',
                  'active:scale-100 active:duration-225',
                )}
                onClick={() => {
                  playClick();
                  window.open(
                    'https://github.com/lingdojo/kana-dojo',
                    '_blank',
                  );
                }}
              />
              <FontAwesomeIcon
                icon={faDiscord}
                size='lg'
                className={clsx(
                  'hidden text-black/80 duration-250 hover:scale-105 hover:cursor-pointer hover:text-black sm:inline-flex',
                  'active:scale-100 active:duration-225',
                )}
                onClick={() => {
                  playClick();
                  window.open('https://discord.gg/CyvBNNrSmb', '_blank');
                }}
              />
              <button
                type='button'
                aria-label='Report a bug'
                onClick={() => {
                  playClick();
                  window.open(
                    'https://tally.so/r/2E4rB9',
                    '_blank',
                    'noopener',
                  );
                }}
                className='hidden text-black/80 duration-250 hover:scale-105 hover:cursor-pointer hover:text-black sm:inline-flex'
              >
                <Bug size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className='relative z-10 flex w-full flex-col items-center gap-24 pb-32'>
        {/* ============== HERO ============== */}
        <section className='relative w-full overflow-hidden'>
          {/* Gold rays background */}
          <div
            aria-hidden
            className='pointer-events-none absolute inset-0 -z-10'
            style={{
              background:
                'radial-gradient(ellipse at top, rgba(245,197,24,0.18) 0%, rgba(245,197,24,0) 60%)',
            }}
          />

          <div className='mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 pt-10 pb-12 sm:px-8 md:grid-cols-2 md:pt-16 md:pb-20'>
            {/* Copy */}
            <div className='flex flex-col items-start gap-6 text-center md:text-left'>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className='inline-flex items-center gap-2 self-center rounded-full border-2 border-black bg-white px-3 py-1 md:self-start'
              >
                <Sparkles size={14} style={{ color: GOLD_DEEP }} />
                <span className='text-xs font-bold tracking-wide uppercase'>
                  Train at the Golden Dojo
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className='text-5xl leading-[1.05] font-black tracking-tight sm:text-6xl md:text-7xl'
              >
                Learn{' '}
                <span
                  className='relative inline-block'
                  style={{ color: GOLD_DEEP }}
                >
                  Japanese
                  <span
                    aria-hidden
                    className='absolute right-0 -bottom-1 left-0 h-2 rounded-full'
                    style={{ background: GOLD }}
                  />
                </span>
                <br />
                like a lion.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='max-w-md text-lg text-black/70 sm:text-xl'
              >
                Bite-sized lessons. Daily streaks. XP, leagues, hearts, and a
                very persistent <span className='font-bold'>golden lion</span>{' '}
                who really, really wants you to do your reps.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center'
              >
                <Link
                  href='/learn-hiragana'
                  prefetch
                  onClick={() => playClick()}
                  className={clsx(
                    'group inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 text-lg font-black tracking-wide uppercase',
                    'border-b-[6px] border-black bg-black text-white',
                    'transition-all duration-150 hover:cursor-pointer',
                    'active:mb-[6px] active:translate-y-[6px] active:border-b-0',
                  )}
                  style={{ boxShadow: `0 0 0 0 ${GOLD}` }}
                >
                  Get started
                  <ArrowRight
                    size={20}
                    className='transition-transform duration-150 group-hover:translate-x-1'
                  />
                </Link>

                <Link
                  href='/demo'
                  prefetch
                  onClick={() => playClick()}
                  className={clsx(
                    'inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 text-lg font-black tracking-wide uppercase',
                    'border-2 border-b-[6px] border-black bg-white text-black',
                    'transition-all duration-150 hover:cursor-pointer',
                    'active:mb-[6px] active:translate-y-[6px] active:border-b-2',
                  )}
                >
                  I have an account
                </Link>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-xs text-black/50'
              >
                Free forever · No sign-up required · Open source
              </motion.p>
            </div>

            {/* Lion mascot */}
            <div className='relative flex items-center justify-center'>
              {/* Gold ring behind lion */}
              <motion.div
                aria-hidden
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className='absolute h-72 w-72 rounded-full sm:h-96 sm:w-96'
                style={{
                  background: `radial-gradient(circle, ${GOLD_LIGHT} 0%, transparent 70%)`,
                }}
              />

              {/* Floating kanji confetti */}
              <FloatingKana char='あ' top='10%' left='8%' delay={0} />
              <FloatingKana char='ア' top='20%' left='85%' delay={0.4} />
              <FloatingKana char='字' top='75%' left='12%' delay={0.8} />
              <FloatingKana char='語' top='80%' left='80%' delay={1.2} />

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className='relative'
              >
                <GoldenLion size={320} />
              </motion.div>

              {/* Speech bubble */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: 0 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className={clsx(
                  'absolute top-8 -right-2 hidden sm:block',
                  'rounded-2xl border-2 border-black bg-white px-4 py-2',
                  'border-b-[6px]',
                )}
              >
                <span className='text-sm font-bold'>
                  Ready?{' '}
                  <span lang='ja' style={{ color: GOLD_DEEP }}>
                    始めよう！
                  </span>
                </span>
                <div
                  aria-hidden
                  className='absolute -bottom-2 left-6 h-3 w-3 rotate-45 border-r-2 border-b-2 border-black bg-white'
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============== LIVE STATS BAR (black band) ============== */}
        <section className='w-full bg-black text-white'>
          <div className='mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 sm:grid-cols-4 sm:px-8'>
            <StatTile
              icon={<Flame size={22} className='fill-current' />}
              color='#FF7A00'
              value='7'
              label='Day streak'
            />
            <StatTile
              icon={<Zap size={22} className='fill-current' />}
              color={GOLD}
              value='1,250'
              label='XP this week'
            />
            <StatTile
              icon={<Trophy size={22} className='fill-current' />}
              color={GOLD}
              value='Gold'
              label='League'
            />
            <StatTile
              icon={<Heart size={22} className='fill-current' />}
              color='#E11D48'
              value='5/5'
              label='Hearts'
            />
          </div>
        </section>

        {/* ============== LEARNING PATH ============== */}
        <section className='w-full max-w-3xl px-4 sm:px-8'>
          <SectionHeader
            eyebrow='Your dojo path'
            title='One bubble at a time.'
            subtitle='Follow the lion’s path. Each bubble is a short lesson. Tap, train, ascend.'
          />

          <ol className='relative mt-12 flex flex-col items-center gap-10'>
            {/* dotted spine */}
            <div
              aria-hidden
              className='absolute top-8 bottom-8 left-1/2 w-px -translate-x-1/2 border-l-4 border-dashed border-black/15'
            />

            {learningPath.map((node, i) => {
              const locked = node.state === 'locked';
              const active = node.state === 'active';
              return (
                <li
                  key={node.href}
                  className={clsx(
                    'relative flex w-full items-center gap-4',
                    'justify-center',
                    node.offset,
                  )}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className='flex items-center gap-4'
                  >
                    <Link
                      href={node.href}
                      prefetch
                      onClick={() => (locked ? undefined : playClick())}
                      aria-disabled={locked}
                      className={clsx(
                        'group flex h-20 w-20 items-center justify-center rounded-full',
                        'border-b-[8px] transition-all duration-150',
                        locked
                          ? 'cursor-not-allowed border-black/10 bg-black/5 text-black/30'
                          : 'hover:cursor-pointer active:mb-[6px] active:translate-y-[6px] active:border-b-2',
                        active && 'ring-4 ring-offset-2',
                      )}
                      style={
                        locked
                          ? undefined
                          : {
                              background: active ? GOLD : 'white',
                              borderColor: 'black',
                              color: 'black',
                            }
                      }
                    >
                      {locked ? (
                        <LockIcon />
                      ) : (
                        <node.icon size={32} className='fill-black' />
                      )}
                    </Link>

                    <div
                      className={clsx(
                        'flex flex-col rounded-xl border-2 border-b-4 border-black bg-white px-3 py-2',
                        locked && 'opacity-50',
                      )}
                    >
                      <span className='text-sm font-black tracking-wide uppercase'>
                        {node.label}
                      </span>
                      <span lang='ja' className='text-xs text-black/60'>
                        {node.sub}
                      </span>
                    </div>
                  </motion.div>
                </li>
              );
            })}
          </ol>
        </section>

        {/* ============== DAILY QUESTS + LEADERBOARD ============== */}
        <section className='w-full max-w-6xl px-4 sm:px-8'>
          <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
            {/* Daily quests */}
            <div className='rounded-3xl border-2 border-b-[6px] border-black bg-white p-6'>
              <div className='mb-5 flex items-center justify-between'>
                <div>
                  <p
                    className='text-xs font-black tracking-widest uppercase'
                    style={{ color: GOLD_DEEP }}
                  >
                    Today
                  </p>
                  <h3 className='text-2xl font-black'>Daily quests</h3>
                </div>
                <div
                  className='flex h-12 w-12 items-center justify-center rounded-2xl border-b-4 border-black'
                  style={{ background: GOLD }}
                >
                  <Sparkles size={20} className='text-black' />
                </div>
              </div>

              <ul className='flex flex-col gap-3'>
                {dailyQuests.map(q => (
                  <li
                    key={q.title}
                    className='flex items-center gap-4 rounded-2xl border-2 border-black/10 bg-black/[0.02] p-3'
                  >
                    <div
                      className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl'
                      style={{ background: GOLD_LIGHT }}
                    >
                      <q.icon
                        size={22}
                        className='fill-current'
                        style={{ color: GOLD_DEEP }}
                      />
                    </div>
                    <div className='flex flex-1 flex-col gap-1'>
                      <div className='flex items-center justify-between'>
                        <span className='text-sm font-bold'>{q.title}</span>
                        <span
                          className='text-xs font-black uppercase'
                          style={{ color: GOLD_DEEP }}
                        >
                          +{q.reward}
                        </span>
                      </div>
                      <div className='h-2 w-full overflow-hidden rounded-full bg-black/10'>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${q.progress}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.9,
                            ease: 'easeOut',
                          }}
                          className='h-full rounded-full'
                          style={{ background: GOLD }}
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Leaderboard */}
            <div className='relative overflow-hidden rounded-3xl border-2 border-b-[6px] border-black bg-black p-6 text-white'>
              <div
                aria-hidden
                className='pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full'
                style={{
                  background: `radial-gradient(circle, ${GOLD} 0%, transparent 70%)`,
                  opacity: 0.18,
                }}
              />

              <div className='mb-5 flex items-center justify-between'>
                <div>
                  <p
                    className='text-xs font-black tracking-widest uppercase'
                    style={{ color: GOLD }}
                  >
                    This week
                  </p>
                  <h3 className='text-2xl font-black'>Gold league</h3>
                </div>
                <div
                  className='flex h-12 w-12 items-center justify-center rounded-2xl border-b-4 border-black'
                  style={{ background: GOLD }}
                >
                  <Trophy size={20} className='text-black' />
                </div>
              </div>

              <ul className='flex flex-col'>
                {leaderboard.map(player => (
                  <li
                    key={player.rank}
                    className={clsx(
                      'flex items-center gap-4 rounded-2xl px-3 py-2.5',
                      player.you && 'bg-white/10',
                    )}
                  >
                    <div
                      className={clsx(
                        'flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-black',
                        player.rank === 1
                          ? 'text-black'
                          : player.rank === 2
                            ? 'bg-white/20 text-white'
                            : player.rank === 3
                              ? 'bg-white/10 text-white'
                              : 'text-white/60',
                      )}
                      style={
                        player.rank === 1 ? { background: GOLD } : undefined
                      }
                    >
                      {player.rank}
                    </div>

                    <div className='flex flex-1 items-center justify-between'>
                      <span
                        className={clsx(
                          'font-bold',
                          player.you && 'underline decoration-2',
                        )}
                        style={player.you ? { color: GOLD } : undefined}
                      >
                        {player.name}
                      </span>
                      <span className='text-sm font-bold text-white/70'>
                        {player.xp.toLocaleString()} XP
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className='mt-4 flex items-center gap-2 text-xs text-white/60'>
                <Zap size={14} style={{ color: GOLD }} />
                <span>3 days left to keep your gold spot</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============== FEATURES ============== */}
        <section className='w-full max-w-6xl px-4 sm:px-8'>
          <SectionHeader
            eyebrow='Built like a game'
            title='Habits that stick.'
            subtitle='Every mechanic is here for one reason: keeping you coming back tomorrow.'
          />

          <div className='mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className='group flex flex-col gap-3 rounded-2xl border-2 border-b-[6px] border-black bg-white p-6 transition-transform duration-150 hover:-translate-y-1'
              >
                <div
                  className='inline-flex h-12 w-12 items-center justify-center rounded-xl border-b-4 border-black'
                  style={{ background: GOLD }}
                >
                  <f.icon size={22} className='text-black' />
                </div>
                <h3 className='text-lg font-black'>{f.title}</h3>
                <p className='text-sm text-black/70'>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ============== FINAL CTA ============== */}
        <section className='w-full max-w-4xl px-4 sm:px-8'>
          <div className='relative overflow-hidden rounded-[2rem] border-2 border-b-[8px] border-black bg-black p-8 text-white sm:p-14'>
            <div
              aria-hidden
              className='pointer-events-none absolute -top-32 -right-20 h-96 w-96 rounded-full'
              style={{
                background: `radial-gradient(circle, ${GOLD} 0%, transparent 65%)`,
                opacity: 0.25,
              }}
            />

            <div className='relative flex flex-col items-start gap-6 sm:flex-row sm:items-center'>
              <div className='shrink-0'>
                <GoldenLion size={140} />
              </div>

              <div className='flex flex-col gap-4'>
                <span
                  className='text-xs font-black tracking-widest uppercase'
                  style={{ color: GOLD }}
                >
                  Your dojo awaits
                </span>
                <h2 className='text-3xl leading-tight font-black sm:text-5xl'>
                  Step in. <span style={{ color: GOLD }}>Bow.</span>
                  <br />
                  Then start your streak.
                </h2>

                <div className='flex flex-col gap-3 sm:flex-row'>
                  <Link
                    href='/learn-hiragana'
                    prefetch
                    onClick={() => playClick()}
                    className={clsx(
                      'inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 text-lg font-black tracking-wide uppercase',
                      'border-b-[6px] border-black text-black',
                      'transition-all duration-150 hover:cursor-pointer',
                      'active:mb-[6px] active:translate-y-[6px] active:border-b-0',
                    )}
                    style={{ background: GOLD }}
                  >
                    Start free
                    <ArrowRight size={20} />
                  </Link>
                  <Link
                    href='/kana-chart'
                    prefetch
                    onClick={() => playClick()}
                    className={clsx(
                      'inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 text-lg font-black tracking-wide uppercase',
                      'border-2 border-b-[6px] border-white bg-transparent text-white',
                      'transition-all duration-150 hover:cursor-pointer',
                      'active:mb-[6px] active:translate-y-[6px] active:border-b-2',
                    )}
                  >
                    See the kana chart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ============== FOOTER ============== */}
      <footer className='w-full border-t-2 border-black bg-white'>
        <div className='mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-8'>
          <p className='text-xs font-bold text-black/60'>
            Made with{' '}
            <Heart size={12} className='inline fill-current text-red-500' /> for
            learners of <span lang='ja'>日本語</span>.
          </p>
          <div className='flex flex-wrap items-center justify-center gap-x-5 gap-y-2'>
            {legalLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                prefetch
                onClick={() => playClick()}
                className='flex items-center gap-1 text-xs font-bold text-black/60 hover:cursor-pointer hover:text-black'
              >
                <link.icon className='size-3.5' />
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

// ============== SUBCOMPONENTS ==============

const StatPill = ({
  icon,
  value,
  color,
  hideOnMobile,
}: {
  icon: React.ReactNode;
  value: string;
  color: string;
  hideOnMobile: boolean;
}) => (
  <div
    className={clsx(
      'flex items-center gap-1.5 rounded-full border-2 border-black bg-white px-3 py-1',
      'border-b-4',
      hideOnMobile && 'hidden sm:inline-flex',
    )}
  >
    <span style={{ color }}>{icon}</span>
    <span className='text-sm font-black text-black tabular-nums'>{value}</span>
  </div>
);

const StatTile = ({
  icon,
  color,
  value,
  label,
}: {
  icon: React.ReactNode;
  color: string;
  value: string;
  label: string;
}) => (
  <div className='flex items-center gap-3'>
    <div
      className='flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10'
      style={{ color }}
    >
      {icon}
    </div>
    <div className='flex flex-col leading-tight'>
      <span className='text-2xl font-black tabular-nums'>{value}</span>
      <span className='text-xs font-bold tracking-wider text-white/60 uppercase'>
        {label}
      </span>
    </div>
  </div>
);

const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) => (
  <div className='flex flex-col items-center text-center'>
    <span
      className='text-xs font-black tracking-widest uppercase'
      style={{ color: GOLD_DEEP }}
    >
      {eyebrow}
    </span>
    <h2 className='mt-2 text-4xl font-black tracking-tight sm:text-5xl'>
      {title}
    </h2>
    <p className='mt-3 max-w-xl text-black/70'>{subtitle}</p>
  </div>
);

const FloatingKana = ({
  char,
  top,
  left,
  delay,
}: {
  char: string;
  top: string;
  left: string;
  delay: number;
}) => (
  <motion.span
    aria-hidden
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
    transition={{
      opacity: { duration: 0.6, delay },
      scale: { duration: 0.6, delay },
      y: {
        duration: 3,
        ease: 'easeInOut',
        repeat: Infinity,
        delay: delay + 0.3,
      },
    }}
    lang='ja'
    className='absolute hidden text-4xl font-black sm:block'
    style={{ top, left, color: GOLD_DEEP, opacity: 0.4 }}
  >
    {char}
  </motion.span>
);

const LockIcon = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <rect x='4' y='11' width='16' height='10' rx='2' />
    <path d='M8 11V7a4 4 0 0 1 8 0v4' />
  </svg>
);

export default LandingPage;
