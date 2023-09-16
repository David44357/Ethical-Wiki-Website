import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { Container } from '@/components/Container'

const features = [
  {
    name: 'Legal Compliance',
    summary: 'Be transparent about your vested interest in the page',
    description:
      'Wikipedia\'s Terms of Use and FTC regulations prohibit brands from participating on crowd-sourced websites without announcing their connection to the topic.',
    icon: () => <><img src="/icons/regulations-icon.png" /></>,
  },
  {
    name: 'Wikipedia Policy',
    summary:
      'Request edits rather than making them yourself',
    description:
      'Wikipedia\'s Conflict of Interest policy requires that you request edits from the site\'s editors, just like you would for any other independent website.',
    icon: () => <><img src="/icons/release-time-icon.png" /></>,
  },
  {
    name: 'Wikipedias Ethos',
    summary:
      'Do your best to contribute neutral content.',
    description:
      'Wikipedia\'s Arbitration Committee (the Supreme Court of Wikipedia) has confirmed they expect you to comply with the spirit of Wikipedia, not just the letter of its rules.',
    icon: () => <><img src="/icons/stability-icon.png" /></>,
  },
]

function Feature({ feature, isActive, className, ...props }) {
  return (
    <div
      className={clsx(className)}
      {...props}
    >

      <div className='flex justify-between'>
        <div style={{ maxWidth: '52px' }} className='pt-10'><feature.icon /></div>
        <div className='pl-4'>
          <h3 className={'text-sm font-medium brand-color'}>{feature.name}</h3>
          <p className="font-display text-xl text-slate-900">
            {feature.summary}
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.name}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              <Image
                className="w-full"
                src={feature.image}
                alt=""
                sizes="52.75rem"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <Tab.Group as="div" className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <Tab.List className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.name}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                
                className="relative"
              />
            ))}
          </Tab.List>

        </>
      )}
    </Tab.Group>
  )
}

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-20 pt-20 sm:pb-32 sm:pt-32 lg:pb-16 lg:pt-16"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center mb-10">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Three steps to Ethical Wikipedia Engagement
          </h2>

        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
