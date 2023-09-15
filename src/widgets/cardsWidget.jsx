/* This example requires Tailwind CSS v2.0+ */
const posts = [
    {
        title: 'Dealing with a Troll',
        href: '/case-study/troll',
        category: { name: 'Article', href: '#' },
        description:
            'According to Wikipedia, a troll is someone that is deliberately disruptive to the site, often in order to inflame or invite conflict.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        imageUrl: '/images/about-bg.webp',

    },
    {
        title: 'Ending a Multi-Year Edit-War',
        href: '/case-study/edit-war',
        category: { name: 'Video', href: '#' },
        description:
            'A billion dollar corporation was in a protracted edit-war with a small business they compete with over the content of their Wikipedia page...',
        date: 'Mar 10, 2020',
        datetime: '2020-03-10',
        imageUrl: '/images/punch.webp',
    },
    {
        title: 'Creating a New Page',
        href: '/case-study/new-page',
        category: { name: 'Case Study', href: '#' },
        description:
            'Almost 20 years ago, two people started a website that started as a basic forum. Over the years, the website slowly grew into a job board... ',
        date: 'Feb 12, 2020',
        datetime: '2020-02-12',
        imageUrl: '/images/movingup-3.webp',
    },
    {
        title: 'Balancing a Controversial Page',
        href: '/case-study/balancing',
        category: { name: 'Case Study', href: '#' },
        description:
            'A large technology company had a Wikipedia page that focused almost exclusively on their controversies...',
        date: 'Feb 12, 2020',
        datetime: '2020-02-12',
        imageUrl: '/images/sierrafarm-4.webp',

    },
]

export default function CardsWidget() {
    return (
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
            style={{ backgroundColor: '#b52e02' }}
        >

            <div className="relative max-w-7xl mx-auto">

                <div className="md:text-center">
                    <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl text-center">
                        Case Studies
                    </h2>
                    <p className="mt-4 text-lg text-orange-50 w-9/12 m-auto">
                        Most of Ethical Wiki's work is focused on rewriting abandoned Wikipedia pages that didn't attract volunteer editors. However, the case studies below show how we've helped clients through some especially difficult situations.  </p>
                </div>



                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
                    {posts.map((post) => (
                        <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                            </div>
                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <a href={post.href} className="block mt-2">
                                        <p className="text-md font-semibold text-gray-900">{post.title}</p>
                                        <p className="mt-3 text-sm text-gray-500">{post.description}</p>
                                    </a>
                                </div>
                                <p className="text-sm font-medium brand-color mt-4">
                                    <a href={post.href} className="brand-color hover:underline">Read case study</a>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
