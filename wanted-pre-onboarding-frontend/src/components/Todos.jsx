import { useState, useEffect } from 'react';
import styles from './Todos.module.css';

export function Todos () {




    return (
        <div className={styles.wrap}>
          <header className={styles.titlecontainer}>
          <h1 className={styles.title}>To do List</h1>
          </header>
          <div className={styles.createContainer}>
            <input data-testid="new-todo-input"
                   placeholder='할 일을 입력하세요' />
            <button data-testid="new-todo-add-button">추가</button>
          </div>
          <div className={styles.listcontainer}>
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
    <button data-testid="modify-button">수정</button>
    <button data-testid="delete-button">삭제</button>
  </label>
</li>
<li>
  <label>
    <input type="checkbox" />
    <span>TODO 2</span>
    <button data-testid="modify-button">수정</button>
    <button data-testid="delete-button">삭제</button>
  </label>
</li> */}