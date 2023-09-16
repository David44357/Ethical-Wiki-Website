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
                <div class="entry-content content">
                    <p className = "text-lg leading-tight"><img decoding="async" src="/images/punch.webp" /></p>
                    <h5 className='font-display text-xl text-slate-900 mt-12'>Introduction</h5>
                    <p className = "text-lg leading-tight">A billion dollar corporation was in a protracted edit-war with a small business they compete with over the content of their Wikipedia page. Neither the client&nbsp;nor the small business were transparent about their&nbsp;relationship to the company. Both had egregiously violated Wikipedia’s content policies. Both were immensely frustrated by the other. Both were reverting the other and adding their own bias content. On Wikipedia we call this is an “edit-war,” but going to war wasn’t the answer.</p>
                    <h5 className='font-display text-xl text-slate-900 mt-12'>The Rules</h5>
                    <p className = "text-lg leading-tight">Wikipedia’s <a href="https://foundation.wikimedia.org/wiki/Terms_of_Use/en#4._Refraining_from_Certain_Activities">Terms of Use</a> require that editors disclose their “employer, client, and affiliation with respect to any contribution for which [they] receive, or expect to receive, compensation.” If you read this closely, you may notice that it applies to the billion corporation the Wikipedia page is about, but not the editor getting involved in a competitor’s page. The competing small business owner does not have an&nbsp;“employer, client, or affiliation” relationship with the subject of the page to disclose.</p>
                    <p className = "text-lg leading-tight">In contrast, <a href="https://en.wikipedia.org/wiki/Wikipedia:Conflict_of_interest#What_is_conflict_of_interest?">Wikipedia’s Conflict of Interest Guideline</a>&nbsp;applies to a broader range of editors. It covers those that have “an external role or relationship” that could reasonably undermine their “primary role” as a Wikipedia editor. The competitor did have an “external role” that could interfere with their neutrality. However, as you’ll see in the next section, this argument is dangling from a finer thread than might be apparent at first blush.</p>
                    <h5 className='font-display text-xl text-slate-900 mt-12'>The Reality</h5>
                    <p className = "text-lg leading-tight">It is generally accepted on Wikipedia that the editors most likely to contribute to a page are often those within the same industry. Industry insiders may also be the best qualified to write about the topic. If someone is in the same industry as company A, but not actually employed by company A, there is a good chance they have some affiliation with at least one competitor. Therefore, Wikipedia doesn’t want to ban people from editing articles about companies in their industry.</p>
                    <p className = "text-lg leading-tight">There are two common scenarios for this kind of editing. In the first, someone in research and development spends their free time editing pages about companies in their industry, including some that compete with their employer. This scenario is widely considered acceptable. In the second, a company seeks to defame competitors as a part of a marketing plan. This is widely considered inappropriate. The primary difference is whether someone is genuinely acting in a personal or professional capacity.</p>
                    <h5 className='font-display text-xl text-slate-900 mt-12'>The Strategy</h5>
                    <p className = "text-lg leading-tight">The client initially contacted me to help them fight in Wikipedia court. They wanted to fight the good fight and win sanctions against the other editor. However, the only policies the competitor violated for certain were those on <a href="https://en.wikipedia.org/wiki/Wikipedia:Neutral_point_of_view#Due_and_undue_weight">due weight</a> and independent citations. These are fairly trivial content violations and editors are mostly only blocked or banned for behavioral violations. In contrast, the billion dollar company also violated the Conflict of Interest Guideline and the Terms of Use by aggressively editing the page with promotional content without disclosing their financial connection to the company. The client was actually more likely to be sanctioned themselves than the small business owner they wanted to go after.</p>
                    <p className = "text-lg leading-tight">I persuaded the client to take a more diplomatic approach. Despite a lot of contentious editing back and forth, very little communication had taken place between the client and the editor they were feuding with. Before engaging with Ethical Wiki, they lacked the vocabulary, process know-how, and rules expertise to have that conversation effectively. Instead, we planned on talking to the editor and working things out by focusing on the content and the citations together.</p>
                    <h5 className='font-display text-xl text-slate-900 mt-12'>The Execution</h5>
                    <p className = "text-lg leading-tight">First, I authored a complete, revamped draft of the page with 50+ citations. The draft included the controversies the other editor was interested in but was more balanced and complete overall. I hammered out the content of the draft with the client over several weeks, sometimes going over it line-by-line or word-by-word. Controversial pages can be more difficult to get approved internally. The draft included information that was harmful to the client’s brand and allegations they felt were untrue. Eventually, we reached a “final” version we were prepared to share with Wikipedia’s editors.</p>
                    <p className = "text-lg leading-tight">On Wikipedia, we started going through the page section-by-section or paragraph-by-paragraph. Over more than 10 pages of discussion, we hammered out the issues with the client’s competitor. In some instances, we found a compromise. In others, we got a third, independent editor to provide an outside opinion.</p>
                    <p className = "text-lg leading-tight">The end result was extraordinary in two ways. First, our collaboration eventually resulted in a very neutral and comprehensive page. The page was ranked as being among the top 1% best pages on Wikipedia with the “Good Article” designation. In my opinion, it was even more neutral as a result of the collaboration between two editors with opposing motives.</p>
                    <p className = "text-lg leading-tight">Second, we established a friendly, long-term, collaborative relationship with the other editor. In the future, we were able to talk about new additions and collaborate on other content changes long-term. This was the epitome of Wikipedia’s <a href="https://en.wikipedia.org/wiki/Wikipedia:Assume_good_faith">Assume Good Faith</a> principle. Conflict was natural given our respective interests in the page, but a bit of patience and civility went a long way. The results were a win-win for everyone, including the client and Wikipedia.</p>
                </div>
            </div>
        </Container>
    </section>

</>

