import Section from '../Section';
import Description from './Description';
import StatsList from './StatsList';

const Profile = ({ stats, avatar, tag, name, location }) => {
  return (
    <Section classBox="profile">
      <Description avatar={avatar} tag={tag} name={name} location={location} />
      <StatsList stats={stats} />
    </Section>
  );
};

export default Profile;
