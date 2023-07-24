import { Container } from '@/components/Container'

const faqs = [
  {
    question: 'How can I tell if a Wikipedia firm is actually ethical?',
    answer:
      'Many Wikipedia services advertise they are ethical even though they are banned from Wikipedia for illegal, covert practices. Luckily, Wikipedia itself <a href="https://en.wikipedia.org/wiki/Wikipedia:List_of_paid_editing_companies#Never_blocked">has a list of vendors</a> that meet two basic criteria: (1) Wikipedians know where we are on Wikipedia (2) and Wikipedians have not blocked us. Using a vendor from that list to avoid falling for scams.'
  },
  {
    question: 'Why participate ethically when it\'s so much harder?',
    answer:
      'Using unethical practices often garner short-term results at a long-term cost. Even if your changes are not immediately reverted, often a <a href="https://en.wikipedia.org/wiki/Template:Undisclosed_paid">badge of shame</a> is later added to the page, publicly advertising your misconduct to readers. Ethical Wiki is often brought in to repair things after someone has already created a bad situation using a black-hat vendor.'
  },
  {
    question: 'How much does it cost?',
    answer: 'Our fees range from $900 for small, simple projects, to $8,000 for extremely large pages on billion dollar companies. Most projects range from $2,000-$4,000. New pages are usually small and are always $1,800.',
  },
  {
    question: 'How long does it take?',
    answer:
      'Wikipedians are volunteers that are not beholden to any particular timetable. Sometimes, very large projects are approved by editors within 24 hours. Other times, we spend months following up on obvious changes. Three months is a good general timetable to circulate internally.',
  },
  {
    question: 'Can I write my own content and have Ethical Wiki post it?',
    answer:
      'Sometimes clients insist on writing their own content for Ethical Wiki to review and provide feedback on. This approach has a 100% failure rate. It almost always doubles the budget when the client eventually hires Ethical Wiki to write the content.'
  },
  {
    question: 'How do I get started?',
    answer:
      'Schedule a consultation to discuss what changes you are looking for and get advice on how Wikipedias rules apply to your situation. Once you have settled on what changes you want to pursue, Mr. King will provide a Wikipedia Assessment that includes a quote.',
  },
  {
    question: 'What if I want to create a new page?',
    answer:
      'In most cases, Ethical Wiki advises against creating new pages. Wikipedia is pretty reliable about starting a page on those topics that are famous enough to meet Wikipedias criteria. However, if you are looking to submit a new page, we recommend using our New Page Assessment tool to get a free assessment from Mr. King on whether your topic is famous enough to qualify for a page.',
  }
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-10 sm:py-16"
    >

      <Container className="relative mx-auto sm:px-10 lg:px-20">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl mb-8 text-center"
          >Frequently asked questions
          </h2>
        </div>
<ul class="grid md:grid-cols-2 gap-6 grid lg:grid-cols-2">
        {faqs.map((item) => (
          <>
            <li><h3 className="font-display text-lg leading-7 text-slate-900 px-2 sm-mt-10">
              {item.question}
            </h3>
            {<div className='text-sm px-2' dangerouslySetInnerHTML={{ __html: item.answer }} />}</li>
          </>
        ))}
</ul>
      </Container>
    </section>
  )
}
