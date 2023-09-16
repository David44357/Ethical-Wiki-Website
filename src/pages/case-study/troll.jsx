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



                    <p><img decoding="async" src="/images/about-bg.webp" /></p>
                    <h5 className='font-display text-xl text-slate-900 mt-12'>Introduction</h5>
                    <p>According <a href="https://meta.wikimedia.org/wiki/What_is_a_troll%3F">to Wikipedia</a>, a troll is someone that is deliberately disruptive to the site, often in order to inflame or invite conflict. That page points out that “It is really common for companies, individuals, and others to see a crowd-sourced Wikipedia editor making edits they don’t like and call them a troll. It’s one of those labels that are easily thrown around to slander your opposition.” In other words, when the subject of a Wikipedia page calls an editor a “troll,” more often than not it’s the subject of the article that is biased, not the alleged troll.</p>
                    <p>As a technical manner, this case study is really referring to what Wikipedia calls a “<a href="https://en.wikipedia.org/wiki/Wikipedia:POV_warrior">Point of View Warrior</a>.” This is someone extremely determined to get Wikipedia to articulate a radical, non-neutral depiction to readers and is willing to be disruptive to get their way. In this case, a client made changes to their product and made political statements that many customers didn’t like, causing some customers and political activists to attack them online wherever they could.</p>
                    <p>In many instances this point-of-view warrior would cite the company’s own website as a citation for criticisms of the company.</p>
                    <h5 className='font-display text-xl text-slate-900 mt-12'>The Rules</h5>
                    <p>Wikipedia generally will not sanction an editor just for making bad edits, even if they are REALLY bad edits. In fact, most new editors make poor edits until they gain more experience. It is more common for editors to be blocked for behavioral issues. The rule of law on Wikipedia is “<a href="https://en.wikipedia.org/wiki/Wikipedia:Consensus">consensus</a>.” Wikipedia editors will be sanctioned when they insist on making edits that are contrary to the consensus among other editors. For example, if an editor reverts others <a href="https://en.wikipedia.org/wiki/Wikipedia:Edit_warring">three times</a> within a 24-hour period, they may be blocked for 24 hours.</p>
                    <h5 className='font-display text-xl text-slate-900 mt-12'>The Reality</h5>
                    <p>To truly understand this situation, you need to walk a mile in the volunteer editor’s shoes. If a corporation comes in and asks them to block a crowd-sourced volunteer from making changes to their page, the situation will reek of corporate censorship and control. Many companies legitimately do not understand they do not control the page about them and will ask Wikipedia’s editors to stop other people from editing the page. Also, any given administrator hasn’t spent time on the page or had the same experiences with the editor.</p>
                    <h5 className='font-display text-xl text-slate-900 mt-12'>The Strategy</h5>
                    <p>Now that we’ve walked a metaphorical mile in the administrator’s shoes, we need to them to walk a mile in ours. Point-of-view warriors can only be defeated by “consensus.” In other words, we need several editors to disagree with the one making poor edits. The best approach is to focus on small, specific changes that are really obvious under Wikipedia’s rules; changes everyone will get behind. Then, let editors make their own decisions about whether the editor is disruptive after they’ve experienced it for themselves.</p>
                    <h5 className='font-display text-xl text-slate-900 mt-12'>The Execution</h5>
                    <p>Fighting off the troll was a multi-month process. The client posted at Wikipedia’s Neutral Point of View Noticeboard. This drew two editors to the page, but both were immediately reverted by the troll. They were not persistent and just let themselves be reverted. The client followed up on the Reliable Sources Noticeboard, asking for a second opinion on specific citations that were obviously unacceptable.</p>
                    <p>With time, and patience, editors started to trickle in. One was a customer that came across the article by chance and was surprised by the content. The client kept them engaged by pointing out problems with the page and asking for specific changes. Eventually, there were three editors still involved in the page that all saw how clear it was that one editor was bent on destroying the client’s reputation, not building an encyclopedia.</p>
                    <p>After consensus was formed for the client’s requested edit, the change was made, but the troll kept reverting it. They reverted two different editors three times. Instead of blocking the editor, they requested page protection, which prevents unregistered editors from making changes to the page for one week. The week ended, but the troll never returned.</p>
                    <p>Once the troll situation was finally resolved, the client shared a draft I helped them prepare of a substantially improved, expanded, and more neutral page. The editors overwhelmingly supported it as a vast improvement and incorporated it with some tweaks. Six months after we had started, our patience finally paid off.</p>



                </div>
            </div>
        </Container>
    </section>

</>

