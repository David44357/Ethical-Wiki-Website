import Head from 'next/head'

export default function NewPage() {
    return (
      <><script src="flutter.js" defer></script>
        <Head>
          <title>Ethical Wiki - A better way</title>
          <meta
            name="description"
            content="Most Wikipedia firms edit the site in secret, violating Wikipedia's Terms of Use and the FTC's covert marketing regulations. Ethical Wiki offers an alternative..."
          />
        </Head>
        <main>
            /* First make sure that you have installed the package */
  
  /* If you are using yarn */
  // yarn add @calcom/embed-react
  
  /* If you are using npm */
  // npm install @calcom/embed-react
  
  import { getCalApi } from "@calcom/embed-react";
  import { useEffect } from "react";
  export default function App() {
	useEffect(()=>{
	  (async function () {
		const cal = await getCalApi();
		cal("ui", {"styles":{"branding":{"brandColor":"#FF551C"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])
	return <button
	  data-cal-link="ethicalwiki/meeting"
	  data-cal-config='{"layout":"month_view"}'
	  >Click me</button>;
  };
  
        <iframe src="https://cal.com/ethicalwiki/meeting" width="100%" height="1100px"></iframe>
        
         </main>
  
      </>
    )
  }
  
