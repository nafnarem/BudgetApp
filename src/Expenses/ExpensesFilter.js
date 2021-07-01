import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
    let handleChange = (event) => {
        props.onChangeFilter(event.target.value)
    }
return (
    <div className="expenses-filter">
        <div className="expenses-filter__control">
        <label>Choose a year </label>
        <select onChange={handleChange} value ={props.selected}>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
        </select>
        </div> 

    </div>
)
}
export default ExpensesFilter;