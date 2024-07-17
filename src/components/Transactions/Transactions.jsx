import {TransactionsHistory} from "./Transactions.styled";
import {TableContainer} from "./Transactions.styled";

export const Transactions = ({transactions}) => {
    return <TableContainer>
        <TransactionsHistory>
            <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
            </thead>

            <tbody>
            {transactions.map((transaction) => {
                return <tr>
                    <td>{transaction.type}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.currency}</td>
                </tr>
            })}
            </tbody>
        </TransactionsHistory>
    </TableContainer>
};