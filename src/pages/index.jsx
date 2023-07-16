import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ethical Wiki - A better way</title>
        <meta
          name="description"
          content="Most Wikipedia firms edit the site in secret, violating Wikipedia's Terms of Use and the FTC's covert marketing regulations. Ethical Wiki offers an alternative."
        />
      </Head>

      <main>
        <Hero />
        <Pricing />
        <SecondaryFeatures />
        <PrimaryFeatures />
        <Faqs />
        <CallToAction />

      </main>

    </>
  )
}
