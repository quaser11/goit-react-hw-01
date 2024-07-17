import {Item , IsOnline, IsOffline, Avatar, Name} from '../FriendsList.styled'

export function FriendsListItem({friend}) {
    const {avatar, name, isOnline} = friend
    return <Item>
        {isOnline ? <IsOnline></IsOnline> : <IsOffline></IsOffline>}
        <Avatar src={avatar} alt="User avatar" width="48"/>
        <Name>{name}</Name>
    </Item>
}