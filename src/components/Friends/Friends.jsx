import PropTypes from 'prop-types';
import { FriendListItem } from './FriendLirstItem';
import { Wrapper } from './Friends.styled';

export const Friends = ({ data }) => {
  return (
    <Wrapper>
      {data.map(({ id, isOnline, name, avatar }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </Wrapper>
  );
};

Friends.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
