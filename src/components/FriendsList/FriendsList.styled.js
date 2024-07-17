import styled from '@emotion/styled'

export const FriendsListUl = styled.ul`
    display: flex;
    flex-direction: column;
    gap:10px;
    width:150px;
    margin: 0 auto;
    margin-top:30px;
`

export const Item = styled.li`
    display: flex;
    justify-content: start;
    align-items: center;
    gap:10px;
    padding:10px;
    width: 100%;
    border:1px solid #dfdedd;
    border-radius:5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; 
`

export const IsOnline = styled.span`
    width:20px;
    height: 20px;
    background-color: green;
    border-radius:50%;
`

export const IsOffline = styled.span`
    width:20px;
    height: 20px;
    background-color: red;
    border-radius:50%; 
`

export const Avatar = styled.img`
    width:40px;
    border-radius:5px;
    overflow:hidden;
`

export const Name = styled.p``