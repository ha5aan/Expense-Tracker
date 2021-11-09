import"./addnew.css"
function Addnew(){
return(<div>
<h3>
    Add New Transaction
</h3>
<hr/>
<form className="form-setting">
    <label>
        Description<br/>
        <input type="text"/>
    </label>
    <br/>
    <label>
        Amount<br/>
        <input type="number"/>
    </label>
    <input className="submit-b" type="submit" value="Add new Transaction" />
</form>
</div>)
}
export default Addnew;