import Data from './Data';
import './Result.module.css';
const Result = (props) => {
    // console.log('from result.js - ',props);
    return <div>
        <table>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest(year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map(row => <Data key={row.id} data={row} />)}
            </tbody>

        </table>
    </div>
};
export default Result;