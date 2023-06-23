import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import ChangeBtn from './components/ChangeBtn';


 //setTodo는 할일 
 //setDoneTodo 완료한일
function App() {
  const [todo, setTodo] = useState([
    {
      id: Date.now() ,
      title: '강아지 산책',
      contents: '오후 2시, 제니랑 만나서',
      isDone : true
    },
    {
      id: Date.now() +1,
      title: '리액트 공부',
      contents: ' 숙제하기 ',
      isDone : false
    },
  ]);
 
  const [doneTodo, setDoneTodo] = useState([]);
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const addTodoHandler = () => {
    const newTodo = {
      id: Date.now() ,
      title: title,
      contents: contents,
      isDone: false
    };
  
    if (title === '' || contents === '') alert('글자를 입력해주세요!');
    else {
      setTodo([...todo, newTodo]);
      setTitle('');//입력하면 reset
      setContents('');//입력하면 reset
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addTodoHandler();
    }
  };


  // '할일' 삭제
  const deleteTodoHandler = (id) => {
    setTodo(todo.filter((t) => t.id !== id));
  };
 
  // '완료한일' 삭제
  const deleteDoneTodoHandler = (id) => {
    setDoneTodo(doneTodo.filter((dt) => dt.id !== id));
  };
 
  // '할일'에서 완료 누르면, isDOne 이 true가 됨 '할일'>>'완료한일'  
  // (dt)  todo>done, done

  const doneTodoHandler = (dt) => {
    const newDoneTodo = {
      id: dt.id,
      title: dt.title,
      contents: dt.contents,
      isDone : true
    };
    setDoneTodo([...doneTodo, newDoneTodo]);
    setTodo(todo.filter((t) => t.id !== dt.id));
  };
 
  // '완료한일'에서 취소 누르면, '완료한일'>>'할일'
  // (t)  done>todo, todo

  const doneCancelHandler = (t) => {
    const newTodo = {
      id: t.id,
      title: t.title,
      contents : t.contents,
      isDone : false
     
    };
    setTodo([...todo, newTodo]);
    setDoneTodo(doneTodo.filter((dt) => t.id !== dt.id)); 
  };

 // 할일 내용 입력하기 
  return (
    <div className='layout'>
      <div class='bar' style={{ display: 'flex', justifyContent: 'space-between'}}>
          <span class='header'> ✨My To-do List✨</span>
          <span class='icon'> ➖➕✖️</span>
      </div>
      <div className='InputArea'>
        제목
        <input
          className='Input'placeholder='할 일을 입력해주세요.'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={handleKeyDown}
        ></input>
        내용
        <input
          className='Input'placeholder='내용을 입력해주세요.'
          value={contents}
          onChange={(e) => setContents(e.target.value)}
          onKeyDown={handleKeyDown}
        ></input>
        <ChangeBtn buttonColor='#ffA500' onClick={addTodoHandler}>
          추가하기
        </ChangeBtn>
      </div>   
      <div className='layout'> 
        <h2 className='title'>❤️‍🔥WORKING❤️‍🔥</h2>
        <div className='Scroll'>
          {todo.map((todo) => {
            return (
              <Todo
                todo={todo}
                title={todo.title}
                key={todo.id}
                contents={todo.contents}
                firstHandler={deleteTodoHandler}
                secondHandler={doneTodoHandler}
                firstButton='삭제'
                secondButton='완료'
                color='#d0ee17'
              />
            );
          })}
        </div>
        <h2 className='title'>💫DONE💫</h2>
        <div className='Scroll'>
          {doneTodo.map((doneTodo) => {
            return (
              <Todo
                todo={doneTodo}
                title={doneTodo.title}
                key={doneTodo.id}
                contents={doneTodo.contents}
                firstHandler={deleteDoneTodoHandler}
                secondHandler={doneCancelHandler}
                firstButton='삭제'
                secondButton='취소'
                color='#28FE23'
              />
            );
          })}
        </div>
      </div>

      </div>
    

  )}
export default App;
