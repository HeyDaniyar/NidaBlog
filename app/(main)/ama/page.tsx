import Balancer from 'react-wrap-balancer'

import { RichLink } from '~/components/links/RichLink'
import { Container } from '~/components/ui/Container'

const title = 'AMA One-on-One Consultation'
const description =
  'Nida offers one-on-one consultation services (Ask Me Anything). With 7+ years of experience in development, I can help you with frontend/full-stack development, UI/UX design, entrepreneurship, AI, and more. I\'m also happy to communicate in English.'

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
}

export default function AskMeAnythingPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Ask Me Anything / One-on-One Consultation
        </h1>
        <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
          <Balancer>{description}</Balancer>
        </p>
      </header>

      <article className="prose dark:prose-invert">
        <h2>Consultation Topics</h2>
        <p>I can help you with the following topics:</p>
        <ul>
          <li>
            <b>Frontend/Full-stack Development</b>: Job search advice, career guidance, improving your engineering skills, or discussing React vs Vue.
          </li>
          <li>
            <b>UI/UX Design</b>: Getting started with design or improving your design skills.
          </li>
          <li>
            <b>Entrepreneurship</b>: Insights from my experience as the co-founder of <RichLink href="https://aicenter.ai" target="_blank">AICenter</RichLink> and <RichLink href="https://aicenter.ai/stevie" target="_blank">StevieAI</RichLink>.
          </li>
          <li>
            <b>AI and the AGI Era</b>: Discussing the exciting future of AI and how to prepare for it.
          </li>
          <li>
            <b>Photography</b>: Tips and advice on creating with your camera.
          </li>
          <li>
            <b>Other Topics</b>: We can also discuss content creation, personal growth, or any other areas where you need guidance.
          </li>
        </ul>
      </article>
    </Container>
  )
}
