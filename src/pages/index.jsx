import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

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
      <Header />
      <main>
        <Hero />
        <Pricing />
        <SecondaryFeatures />
        <PrimaryFeatures />


        <CallToAction />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
