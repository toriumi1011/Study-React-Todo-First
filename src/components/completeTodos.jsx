const style = {
  backgroundColor: '#ffffe0',
  width: '400px',
  minHeight: '200px',
  padding: '8px',
  margin: '8px',
  borderRadius: '8px',
}

export const CompleteTodos = (props) => {
  const { todos, onclickBack } = props;
  return (
    <div style={style} >
      <p className="title">完了のTODO</p>
      <ui>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onclickBack(index)}>戻す</button>
            </div>
          )
        })}
      </ui>
    </div>
  );
}