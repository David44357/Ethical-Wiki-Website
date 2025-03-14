import Head from 'next/head'
import Cal from '@/components/Cal'
// import { useEffect,useRef } from "react";

import Cal, { getCalApi } from "@calcom/embed-react";
  import { useEffect } from "react";
  export default function MyApp() {
	useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({"namespace":"meeting"});
		cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])
	return <Cal namespace="meeting"
	  calLink="ethicalwiki/meeting"
	  style={{width:"100%",height:"100%",overflow:"scroll",margin:"20px"}}
	  config={{"layout":"month_view"}}
    
	  
	/>;
  };
  

}




  
