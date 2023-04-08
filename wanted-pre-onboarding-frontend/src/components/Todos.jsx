import { useState, useEffect } from 'react';
import styles from './Todos.module.css';

export function Todos () {

    return (
        <div className={styles.wrap}>
          <h1 className={styles.title}>To do List</h1>
          <div className={styles.container}>
            <div className={styles.list}>
            
            </div>
          </div>
          
        </div>
    )
}

{/* <li>
  <label>
    <input type="checkbox" />
    <span>TODO 1</span>
  </label>
</li>
<li>
  <label>
    <input type="checkbox" />
    <span>TODO 2</span>
  </label>
</li> */}