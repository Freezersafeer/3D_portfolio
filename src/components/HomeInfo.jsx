import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Safeer Ahamed B</span>
        👋
        <br />
        An MCA Student & A Tech Enthusiast
      </h1>
    );

  if (currentStage === 2)
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          I build practical projects.
          <br /> Explore my skills and learning journey.
        </p>
        <Link to='/about' className='neo-brutalism-white neo-btn'>
          About me
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );

  if (currentStage === 3)
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          From coursework to hackathons, I learn by building.
          <br /> Have a look at the projects I am working on.
        </p>
        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          View projects
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );

  if (currentStage === 4)
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Interested in collaborating or discussing a project?
          <br /> Let's connect.
        </p>
        <Link to='/contact' className='neo-brutalism-white neo-btn'>
          Contact me
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );

  return null;
};

export default HomeInfo;
