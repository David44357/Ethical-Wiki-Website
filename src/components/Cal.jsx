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
		const cal = await getCalApi();
		cal("ui", {"styles":{"branding":{"brandColor":"#FF551C"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])
	return (<div className="content-center"><Cal
	  calLink="ethicalwiki/meeting"
	  //style={{width:"100%",height:"100%",overflow:"scroll"}}
	  config={{layout: 'month_view'}}
	/></div>);
  };
  
