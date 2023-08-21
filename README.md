<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
	- [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Usage](#usage)
  - [Run tests](#run-tests)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->
# 📖 # TASKADE <a name="about-project"></a>

> 🚧 Taskade is a simple and intuitive web application that helps you keep track of your tasks and manage your daily activities effectively. With an easy-to-use interface, you can quickly add, update, and complete tasks, ensuring that nothing falls through the cracks.🚧
## 🛠 Built With <a name="built-with"></a>
- Technology: HTML, CSS & JS
- Tools: VS Code, GIT, GITHUB

### Tech Stack <a name="tech-stack"></a>
<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a></li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a></li>
  </ul>
</details>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Features -->

### Key Features <a name="key-features"></a>

- Created the project with webpack set-up.
- Created an index.html file and wrote HTML markup. Created an empty To Do List placeholder using unordered list.
- Create an index.js file and set an array of some simple to do tasks (array of objects). Each task object should contain three keys:

<ol type="i">
  <li>Description [string]</li>
  <li>Complete [bool]</li>
  <li>index: [number]</li>
</ol>

- Dynamically displayed displayed the task list item dynamically.
- Created a style.css and set rules for the To Do List. CSS is loaded by Webpack Style/CSS Loader.
- Removed all hardcoded items from the tasks array.
- Created a new JavaScript file for the new functionality.
- Implemented a function for adding a new task (add a new element to the array).
- Implemented a function for deleting a task (remove an element from the array).
- Implemented a function for editing task descriptions.
- All changes to the To Do List should be saved in local storage.
- Added a new JavaScript file and import it as a module that contain methods related to the status updates (completed: true / false).
- Added event listener to the checkbox (change).
- Updated items object's value for completed key upon user actions.
- Implemented a function for the "Clear all completed" button (use filter() method).
- Stored the updated array of items in local storage, so the user gets the correct list of values after the page reloads (which means that any changes made to the list should be preserved).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🔭 Live Demo <a name="future-features"></a>

[Live Demo](https://titus-kiplagat.github.io/Taskade/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## 💻 Getting Started <a name="getting-started"></a>
To get a local copy up and running, follow these steps.

### Prerequisites

You have to use this tools in your local machine.

- NPM
- GIT & GITHUB
- Any Code Editor (VS Code, Brackets, etc)

### Setup

Clone this repository to your desired folder:
Example commands:

```sh
  cd my-folder
  git init # if not initialized git on your folder
  git clone git@github.com:Titus-Kiplagat/Taskade.git
  cd to-do-list
  npm install # to install dependencies
```


### Usage
To run the project, execute the following command:

> Open live server on you editor


### Run tests

To run tests, run the following command on terminal:
Example commands:

Test for webhint errors
```sh
	npx hint .
```

Test for stylelint errors
```sh
  npx stylelint "**/*.{css,scss}"
```

Test for eslint errors
```sh
	npx eslint .
```

Trigger the build process of the project
```sh
	npm run build
```

Start the project 
```sh
	npm start
```

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>
👤 **Titus Kiplagat**
- GitHub: [@github](https://github.com/Titus-Kiplagat)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/titus-kiplagat-kemboi-9a8848262/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- Improve the looks and design of the to-do list app.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>
Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>
Your support is crucial to the success of this project! There are ways you can contribute and show your support:

  - Provide Feedback: If you've tried out the project or have any suggestions for improvement, we would love to hear from you. Your feedback is invaluable in shaping the future direction of the project.

  - Give a ⭐️ if you like this project!


Remember, your support matters! Whether it's spreading the word, providing feedback, reporting issues, contributing code, or making a donation, every action makes a difference. Together, we can make this project even better.

Thank you for your support and for being a part of this journey!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to give credit to list of contributors:

- Microverse Team

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
