import user from '../user.json'
import data from '../data.json'
import friends from '../friends-list.json'
import transactions from '../transactions.json'
import {Profile} from './/Profile/Profile'
import {Statistics} from "./Statistics/Statistics";
import {FriendsList} from "./FriendsList/FriendsList";
import {Transactions} from "./Transactions/Transactions";

const App = () => {
    return <div>
        <Profile {...user}/>
        <Statistics title="Upload stats" data={data}/>
        <FriendsList friends={friends}/>
        <Transactions transactions={transactions}/>
    </div>;
}

export default App