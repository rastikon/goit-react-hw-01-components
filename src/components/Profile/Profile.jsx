import PropTypes from 'prop-types';
import {
  Wrapper,
  Description,
  Img,
  Stats,
  StatItem,
  Text,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Wrapper>
      <Description>
        <Img src={avatar} alt="User avatar" className="avatar" />
        <Text>{username}</Text>
        <Text className="subtitle">@{tag}</Text>
        <Text className="subtitle">{location}</Text>
      </Description>

      <Stats>
        <StatItem>
          <Label>Followers </Label>
          <Quantity>{stats.followers}</Quantity>
        </StatItem>
        <StatItem>
          <Label>Views </Label>
          <Quantity>{stats.views}</Quantity>
        </StatItem>
        <StatItem>
          <Label>Likes </Label>
          <Quantity>{stats.likes}</Quantity>
        </StatItem>
      </Stats>
    </Wrapper>
  );
};

Profile.protoTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

// export default Profile;
