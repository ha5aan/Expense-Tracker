import './history.css'
import { useContext } from 'react'
import { TransactionContext } from '../../Contexts/tranContext'
function History(){

    // let transactions =  [
    //     {amount:500,desc:"Cash"},
    //     {amount:-40,desc:"Book"},
    //     {amount:-200,desc:"Camera"}
    // ]
    let transactions = useContext(TransactionContext)
    return(
        <div className="history">
<h3> History</h3>
<hr/>
        <ul>
            { transactions.map((transobj,index)=>{
                return(
                    <li>
                    <span>{transobj.desc}</span>
                    <span>{transobj.amount}</span>
                </li>        
                )
            })}
           
        </ul>
        </div>
    )
}
export default History