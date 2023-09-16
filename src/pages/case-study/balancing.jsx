import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

export default () => <>
    <section
        id="faq"
        aria-labelledby="faq-title"
        className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
        <Image
            className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
            alt=""
            width={1558}
            height={946}
            unoptimized
        />
        <Container className="relative w-1/2 mx-auto">
            <div class="entry-content content leading-tight text-sm">
                <p className = "text-lg leading-tight"><img alt="async" src="/images/sierrafarm-4.webp" /></p>
                <h5 className='font-display text-xl text-slate-900' >Introduction</h5>
                <p className="text-lg leading-tight">A large technology company had a Wikipedia page that focused almost exclusively on their controversies. These controversies were genuinely a significant part of the company’s history. However, it wasn’t right for the controversies to be the main emphasis of the page. The company contacted Ethical Wiki about creating a more complete, comprehensive, up-to-date, and balanced Wikipedia page.</p>
                <h5 className='font-display text-xl text-slate-900 mt-12'>The Rules</h5>
                <p className = "text-lg leading-tight">Wikipedia pages are intended to be representative summaries of the total body of literature on a topic. The <a href="https://en.wikipedia.org/wiki/Wikipedia:Neutral_point_of_view#Due_and_undue_weight">Neutral Point of View policy</a> covers the concept of “due weight.” The idea of due weight is that the emphasis an article places on different perspectives or topics should be representative of their weight in independent literature on the subject of the page. It is possible for a company to be primarily known for controversy, in which case it is proper for the Wikipedia page to focus on it. </p>
                <p className = "text-lg leading-tight">When a page is about a living human being, Wikipedia’s <a href="https://en.wikipedia.org/wiki/Wikipedia:Biographies_of_living_persons#Balance">Biographies of Living Persons</a> rule applies. Generally, this requires that Wikipedians trim controversial or negative content if it is excessive compared to the rest of the article. The trimmed content is usually stored somewhere so that it can be reincorporated once the rest of the page is further expanded.</p>
                <p className = "text-lg leading-tight">However, this rule doesn’t apply corporations. When a Wikipedia page is not about a human being, editors are allowed to focus exclusively on controversial issues that interest them, while leaving the rest of the article un-developed. This is supported by Wikipedia’s philosophy towards incremental improvement, but it does mean the only way to balance a company page is to write the rest of the page.</p>
                <h5 className='font-display text-xl text-slate-900 mt-12'>The Reality</h5>
                <p className = "text-lg leading-tight">Wikipedia’s editors contribute on a volunteer basis. They are motivated to write about a topic by their enthusiasm for the topic. This often means pages about Taylor Swift or popular video games get a lot more attention than those about business topics. Even businesspeople that contribute to Wikipedia rarely do so predominantly on business topics. The result is that there are many company pages where the controversies are almost all that’s been written about them on Wikipedia, because the controversies prompt interest from volunteer editors, whereas the rest of the company’s history does not.</p>
                <h5 className='font-display text-xl text-slate-900 mt-12'>The Strategy</h5>
                <p className = "text-lg leading-tight">The controversies genuinely belonged in the article. Our goal wasn’t to make significant changes to them, but to develop “the rest of the article,” filling in a gap left by a lack of interest among Wikipedia’s volunteers. </p>
                <h5 className='font-display text-xl text-slate-900 mt-12'>The Execution</h5>
                <p className = "text-lg leading-tight">I prepared a draft article as a proposed replacement that was more balanced and comprehensive. The controversies were incorporated into the chronology of the company’s history in the draft, but not the focus of the entire page. </p>
                <p className = "text-lg leading-tight">The draft was shared with Wikipedia’s editors, along with a clear disclosure that it was prepared on behalf of the company. Wikipedia’s editors agreed the prior version of the article was highly imbalanced and unfair. They adopted our version of the article after making some minor changes based on feedback from Wikipedians. Later on, the page was ranked as being among the top 1% best articles on Wikipedia with the “Good Article” designation.</p>
                <p className = "text-lg leading-tight">A month after achieving the “Good Article” designation, a new editor arrived on the Talk page. This particular editor had strong negative attitudes towards corporations contributing to Wikipedia. The editor accused us of using Wikipedia for advertising, said we should be indefinitely banned from Wikipedia, and made other derogatory remarks. Because the content was neutral and we were transparent, the editors we previously engaged came to our defense. The hostile editor did not make any changes to the page.</p>
            </div>
        </Container>
    </section>

</>

