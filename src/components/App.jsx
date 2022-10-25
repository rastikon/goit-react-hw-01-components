import { Profile } from './Profile/Profile';
import { Container, Item } from './App.styled';
import { Statistics } from './Statistics/Statistics';
import { Friends } from './Friends/Friends';
import { upload } from '@testing-library/user-event/dist/upload';
import friends from '../data/friends.json';
import { Transactions } from './Transactions/Transactions';
import transactions from '../data/transactions.json';

export const App = ({ data }) => {
  return (
    <Container>
      <Item>
        <Profile {...data.user} />
      </Item>
      <Item>
        <Statistics title="Upload stats" data={data.data} />
      </Item>
      <Item>
        <Friends data={friends} />
      </Item>
      <Item>
        <Transactions items={transactions} />
      </Item>
    </Container>
  );
};
