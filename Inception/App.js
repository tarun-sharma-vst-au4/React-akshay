const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React"
);

console.log("Heading >> ", heading); // will return an object or react element

// creating a nested structure
/**
 *
 * <div id="parent">
 *     <div id="child1">
 *        <h1>I am a h1 tag</h1>
 *        <h2>I am a h2 tag</h2>
 *     </div>
 * <div id="child2">
 *        <h1>I am a h1 tag</h1>
 *        <h2>I am a h2 tag</h2>
 *     </div>
 * </div>
 *
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag"),
  ]),
]);

//JSX

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
