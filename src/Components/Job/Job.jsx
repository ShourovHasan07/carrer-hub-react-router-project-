import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const job = ({job}) => {
const {id,title,company,location,image_link} = job;

  return (
    <div className="card card-compact bg-base-100  shadow-xl">
    <figure>
      <img
        src={image_link}
        alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p>{company}</p>
      <div className='px-5 py-2 font-extrabold border rounded mr-4'>Remote</div>
      <div className='px-5 py-2 font-extrabold border rounded'>Full Time</div>
      <div className="flex mt-4">
       <h2> <CiLocationOn className="text-2xl"></CiLocationOn > {location}</h2>
      </div>
      <div className="card-actions ">
      <Link to={`/job/${id}`}>  <button className="btn btn-primary">View Details</button></Link>
      </div>
    </div>
  </div>
  );
};

export default job;