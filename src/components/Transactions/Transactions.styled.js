import styled from '@emotion/styled'

export const TableContainer = styled.div`
    position:relative;
    width:800px;
    margin:auto;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    height:200px;
    margin-top:30px;
    margin-bottom:30px;
    overflow-y: scroll;
`

export const TransactionsHistory = styled.table`
    width:100%;
    border-collapse: collapse;
    
        thead{
        position:sticky;
        top:0;
        z-index:1;
        }
        
        tr > th {
        font-weight:300;
        background-color: #45befb;
        color: white;
        }
        
        td {
        width: calc(100% / 3);
        color:#afabaa;
        }
        
        td:nth-child(1) {
        padding-left:117px;
        }
        
        td:not(:first-child){
        padding-right:117px;
        text-align:right;
        }
        
        tr:nth-child(2n) {
        background-color: #f3f1ef;
        }
`