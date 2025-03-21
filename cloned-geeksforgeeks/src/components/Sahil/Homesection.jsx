import React from "react";

const HomeSection = ({ selectedTopic }) => {
  const content = {
    "JavaScript Basics":
      "JavaScript is a versatile programming language used for web development.",
    Introduction: "JavaScript was created to make web pages interactive.",
    Syntax:
      "JavaScript syntax defines how programs are written and structured.",
    "Hello World":
      "console.log('Hello, World!'); prints a message to the console.",
    "JS Variables & Datatypes":
      "JavaScript supports var, let, and const for variable declarations.",
    "var, let, const":
      "var is function-scoped, let and const are block-scoped.",
    "Primitive Types":
      "JavaScript has 7 primitive types: Number, String, Boolean, etc.",
    "Type Conversion": "Converting one type to another, like String to Number.",
    "JS Operators":
      "JavaScript has arithmetic, logical, and comparison operators.",
    Arithmetic: "Includes +, -, *, /, and %.",
    Comparison: "Includes ==, ===, >, <, >=, and <=.",
    Logical: "Includes &&, ||, and !.",
    "JS Loops":
      "Loops allow executing code multiple times (for, while, do-while).",
    for: "for loop executes a block of code a set number of times.",
    while: "while loop runs as long as the condition is true.",
    "do-while": "Runs at least once before checking the condition.",
    "JS Functions": "Functions help in reusing code and organizing logic.",
    "Function Declaration":
      "A function can be declared using function keyword.",
    "Arrow Functions":
      "Arrow functions provide a concise syntax for defining functions.",
    Callbacks: "Functions that are passed as arguments to other functions.",
  };

  return (
    <div className="flex flex-row w-[80%] p-6 mt-5">
      <h1 className="text-2xl font-bold  underline underline-offset-4">
        {selectedTopic}
      </h1>
      <p className="mt-4 text-lg text-gray-700">{content[selectedTopic]}</p>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis aliquid
        quos sequi commodi quam optio? Consequuntur totam unde vitae accusamus
        quos blanditiis optio placeat eius sed molestiae dolorum cumque saepe
        dolorem sunt, ab, provident pariatur obcaecati in corporis ducimus
        adipisci. Temporibus voluptatem magnam rerum nihil debitis quos,
        architecto sed quia praesentium ut assumenda ipsa in officia accusantium
        dolores, quidem veritatis quae hic porro explicabo repellendus inventore
        ratione. Mollitia fugit cum eaque, doloribus laboriosam ullam aspernatur
        fuga, explicabo omnis eius minima quae, magni nesciunt qui fugiat?
        Nesciunt, illum. Doloremque, ullam. Ut, excepturi. Expedita alias quia
        laboriosam. Maiores voluptas omnis magni assumenda.
      </p>
    </div>
  );
};

export default HomeSection;
