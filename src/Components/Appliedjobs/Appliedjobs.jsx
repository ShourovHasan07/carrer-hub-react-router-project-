import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreJobApplication } from "../../utlity/Localstroage";


const Appliedjobs = () => {
  const jobs = useLoaderData();
   useEffect(()=>{
  const storedJobIds = getStoreJobApplication();
  if(jobs.length>0){
    const jobsApplied = jobs.filter(job=>storedJobIds.includes(job.id))
    console.log (jobsApplied)
  }

   },[])
  return (
    <div>
      <h1>this is applied job component  <br />Sara khb khrp maya  </h1>
    </div>
  );
};

export default Appliedjobs;