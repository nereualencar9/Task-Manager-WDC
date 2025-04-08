export function App() {
  fetch("http://localhost:3000/test")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

  return (
    <>
      <h1>App</h1>
    </>
  );
}
