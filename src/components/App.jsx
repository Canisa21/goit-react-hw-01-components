import { Profile } from "./Profile";
import user from "../data/user.json";
import data from '../data/data.json'
import { Statistics } from "./Statistics";
import { FriendList } from "./FriendList";
import friends from "../data/friends.json";
import { TransactionHistory } from "./TransactionsHistory";
import transactions from "../data/transactions.json"
export const App = () => {
  return (
    <>
      <Profile 
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
        stats={user.stats}>
      </Profile>

      <Statistics title="Upload stats" status={data}></Statistics>

      <FriendList friends={friends}></FriendList>
       <TransactionHistory items={transactions}></TransactionHistory>

    </>)};
