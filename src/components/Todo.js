import React from 'react';
import '../App.js';
import ChangeBtn from './ChangeBtn.js';

 
function Todo(props) {
  const { title, contents, todo, firstButton, secondButton, color } = props;
  
  const secondButtonLabel = todo.isDone ? '취소' : '완료';
  //두번째 버튼이 '취소'면 버튼 색상 변경하기
  if (secondButton === '취소')
    return (
      <div style={{ borderColor: color }} className='Box'>
        <p>{title}</p>
        <p>{contents}</p>
        <p>
          <ChangeBtn
            buttonColor='#28FE23'
            onClick={() => props.firstHandler(todo.id)}
          >
            {firstButton}
          </ChangeBtn>
          <ChangeBtn
            buttonColor='#28FE23'
            onClick={() => props.secondHandler(todo)}
          >
            {secondButtonLabel}
            
          </ChangeBtn>
        </p>
      </div>
    );
  return (
    <div style={{ borderColor: color }} className='Box'>
      <p>{title}</p>
      <p>{contents}</p>
      <p>
        <ChangeBtn
          buttonColor='#d0ee17'                            
          onClick={() => props.firstHandler(todo.id)}
        >
          {firstButton}
        </ChangeBtn>
        <ChangeBtn
          buttonColor='#d0ee17'
          onClick={() => props.secondHandler(todo)}
        >
          {secondButton}
        </ChangeBtn>
      </p>
    </div>
  );
}
 
export default Todo;