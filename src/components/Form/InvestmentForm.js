import classes from './InvestmentForm.module.css';
const InvestmentForm = (props) => {
    let valid;
    const formSubmitHandler = (event) => {
        const inputs = document.querySelectorAll('input');
        for ( const element of inputs){
            if(!element.value){
                valid = false;
                break;
            }
            else{
                valid=true;
            }
        }
        // console.log('valid - ',valid);
        if (valid) {
            event.preventDefault();
            const principle = parseFloat(document.getElementById('currentSavings').value.trim());
            const yearlySavings = parseFloat(document.getElementById('yearlySavings').value.trim());
            const rate = parseFloat(document.getElementById('rate').value.trim());
            const time = parseFloat(document.getElementById('years').value.trim());

            const data = {
                principle: principle,
                rate: rate,
                time: time,
                yearlySavings: yearlySavings
            }
            props.saveData(data);
            clearUserInputs();
        }
    };
    const clearUserInputs =() =>{
        const inputs = document.querySelectorAll('input');
        inputs.forEach(element => {
            element.value = '';
        });
    }
    const resetHandler = (event) => {
        event.preventDefault();
        clearUserInputs();
        props.reset();
    };
    return <form>
        <div className={classes.investment_row}>
            <div>
                <label htmlFor='currentSavings'>CURRENT SAVINGS</label>
                <input id='currentSavings' type='number' required></input>
            </div>
            <div><label htmlFor='yearlySavings'>YEARLY SAVINGS</label>
                <input id='yearlySavings' type='number' required></input>
            </div>

        </div>
        <div className={classes.investment_row}>
            <div>
                <label htmlFor='rate'>EXPECTED INTEREST (%, PER YEAR )</label>
                <input id='rate' type='number' required></input>
            </div>
            <div>
                <label htmlFor='years'>INVESTMENT DURATION (YEARS)</label>
                <input id='years' type='number' required></input>
            </div>
        </div>
        <div className={classes.investment_row}>
            <button type='reset' onClick={resetHandler} className={classes.danger}>Reset</button>
            <button type='submit' onClick={formSubmitHandler} className={classes.primary}>Calculate</button>
        </div>
    </form>
}
export default InvestmentForm;