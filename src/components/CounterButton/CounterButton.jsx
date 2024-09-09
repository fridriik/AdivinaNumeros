function CounterButton({ count, onClickAction, label }) {
    return (
      <button onClick={onClickAction}>
        {label}{count}
      </button>
    );
  }
  
  export default CounterButton;  