import { useState } from "react";
import styles from "./Todos.module.css";

export function Todocomponent ({list, Todo_list, setTodo_list }) {
    let token = localStorage.getItem('token');
    const { id, todo, isCompleted,userId } = list;
    const [input_U, setInput_U] = useState("");  
    const [isUpdating, setIsUpdating] = useState(false);

  //Todo 수정
  const u_changehandler = (e) => {
    setInput_U(e.target.value);
  };

  const ischanging = () => {
    setIsUpdating(!isUpdating);
  }    

    //Todo 삭제
    //fetch 삭제요청, state 변경도 포함  
    const deleteTodos = (id) => {
        fetch(`https://www.pre-onboarding-selection-task.shop/todos/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log("삭제되었습니다")
          let copy = [...Todo_list]
          setTodo_list([...copy].filter(el => el.id !== id));
        })
        .catch((err) => {
            console.error(err)});
      }


    //수정  
    const u_Submit = (id,todo,isCompleted,userId)=>{
        setInput_U('');
    
        let changedTodo = {
          "todo":todo,
          "userId":userId,
          "isCompleted":isCompleted,
          "id":id
        }
    
        fetch(`https://www.pre-onboarding-selection-task.shop/todos/${id}`, {
                method: "PUT",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(changedTodo)
            })            
            .then((res) => res.json())
            .then((res) => {
             setIsUpdating(false)
             console.log(res.todo)
                let copy = [...Todo_list]
                for (let el of copy) {
                if (el.id === res.id) {
                    el.todo = res.todo
                    }
                }
                setTodo_list(copy)
                console.log(copy)
            })
            
      }

    const makeComplete = () => {
        setTodo_list(prev => prev.map((el) => el.id === id ? ({ ...el, isCompleted: !el.isCompleted }) : el))
    }

    return (
        <li key={id}>
                  <label>
                    <input className={styles.check} type="checkbox" checked={isCompleted} onChange={makeComplete}/>
                    {!isUpdating? <span className={isCompleted? styles.done:""}>{todo}</span> : <div>
                    <div className={styles.Update}>
                        <input
                        data-testid="modify-input"
                        placeholder="수정할 내용을 입력하세요"
                        value={input_U} 
                        onChange={u_changehandler}
                        />
                        <div className={styles.buttons}>
                            <button data-testid="submit-button" className={styles.modifyButton} onClick={()=>u_Submit(id,input_U,isCompleted,userId)}>제출</button>
                            <button data-testid="cancel-button" className={styles.deleteButton} onClick={ischanging}>취소</button> 
                        </div>
                    </div>                    
                    </div>}
                    <div className={styles.buttons}>
                    <button
                      data-testid="modify-button"
                      className={styles.modifyButton}
                      onClick={ischanging}
                    >수정</button>
                    <button data-testid="delete-button"
                            className={styles.deleteButton}
                            onClick={()=>deleteTodos(list.id)}>
                      삭제</button>
                    </div>  
                  </label>
                </li>
    )
}