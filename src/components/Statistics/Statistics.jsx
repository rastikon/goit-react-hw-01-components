import PropTypes from 'prop-types';
import {
  Wrapper,
  StatTitle,
  Stats,
  StatsItem,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, data }) => {
  // Функція випадкового кольору
  const randomBgColor = () => 'hsla(' + Math.random() * 360 + ', 100%, 50%, 1)';

  // Рендер елемента списку
  const renderData = () =>
    data.map(({ id, label, percentage }) => (
      <StatsItem key={id} bg={randomBgColor()}>
        <Label>{label}</Label>
        <Percentage>{percentage} %</Percentage>
      </StatsItem>
    ));

  return (
    <Wrapper>
      <StatTitle>{title}</StatTitle>
      <Stats>{renderData()}</Stats>
    </Wrapper>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
