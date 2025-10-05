import React from 'react'
import { IoRainySharp } from "react-icons/io5";
import styles from './WeatherTimeline.module.css'

const WeatherTimeline = () => {
    console.log("Component is rendering!");

    return (
    <div>
        <h2>How's Our Weather Looking Like?</h2>
        <table className={styles.weatherForecast}>
            <thead>
            <tr className={styles.tableHeader}>
                <th>0600-0800hrs</th>
                <th>0800-1000hrs</th>
                <th>1000-1200hrs</th>
                <th>1200-1300hrs</th>
                <th>1300-1500hrs</th>
                <th>1500-1700hrs</th>
                <th>1700-1900hrs</th>
                <th>1900-2100hrs</th>
            </tr>
            </thead>

            <tbody>
            <tr>
                {/* Each time slot gets its OWN td */}
                <td>
                    <IoRainySharp />
                    <p>30% chance</p>
                </td>
                <td>
                    <IoRainySharp />
                    <p>30% chance</p>
                </td>
                <td>
                    <IoRainySharp />
                    <p>30% chance</p>
                </td>
                <td>
                    <IoRainySharp />
                    <p>30% chance</p>
                </td>
                <td>
                    <IoRainySharp />
                    <p>30% chance</p>
                </td>
                <td>
                    <IoRainySharp />
                    <p>30% chance</p>
                </td>
                <td>
                    <IoRainySharp />
                    <p>30% chance</p>
                </td>
                <td>
                    <IoRainySharp />
                    <p>30% chance</p>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
    )
}

export default WeatherTimeline



/*
8798ea
5b60a2
ab9ed6
7884d0
*/
