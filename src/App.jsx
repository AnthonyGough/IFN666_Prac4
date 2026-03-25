
import './App.css'

const animals = [
 {
   name: "Lion",
   number: 3,
   eats: ["zebra", "antelope", "buffalo", "hippopotamus"]
 },
 {
   name: "Tiger",
   number: 5,
   eats: ["moose", "deer", "buffalo"]
 },
 {
   name: "Giraffe",
   number: 6,
   eats: ["leaves", "twigs"]
 },
 {
   name: "Elephant",
   number: 4,
   eats: ["grass", "leaves", "flowers", "fruit"]
 },
 {
   name: "Monkey",
   number: 10,
   eats: ["fruit", "leaves", "vegetables", "insects"]
 },
 {
   name: "Lemur",
   number: 15,
   eats: ["fruit", "leaves", "insects"]
 },
 {
   name: "Rhinoceros",
   number: 2,
   eats: ["grass", "shoots", "leaves", "berries"]
 }
];

function AnimalComponent(props) {
    return (
    <div key={props.number}>
    <h1> Name: {props.name}</h1>
    <p>Number: {props.number}</p>
    <ul>
      {props.eats.map(eat => (
        <li>{eat}</li>
      ))}
      </ul>    
    </div>
  )
}

function App() {
  return (
<>
    {animals.map(animal => (
      <AnimalComponent {...animal} key={animal.number}/>
    ))}

</>
  )

   

}

export default App
