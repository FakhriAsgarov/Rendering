import CustomButton from "./Components/CustomButton";

function App() {
  return (
    <div className="App">
      <CustomButton text='first button' hint='click me' warnMessage='click count'/>
      <CustomButton text='second button' hint='click me' warnMessage='click count'/>
      <CustomButton text='third button' hint='click me' warnMessage='click count'/>
      <CustomButton text='fourth button' hint='click me' warnMessage='click count'/>
    </div>
  );
}

export default App;
