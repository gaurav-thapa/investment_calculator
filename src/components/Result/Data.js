const Data = (props) => {
    const year = props.data.year;
    const t_savings = props.data.t_savings;
    const interest = props.data.interest;
    const t_interest = props.data.t_interest;
    const inv_capital = props.data.inv_capital;
    return <tr>
        <td>{year}</td>
        <td>₹ {t_savings.toFixed(2)}</td>
        <td>₹ {interest.toFixed(2)}</td>
        <td>₹ {t_interest.toFixed(2)}</td>
        <td>₹ {inv_capital.toFixed(2)}</td>
    </tr>
};
export default Data;