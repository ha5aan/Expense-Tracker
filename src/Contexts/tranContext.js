import { createContext } from "react";

const initialTransaction=[
    {amount:100,desc:"Cash"},
    {amount:-40,desc:"Book"},
    {amount:-200,desc:"Camera"}
]


export const TransactionContext=createContext(initialTransaction);

// const TransactionContext = createContext([
//     {amount:500,desc:"Cash"},
//     {amount:-40,desc:"Book"},
//     {amount:-200,desc:"Camera"}
// ])
// export default TransactionContext;