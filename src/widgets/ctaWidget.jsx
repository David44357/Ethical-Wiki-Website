/* This example requires Tailwind CSS v2.0+ */
export default function CtaWidget() {
    return (
        <div  style={{ backgroundColor: '#b52e02' }}>
            <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    <span className="block">Get Started</span>
                </h2><div class="grid grid-cols-2 gap-4">
                <a href="/meeting" className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-semibold rounded-md brand-color bg-white hover:bg-indigo-50 sm:w-auto">Schedule a consultation</a>
                <a href="https://new-page-assessment-6p802b.flutterflow.app/" className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-semibold rounded-md brand-color bg-white hover:bg-indigo-50 sm:w-auto">New page assessment</a>
            </div></div>
        </div>
    )
}
