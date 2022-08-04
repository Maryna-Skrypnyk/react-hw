import ContainerProfile from './ContainerProfile';
import Description from './Description';
import StatsList from './StatsList';

const Profile = ({ stats, avatar, tag, name, location }) => {
  return (
    <ContainerProfile>
      <Description avatar={avatar} tag={tag} name={name} location={location} />
      <StatsList stats={stats} />
    </ContainerProfile>
  );
};

export default Profile;
