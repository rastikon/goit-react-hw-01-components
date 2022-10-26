import PropTypes from 'prop-types';
import { Item, OnlineLabel, Avatar, Title } from './Friends.styled';

export const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <Item key={id}>
      <OnlineLabel isOnline={isOnline} />
      <Avatar src={avatar} alt={name} />
      <Title>{name}</Title>
    </Item>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
