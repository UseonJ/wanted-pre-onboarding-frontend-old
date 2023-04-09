import { useState, useEffect } from "react";
import styles from "./Todos.module.css";
import { Todocomponent } from './Todocomponent'

export function Todos() {
  let token = localStorage.getItem('token'); 
  
  const [Todo_list,setTodo_list] = useState([]);
  
  /** Todo 가져오는 함수 */
  const getTodos = () => {
    fetch("https://www.pre-onboarding-selection-task.shop/todos", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log("로드되었습니다")
      console.log(res)
      setTodo_list([...res]);
    })
    .catch((err) => {
        console.error(err)});
  }
  /** direct 되자마자 rendering */
  useEffect(() => {
    getTodos()
  },[]);
  //

  //state 관리
  
  const [input_C, setInput_C] = useState("");
  

  //Todo 생성
  const c_changehandler = (e) => {
    setInput_C(e.target.value);
  };
  
  

//TSX:input:string, output:{}인데 (input한 string이 value중 하나다?)
//TODO라는 interface key id,userId,todo,isCompleted 가짐.
const CreateTodo = (todoin) => {
  
  let newTodo = {
                  "todo":todoin,
                  "userId":0,
                  "isCompleted":false,
                  "id":0,
                }
    
  fetch("https://www.pre-onboarding-selection-task.shop/todos", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log("추가되었습니다")
      console.log(res)
      newTodo = {...newTodo, res};
    })
    .catch((err) => {
        console.error(err)});
    return newTodo;
}

  const CreateTodocall = (e) => {
    setTodo_list([CreateTodo(input_C), ...Todo_list]);
    setInput_C('');
  };

  return (
    <div className={styles.wrap}>
      <header className={styles.titlecontainer}>
        <h1 className={styles.title}>To do List</h1>
      </header>
      <div className={styles.createContainer}>
        <input
          data-testid="new-todo-input"
          placeholder="할 일을 입력하세요"
          onChange={c_changehandler}
          value={input_C}
        />
        <button data-testid="new-todo-add-button" onClick={CreateTodocall}>
          추가
        </button>
      </div>
      <div className={styles.listcontainer}>
        <div className={styles.list}>
          {Todo_list &&
            Todo_list.map((el) => {
              return (
                <Todocomponent list={el} Todo_list={Todo_list} setTodo_list={setTodo_list} ></Todocomponent>
                
              );
            })}
        </div>
      </div>
    </div>
  );
};