import "./App.css";

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

function App() {
  return <div>This is div</div>;
}

function App2() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
      <button>I'm a button</button>
    </div>
  );
}

let isLoggedIn = true;
let content;
const products = [
  { title: "Cabbage", isFruit: true, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

function App3() {
  // if (isLoggedIn) {
  //   content = <App />;
  // } else {
  //   content = <App2 />;
  // }
  // return <div>{content}</div>;
  // return <div>{isLoggedIn ? <App /> : <App2 />}</div>;
  return <div>{isLoggedIn && <App2 />}</div>;
}

const listItems = products.map((item) => (
  <li key={item.id} style={{ color: item.isFruit ? "magenta" : "darkgreen" }}>
    {item.title}
  </li>
));
function App4() {
  return <ul>{listItems}</ul>;
}

function App5() {
  function handleClick() {
    alert("You clicked me!");
  }

  return <button onClick={handleClick}>Click me</button>;
}
export { App3, App4, App5 };
// export { App, App2 };
