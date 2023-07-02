export default function Home() {
  return (
    <main className="prose prose-invert prose-headings:text-zinc-100 prose-headings:font-semibold prose-h1:font-3xl prose-h2:text-xl prose-h2:font-medium prose-p:text-zinc-400 prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl prose-a:text-cyan-400">
      <h1>API Documentation</h1>
      <p className="lead">Use the Protocol API to access contacts, conversations, group messages, and more and seamlessly integrate your product into the workflows of dozens of devoted Protocol users.</p>
      <div className="not-prose mb-16 mt-6 flex gap-3"><a className="inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition rounded-full bg-zinc-900 py-1 px-3 text-white hover:bg-zinc-700 dark:bg-emerald-400/10 dark:text-emerald-400 dark:ring-1 dark:ring-inset dark:ring-emerald-400/20 dark:hover:bg-emerald-400/10 dark:hover:text-emerald-300 dark:hover:ring-emerald-300" href="/quickstart">Quickstart<svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="mt-0.5 h-5 w-5 -mr-1"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"></path></svg></a><a className="inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition rounded-full py-1 px-3 text-zinc-700 ring-1 ring-inset ring-zinc-900/10 hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:ring-white/10 dark:hover:bg-white/5 dark:hover:text-white" href="/sdks">Explore SDKs</a></div>
      <h2 className="scroll-mt-24">Getting started</h2>
      <p className="lead">To get started, create a new application in your <a href="/#">developer settings</a>, then read about how to make requests for the resources you need to access using our HTTP APIs or dedicated client SDKs. When your integration is ready to go live, publish it to our <a href="/#">integrations directory</a> to reach the Protocol community.</p>
    </main>
  )
}
