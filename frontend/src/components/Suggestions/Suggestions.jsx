import React from 'react'
import styles from './Suggestions.module.css'

const Suggestions = () => {
    return (
    <div className={styles.suggestions}>
        <div className={styles.header}>
        <h3>Not Sure About It?</h3>
        <h4>DryPlan says: </h4>
        </div>
        <div className={styles.suggestionsList}>
            <ul>
                <li>Bike riding</li>
                <li>Cozy stay-in</li>
            </ul>
        </div>
    </div>
    )
}

export default Suggestions
