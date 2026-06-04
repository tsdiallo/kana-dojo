'use client';

import {
  ArrowRight,
  Crown,
  Flame,
  Gem,
  Heart,
  Sparkles,
  Star,
  Trophy,
  Zap,
} from 'lucide-react';
import {
  DojoBadge,
  DojoButton,
  DojoCard,
  DojoCardBody,
  DojoCardEyebrow,
  DojoCardFooter,
  DojoCardHeader,
  DojoCardTitle,
  DojoPill,
  DojoProgressBar,
  DojoProgressRing,
  DojoXPBar,
} from '@/shared/ui/dojo';

const Section = ({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) => (
  <section className='flex flex-col gap-4'>
    <header className='flex flex-col gap-1'>
      <h2 className='text-dojo-ink text-2xl font-black tracking-tight'>
        {title}
      </h2>
      {description && <p className='text-dojo-ink/70 text-sm'>{description}</p>}
    </header>
    <div className='rounded-dojo-2xl border-dojo-ink/15 bg-dojo-paper border-2 border-dashed p-6'>
      {children}
    </div>
  </section>
);

const Swatch = ({ name, hex }: { name: string; hex: string }) => (
  <div className='flex flex-col gap-2'>
    <div
      className='rounded-dojo-xl border-dojo-ink h-20 w-full border-2 border-b-[6px]'
      style={{ background: hex }}
    />
    <div className='flex flex-col leading-tight'>
      <span className='text-xs font-black tracking-wide uppercase'>{name}</span>
      <span className='text-dojo-ink/60 font-mono text-xs'>{hex}</span>
    </div>
  </div>
);

const DesignSystemShowcase = () => {
  return (
    <div className='bg-dojo-mist text-dojo-ink min-h-[100dvh] w-full'>
      <div className='mx-auto flex max-w-6xl flex-col gap-12 px-4 py-12 sm:px-8'>
        <header className='flex flex-col gap-3'>
          <DojoPill tone='solid' icon={<Sparkles size={14} />}>
            Phase 1 · Design System
          </DojoPill>
          <h1 className='text-4xl font-black tracking-tight sm:text-5xl'>
            Dojo Design System
          </h1>
          <p className='text-dojo-ink/70 max-w-2xl'>
            Live showcase of the black / white / gold primitives that the
            KanaDojo refresh is built on. Not indexed, not linked from the main
            nav — open <code>/design</code> directly to view.
          </p>
        </header>

        <Section
          title='Palette'
          description='Tokens exposed via @theme in globals.css.'
        >
          <div className='grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6'>
            <Swatch name='ink' hex='#0A0A0A' />
            <Swatch name='paper' hex='#FAFAF7' />
            <Swatch name='mist' hex='#F1F1EE' />
            <Swatch name='gold' hex='#F5C518' />
            <Swatch name='gold-deep' hex='#B8860B' />
            <Swatch name='gold-light' hex='#FFE7A8' />
            <Swatch name='flame' hex='#FF7A00' />
            <Swatch name='ruby' hex='#E11D48' />
            <Swatch name='jade' hex='#16A34A' />
            <Swatch name='sky' hex='#0EA5E9' />
          </div>
        </Section>

        <Section
          title='Buttons'
          description='5 variants × 4 sizes. Click to feel the 3D press.'
        >
          <div className='flex flex-col gap-6'>
            <div className='flex flex-wrap items-center gap-3'>
              <DojoButton iconLeft={<Sparkles />}>Primary</DojoButton>
              <DojoButton variant='secondary'>Secondary</DojoButton>
              <DojoButton variant='dark'>Dark</DojoButton>
              <DojoButton variant='danger'>Danger</DojoButton>
              <DojoButton variant='ghost'>Ghost</DojoButton>
              <DojoButton loading>Saving</DojoButton>
              <DojoButton disabled>Disabled</DojoButton>
            </div>
            <div className='flex flex-wrap items-end gap-3'>
              <DojoButton size='sm' iconRight={<ArrowRight />}>
                Small
              </DojoButton>
              <DojoButton size='md' iconRight={<ArrowRight />}>
                Medium
              </DojoButton>
              <DojoButton size='lg' iconRight={<ArrowRight />}>
                Large
              </DojoButton>
              <DojoButton size='xl' iconRight={<ArrowRight />}>
                X-Large
              </DojoButton>
            </div>
          </div>
        </Section>

        <Section title='Pills'>
          <div className='flex flex-wrap items-center gap-3'>
            <DojoPill tone='flame' icon={<Flame className='fill-current' />}>
              7
            </DojoPill>
            <DojoPill tone='gold' icon={<Zap className='fill-current' />}>
              1,250
            </DojoPill>
            <DojoPill tone='ruby' icon={<Heart className='fill-current' />}>
              5
            </DojoPill>
            <DojoPill tone='sky' icon={<Gem className='fill-current' />}>
              320
            </DojoPill>
            <DojoPill tone='jade'>Mastered</DojoPill>
            <DojoPill tone='solid' icon={<Trophy />}>
              Gold league
            </DojoPill>
            <DojoPill tone='dark'>N5</DojoPill>
          </div>
        </Section>

        <Section title='Badges'>
          <div className='flex flex-wrap items-end gap-3'>
            <DojoBadge tone='gold' icon={<Trophy />} size='xl' />
            <DojoBadge tone='paper' icon={<Crown />} size='xl' />
            <DojoBadge
              tone='flame'
              icon={<Flame className='fill-current' />}
              size='xl'
            />
            <DojoBadge
              tone='ruby'
              icon={<Heart className='fill-current' />}
              size='xl'
            />
            <DojoBadge
              tone='jade'
              icon={<Star className='fill-current' />}
              size='xl'
            />
            <DojoBadge tone='dark' icon={<Crown />} size='xl' />
            <DojoBadge tone='gold' size='lg'>
              7
            </DojoBadge>
            <DojoBadge tone='ruby' size='md'>
              99+
            </DojoBadge>
          </div>
        </Section>

        <Section title='Progress bars'>
          <div className='flex flex-col gap-4'>
            <DojoProgressBar
              value={68}
              tone='gold'
              label='XP this week'
              showValue
            />
            <DojoProgressBar
              value={42}
              tone='flame'
              label='Streak progress'
              showValue
            />
            <DojoProgressBar
              value={20}
              tone='ruby'
              label='Hearts refilling'
              showValue
            />
            <DojoProgressBar
              value={88}
              tone='jade'
              label='Hiragana mastery'
              showValue
            />
          </div>
        </Section>

        <Section title='Progress rings'>
          <div className='flex flex-wrap items-center gap-6'>
            <DojoProgressRing value={65} size={120} thickness={12}>
              <div className='flex flex-col items-center'>
                <span className='text-2xl font-black tabular-nums'>13</span>
                <span className='text-dojo-ink/60 text-[10px] font-bold tracking-widest uppercase'>
                  / 20 min
                </span>
              </div>
            </DojoProgressRing>
            <DojoProgressRing value={80} tone='flame' size={96} thickness={10}>
              <Flame size={24} className='text-dojo-flame fill-current' />
            </DojoProgressRing>
            <DojoProgressRing value={45} tone='jade' size={96} thickness={10}>
              <span className='text-sm font-black'>45%</span>
            </DojoProgressRing>
            <DojoProgressRing value={100} tone='sky' size={96} thickness={10}>
              <span className='text-sm font-black'>100%</span>
            </DojoProgressRing>
          </div>
        </Section>

        <Section title='XP bar'>
          <div className='flex flex-col gap-6'>
            <DojoXPBar xp={320} nextLevelXp={500} level={7} />
            <DojoXPBar xp={480} nextLevelXp={500} level={7} />
            <DojoXPBar xp={150} nextLevelXp={500} level={8} compact />
          </div>
        </Section>

        <Section title='Cards'>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
            <DojoCard>
              <DojoCardHeader>
                <div>
                  <DojoCardEyebrow>Today</DojoCardEyebrow>
                  <DojoCardTitle>Daily quests</DojoCardTitle>
                </div>
                <DojoBadge tone='gold' icon={<Sparkles />} size='lg' />
              </DojoCardHeader>
              <DojoCardBody>3 quests · 1 completed · 2 to go.</DojoCardBody>
              <DojoCardFooter>
                <span className='text-dojo-ink/60 text-xs font-bold'>
                  +45 XP available
                </span>
                <DojoButton size='sm'>View</DojoButton>
              </DojoCardFooter>
            </DojoCard>

            <DojoCard variant='gold'>
              <DojoCardHeader>
                <DojoCardTitle>Gold league</DojoCardTitle>
                <Trophy size={20} />
              </DojoCardHeader>
              <DojoCardBody className='text-dojo-ink/80'>
                3 days left. Stay top 50 % to keep your spot.
              </DojoCardBody>
            </DojoCard>

            <DojoCard variant='dark'>
              <DojoCardEyebrow className='text-dojo-gold'>
                Bonus
              </DojoCardEyebrow>
              <DojoCardTitle className='text-dojo-paper'>
                Diamond tier
              </DojoCardTitle>
              <DojoCardBody className='text-dojo-paper/70'>
                Reach Diamond league three weeks in a row to unlock the white
                lion skin.
              </DojoCardBody>
            </DojoCard>

            <DojoCard variant='flat' interactive>
              <DojoCardEyebrow>Practice</DojoCardEyebrow>
              <DojoCardTitle>Hiragana set A</DojoCardTitle>
              <DojoCardBody>
                <span lang='ja' className='text-2xl'>
                  あ い う え お
                </span>
              </DojoCardBody>
            </DojoCard>
          </div>
        </Section>

        <footer className='text-dojo-ink/50 py-8 text-center text-xs'>
          Dojo Design System · Phase 1 · noir / blanc / or
        </footer>
      </div>
    </div>
  );
};

export default DesignSystemShowcase;
