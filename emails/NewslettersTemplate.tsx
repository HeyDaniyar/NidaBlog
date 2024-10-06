import * as React from 'react'
import ReactMarkdown from 'react-markdown'

import { Heading, Section } from './_components'
import Layout from './Layout'

const NewslettersTemplate = (props: {
  subject?: string | null
  body?: string | null
}) => {
  const { subject = 'Test Subject', body = `## Test Content` } = props

  return (
    <Layout previewText={subject ?? ''}>
      <Heading>{subject}</Heading>

      {body && (
        <Section className="max-w-[465px] px-2 text-[14px] leading-loose text-zinc-700">
          <ReactMarkdown
            components={{
              img: ({ src, alt }) => {
                return (
                  <img
                    src={src}
                    alt={alt}
                    className="mx-auto my-0 max-w-[465px]"
                  />
                )
              },
            }}
          >
            {body}
          </ReactMarkdown>
        </Section>
      )}
    </Layout>
  )
}

export default NewslettersTemplate
