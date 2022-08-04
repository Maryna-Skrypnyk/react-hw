import Container from './components/Container';
import Profile from './components/Profile';
import user from './components/Profile/user.json';
import defaultAvatar from './images/defaultImages/profile.png';

// import './App.css';

const App = () => {
  return (
    <Container>
      <Profile
        avatar={user.avatar && user.avatar !== '' ? user.avatar : defaultAvatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
    </Container>
  );
};

export default App;
