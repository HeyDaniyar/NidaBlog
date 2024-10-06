import { type Metadata } from 'next'

import { Projects } from '~/app/(main)/projects/Projects'
import { Container } from '~/components/ui/Container'

const title = 'Projects'
const description =
  'I have been doing various small projects over the years. Some are <b>open source</b>, some are <b>experiments</b>, and some are just for fun. Below is a collection of projects that I think are good, and also a reflection of my exploration and attempts in the field of technology.'
export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
} satisfies Metadata

export default function ProjectsPage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          My project adventure journey.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I have been doing various small projects over the years. Some are <b>open source</b>, some are <b>experiments</b>, and some are just for fun. Below is a collection of projects that I think are good, and also a reflection of my exploration and attempts in the field of technology.
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <Projects />
      </div>
    </Container>
  )
}

export const revalidate = 3600
