import './Profile.css';

export interface ProfileProps {
  imgSrc: string;
  imgAlt: string;
}

const Profile = ({imgSrc, imgAlt}: ProfileProps) => {
  return <img src={imgSrc} alt={imgAlt} style = {{width: '200px'}} />
}

export default Profile