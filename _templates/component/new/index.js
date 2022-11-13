module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'select',
        name: 'category',
        message: 'Which components design level?',
        choices: ['Atoms', 'Modules', 'Templates'],
      },
      {
        type: 'input',
        name: 'component_name',
        message: 'What is the component name?',
      },
    ];
    return inquirer.prompt(questions).then(answers => {
      const { category, component_name } = answers;
      const name =
        component_name.charAt(0).toUpperCase() + component_name.slice(1);
      return { category, name };
    });
  },
};
