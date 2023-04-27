import './App.css';

const Person = (props) => {
  return (
    <>
    <h3>Name: {props.name}</h3>
    <h3>Age: {props.age}</h3>
    <h3>Place: {props.place}</h3>
    <h3>Proffesion: {props.proffesion}</h3>
    </>
  )
}

const App = () => {


  return (
    <div className="App">
      <Person name={'Jeremi Musa'} age = {50} place={"Alaska"} proffesion={"designer"} />
      <Person name={'Arapu Trevor'} age = {27} place={"Mukono"} proffesion={"Developer, designer"} />
      <Person name={'Mary jane'} age = {20} place={"New york"} proffesion={"designer"} />
    </div>
  );
}

export default App;
