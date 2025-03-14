/* First make sure that you have installed the package */
/* If you are using yarn */
// yarn add @calcom/embed-react
/* If you are using npm */
// npm install @calcom/embed-react
import Cal,{ getCalApi } from "@calcom/embed-react";
import { useEffect,useRef } from "react";
import { Button } from './Button'


export default function MyApp() {
	useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({"namespace":"meeting"});
		cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])
	return <Cal namespace="meeting"
	  calLink="ethicalwiki/meeting"
	  style={{width:"100%",height:"100%",overflow:"scroll",margin: "20px"}}
	  config={{"layout":"month_view"}}
	/>;
	
  };
  
