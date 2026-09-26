const Counter = () => {
    const incrementHandler = () =>{
        console.log("click")
    }
  return (
    <section>
    <h1>Counter</h1>
    <button onClick={incrementHandler}>+</button>
    </section>
  )
}

export default Counter