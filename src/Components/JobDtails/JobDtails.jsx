import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utlity/Localstroage";

const  JobDtails  = () => {
  const jobs = useLoaderData();
  const {id} = useParams();
  const idInt = parseInt(id);
  const job = jobs.find(job=> job.id === idInt);
  console.log(job.title);

  const handleApplyJob = () =>{
    saveJobApplication(id);
    toast('you have applied succesfully');
  }
  return (
    <div className="flex justify-between">
    

                  <div className="card bg-primary   mr-4 text-primary-content w-96">
                              <div className="card-body">
                                <h2 className="card-title">Job Title :{job.title} </h2>
                                <figure>
                                  <img
                                    src={job.image_link}
                                    alt="" />
                                </figure>

                                <p>Company Name:
                                {job.company}</p>
                                      <div className="card-actions  mt-4 justify-end">
                                        <button onClick={handleApplyJob} className="btn">Apply Now</button>
                                      </div>
                              </div>
                     </div>
                     <ToastContainer />
    </div>
  );
}

export default JobDtails;
