import Head from 'next/head'
import Cal from '@/components/Cal'
// import { useEffect,useRef } from "react";

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function NewPage() {
  const router = useRouter();

  useEffect(() => {
    // Replace 'YOUR_REDIRECT_URL' with the actual URL you want to redirect to.
    router.push('https://cal.com/ethicalwiki/meeting'); 
  }, [router]);
  return (
    <div>
      Loading calendar...
    </div>
  );
}




  
