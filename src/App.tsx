import React, { ChangeEvent, MouseEvent } from 'react';
import styles from './App.module.css';

function App() {
    const [text, setText] = React.useState('')
    const [inputError, setInputError] = React.useState('Поле ввода не может быть пустым')
    const [inputDirty, setInputDirty] = React.useState(false)
    const [messageStatus, setMessageStatus] = React.useState('')

    const inputBlur = () => {
        setInputDirty(true)
    }

    const inputChange = (e:ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
        e.target.value !== '' ? setInputError('') : setInputError('Поле ввода не может быть пустым')
    }

    const submit = (e:MouseEvent<HTMLButtonElement>) => {
        setMessageStatus('Сообщение отправлено')
        setTimeout(() => setMessageStatus(''), 5000)
        e.preventDefault()
    }

    return (
        <div className={styles.container}>
            <form className={`${(inputError && inputDirty) && styles.is_error}`} name='form'>
              <input onChange={(e) => inputChange(e)} onBlur={inputBlur} value={text}/>
              <button onClick={(e) => submit(e)} disabled={!!(inputError)} >Send</button>
                { (inputError && inputDirty) && <span>{inputError}</span> }
                { messageStatus && <span>{messageStatus}</span> }
            </form>
        </div>
    );
}

export default App;
