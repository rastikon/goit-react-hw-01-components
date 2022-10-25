import PropTypes from 'prop-types';
import { Wrapper, Item, OnlineLabel, Avatar, Title } from './Friends.styled';

export const Friends = ({ data }) => {
  const renderList = () =>
    data.map(({ id, isOnline, name, avatar }) => (
      <Wrapper key={id}>
        <Item>
          <OnlineLabel isOnline={isOnline} />
          <Avatar src={avatar} alt={name} />
          <Title>{name}</Title>
        </Item>
      </Wrapper>
    ));

  return renderList();
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
