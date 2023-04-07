// import stc from 'styled-components'

// const Main_C = stc.main`
// display: flex;
// flex-direction: column;
// align-items: center;
// padding: 24px;
// box-shadow: var(--big-box);
// border: 1px solid var(--gray-10);
// border-radius: 4px;
// `
import styles from './Main.module.css';

export function Main () {
    return (
        <main className={styles.Main}> 
        <fieldset>
            <input type="text" className="username" placeholder="아이디" />
        </fieldset>      
        <div className={styles.hide}>사용할 수 있는 아이디입니다</div>
        <div className={styles.hide}>아이디는 네 글자 이상이어야 합니다</div>      
        <fieldset>
            <input type="password" className="password" placeholder="비밀번호" />
        </fieldset>

      
      <fieldset>
        <input
          type="password"
          className="password-retype"
          placeholder="비밀번호 확인"
        />
      </fieldset>

      
      <div className={styles.hide}>비밀번호가 일치하지 않습니다</div>

      
      <fieldset className={styles.signup}>
        <button>회원가입</button>
      </fieldset>
        </main>
    )
}