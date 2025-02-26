const BurgerStack = (props) => {
    return(
        <ul>
            {
                props.map((burger, index) => {
                    <li key={ index }><button>Remove { burger.name }</button></li>
                })
            }
        </ul>
    );
    
  };
  
  export default BurgerStack;