import "./App.css";
//example of refactoring into smaller components
//exercise 1.1-1.5
const App = () => {
  const Header = (course) => {
    return <h1>{course.name}</h1>;
  };
  const Content = () => {
    const part1 = "Fundamentals of React";
    const exercises1 = 10;
    const part2 = "Using props to pass data";
    const exercises2 = 7;
    const part3 = "State of a component";
    const exercises3 = 14;
    return (
      <>
        <p>
          {part1} {exercises1}
        </p>
        <p>
          {part2} {exercises2}
        </p>
        <p>
          {part3} {exercises3}
        </p>
      </>
    );
  };
  const Total = ({ totalExercises }) => {
    return <p>Number of exercises {totalExercises}</p>;
  };

  return (
    <div>
      <Header course="Half Stack application development" />
      <Content
        part1="Fundamentals of React"
        exercises1={10}
        part2="Using props to pass data"
        exercises2={7}
        part3="State of a component"
        exercises3={14}
      />
      <Total totalExercises={10 + 7 + 14} />
    </div>
  );
};

export default App;
