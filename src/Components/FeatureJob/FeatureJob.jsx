import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const FeatureJob = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength,setDataLenth]=useState([4]);

  useEffect(() => {
    fetch("/jobdata.json")
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => setJobs(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='text-center'>
      <h2 className="text-5xl">Featured Job</h2>
      <p>Job details: {jobs.length}</p>

        <div className='grid grid-cols-2 border-reious : 2 '>
        {
            jobs.slice(0,dataLength).map(job => <Job key={job.id} job={job} />)
          }
        </div>

        <div className={dataLength === jobs.length ?'hidden' :''} >
           <button className='"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"' onClick={()=> setDataLenth(jobs.length)}> View All Jobs</button >
        </div>
    </div>
  );
};

export default FeatureJob;
