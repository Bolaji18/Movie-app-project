import MyProps from "./jonathan"
function App() {
 

  return (
    <>
    <div className="johnclass">
      <MyProps name="Jason Eze" age={20} height={150} address="1 street john road"/>
      <MyProps name="John Ade" age={30} height={120} address="2 street mide road"/>
      </div>
     <h1> This is Jason's first react project </h1>
     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat fuga eum error sint alias facilis deserunt, impedit itaque illo ab neque quisquam adipisci natus unde aut ducimus possimus dignissimos corrupti!</p>
     <form>
      <label htmlFor="text">Name: </label> <br/>
      <input type="text" placeholder="Enter your name "/> <br/>
      <input type="submit" value="submit"/>
     </form>
    </>
  )
}

export default App
