import Head from 'next/head'
import Cal from '@/components/Cal'
import { useEffect,useRef } from "react";

export default function NewPage() {
    return (
      <>
        {/* <Head>
          <title>Ethical Wiki - A better way</title>
          <meta
            name="description"
            content="Most Wikipedia firms edit the site in secret, violating Wikipedia's Terms of Use and the FTC's covert marketing regulations. Ethical Wiki offers an alternative..."
          />
        </Head> */}
    
   
         <Cal style={{ marginTop: '30px' }}></Cal>
      </>
    )
  }
  
