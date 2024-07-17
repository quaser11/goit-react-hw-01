import styled from '@emotion/styled'

export const Statistic = styled.section`
    display: flex;
    flex-direction: column;
    width:400px;
    margin:auto;
    margin-top:30px;
    border-radius:5px;
    overflow:hidden;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    `

export const Title = styled.h2`
    width: 100%;
    height:75px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StatLists = styled.ul`
    display: flex;
`

export const Item = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width:calc(100% / 3);
    height:75px;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
`