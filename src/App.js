import React from "react";
import "./styles.css";
import Tabs from "./Tabs";

const Data = [
  {
    tabTitle: "Alpha",
    heading: "Alpha Title",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita temporibus ab aliquid ipsum cum soluta eos ad molestias neque cumque. Cupiditate laborum nam necessitatibus saepe inventore voluptates soluta? Quisquam, ea!"
  },
  {
    tabTitle: "Beta",
    heading: "Beta Title",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita temporibus ab aliquid ipsum cum soluta eos ad molestias neque cumque. Cupiditate laborum nam necessitatibus saepe inventore voluptates soluta? Quisquam, ea!"
  },
  {
    tabTitle: "Charlie",
    heading: "Charlie Title",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita temporibus ab aliquid ipsum cum soluta eos ad molestias neque cumque. Cupiditate laborum nam necessitatibus saepe inventore voluptates soluta? Quisquam, ea!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita temporibus ab aliquid ipsum cum soluta eos ad molestias neque cumque. Cupiditate laborum nam necessitatibus saepe inventore voluptates soluta? Quisquam, ea!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita temporibus ab aliquid ipsum cum soluta eos ad molestias neque cumque. Cupiditate laborum nam necessitatibus saepe inventore voluptates soluta? Quisquam, ea!"
  },
  {
    tabTitle: "Delta",
    heading: "Delta Title",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita temporibus ab aliquid ipsum cum soluta eos ad molestias neque cumque. Cupiditate laborum nam necessitatibus saepe inventore voluptates soluta? Quisquam, ea!"
  }
];

export default function App() {
  return (
    <div className="App">
      <Tabs tabs={Data} />
    </div>
  );
}
