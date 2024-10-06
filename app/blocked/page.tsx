export default function BlockedPage() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center bg-zinc-200 text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
      <h1 className="mb-4 text-4xl font-black tracking-tighter">
        You are not allowed to access this site
      </h1>
      <span className="text-sm">
        If you believe you should not be blocked, please contact my email{' '}
        <a href="mailto:nida.live@gmail.com" className="font-bold underline">
          nida.live@gmail.com
        </a>
      </span>
    </main>
  )
}

export const revalidate = 3600 // 1 hour
