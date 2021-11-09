import'./balance.css'
function BalanceComponent(){
    return(
        <div>
            <div className="headings">
            <h3>Your Balance</h3>
            <h2>$260</h2>
            </div>
            <div  className="income-expense">
                <div>
                    <h3>
                        Income <br/>
                        $500
                    </h3>
                </div>
                <div  id="Expense">
                    <h3>
                        expense <br/>
                        $240
                    </h3>
                </div>
            </div>
        </div>
    )
}
export default BalanceComponent