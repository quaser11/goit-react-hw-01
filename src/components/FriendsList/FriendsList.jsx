import {FriendsListUl} from "./FriendsList.styled";
import {FriendsListItem} from "../FriendsListItem/FriendsListItem";

export const FriendsList = ({friends}) => {
    return <FriendsListUl>
        {friends.map(friend => (
            <FriendsListItem key={friend.id} friend={friend} />
        ))}
    </FriendsListUl>;
}