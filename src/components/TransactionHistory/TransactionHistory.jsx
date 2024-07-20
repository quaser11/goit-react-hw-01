import {TransactionsHistory} from "./TransactionHistory.styled.js";
import {TableContainer} from "./TransactionHistory.styled.js";

export const TransactionHistory = ({transactions}) => {
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
                return <tr key={transaction.id}>
                    <td>{transaction.type}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.currency}</td>
                </tr>
            })}
            </tbody>
        </TransactionsHistory>
    </TableContainer>
};