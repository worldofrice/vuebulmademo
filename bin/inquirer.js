import inquirer from "inquirer";

inquirer
  .prompt([
    { type: "input", name: "name", message: "What's your name?" },
    {
      type: "number",
      name: "age",
      message: "How old are you?",
    },
    {
      type: "list",
      name: "location",
      message: "Which continent are you from?",
      choices: [
        "Asia",
        "Africa",
        "North America",
        "South America",
        "Antarctica",
        "Europe",
        "Australia",
      ],
    },
    {
      type: "expand",
      name: "gender",
      message: "What gender are you?",
      choices: [
        {
          key: "M",
          name: "Male",
          value: "male",
        },
        {
          key: "F",
          name: "Female",
          value: "female",
        },
        {
          key: "O",
          name: "Other",
          value: "other",
        },
      ],
    },
    {
      type: "confirm",
      name: "confirmation",
      message: "Are you sure?",
    },
    {
      type: "password",
      name: "password",
      message: "Enter desired password",
    },

    {
      type: "checkbox",
      name: "foods",
      message: "What are your preferred foods?",
      choices: ["Pasta", "Pizza", "Steak", "Eggs", "Mashed potatoes"],
    },
    {
      type: "editor",
      name: "editorInput",
      message: "Type something",
    },
    {
      type: "rawlist",
      name: "favouriteColor",
      message: "What is your favourite color?",
      choices: ["Red", "Green", "Blue", "Purple", "Pink"],
    },
  ])
  .then((answers) => {
    console.log(answers);
  });
