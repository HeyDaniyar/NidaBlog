import { Card, Grid, Metric, Text, Title } from '@tremor/react'
import { sql } from 'drizzle-orm'
import React from 'react'

import { db } from '~/db'

export default async function AdminPage() {
  const {
    rows: [count],
  } = await db.execute<{
    comments: number
    subscribers: number
    guestbook: number
  }>(
    sql`SELECT 
  (SELECT COUNT(*) FROM comments) as comments,
  (SELECT COUNT(*) FROM subscribers WHERE subscribed_at IS NOT NULL) as subscribers,
  (SELECT COUNT(*) FROM guestbook) as guestbook`
  )

  return (
    <>
      <Title>Dashboard</Title>

      <Grid numItemsMd={2} numItemsLg={3} className="mt-6 gap-6">
        <Card>
          <Text>Total Comments</Text>

          {count && 'comments' in count && <Metric>{count.comments}</Metric>}
        </Card>
        <Card>
          <Text>Total Subscribers</Text>
          {count && 'subscribers' in count && (
            <Metric>{count.subscribers}</Metric>
          )}
        </Card>
        <Card>
          <Text>Total Guestbook</Text>
          {count && 'guestbook' in count && <Metric>{count.guestbook}</Metric>}
        </Card>
      </Grid>
    </>
  )
}
