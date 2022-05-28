import React from "react";

const Blogs = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-center text-3xl my-5 font-bold uppercase text-accent">
        Some Blogs for you
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-24 items-center">
        <div>
          <img
            src="https://blog.logrocket.com/wp-content/uploads/2021/09/5-react-performance-optimization-techniques.png"
            alt=""
          />
        </div>
        <div>
          <h2 className="text-2xl text-center">
            How will you improve the performance of a React Application?
          </h2>
          <p className="text-lg mt-5">
            Optimizing application performance is key for developers who are
            mindful of keeping a user’s experience positive to keep them on an
            app and engaged. According to research by Akamai, a second delay in
            load time can cause a 7 percent reduction in conversions, making it
            imperative for developers to create apps with optimized performance.
            In React applications, we are guaranteed a very fast UI by default.
            However, as an application grows, developers may encounter some
            performance issues.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-24 items-center">
        <div>
          <img
            src="https://www.freecodecamp.org/news/content/images/size/w2000/2022/03/lautaro-andreani-UYsBCu9RP3Y-unsplash.jpg"
            alt=""
          />
        </div>
        <div>
          <h2 className="text-2xl text-center">
            What are the different ways to manage a state in a React
            application?
          </h2>
          <p className="text-lg mt-5">
            We'll start by talking about what state is, and then go through the
            many tools you can use to manage it. We'll look at the simple
            useState hook and also learn about more complex libraries like
            Redux. Then we'll check out the most recent options available like
            Recoil and Zustand.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-24 items-center">
        <div>
          <img
            src="https://miro.medium.com/max/1042/1*ULmG2uiAlgQksjj-brp2fw.jpeg"
            alt=""
          />
        </div>
        <div>
          <h2 className="text-2xl text-center">
            How does prototypical inheritance work?{" "}
          </h2>
          <p className="text-lg mt-5">
            Every object with its methods and properties contains an internal
            and hidden property known as [[Prototype]]. The Prototypal
            Inheritance is a feature in javascript used to add methods and
            properties in objects. It is a method by which an object can inherit
            the properties and methods of another object. Traditionally, in
            order to get and set the [[Prototype]] of an object, we use
            Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern
            language, it is being set using __proto__.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-24 items-center">
        <div>
          <img
            src="https://www.softwaretestinghelp.com/wp-content/qa/uploads/2012/11/Unit-Testing.png"
            alt=""
          />
        </div>
        <div>
          <h2 className="text-2xl text-center">
            What is a unit test? Why should write unit tests?
          </h2>
          <p className="text-lg mt-5">
            A unit test is a way of testing a unit - the smallest piece of code
            that can be logically isolated in a system. In most programming
            languages, that is a function, a subroutine, a method or property.
            The isolated part of the definition is important. In his book
            "Working Effectively with Legacy Code", author Michael Feathers
            states that such tests are not unit tests when they rely on external
            systems: “If it talks to the database, it talks across the network,
            it touches the file system, it requires system configuration, or it
            can't be run at the same time as any other test."
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-24 items-center">
        <div>
          <img
            src="https://blog.logrocket.com/wp-content/uploads/2021/09/5-react-performance-optimization-techniques.png"
            alt=""
          />
        </div>
        <div>
          <h2 className="text-2xl text-center">
            You have an array of products. Each product has a name, price,
            description, etc. How will you implement a search to find products
            by name?
          </h2>
          <p className="text-lg mt-5">
            const input_value = e.target.input_name.vale; <br />
            const serach_result = array[0].includes(input_value);
            <br />
            return serach_result
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
