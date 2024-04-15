module.exports = plop => {
    plop.setGenerator('component', {
        description: 'Create a component',
        prompts: [
            {
                type: 'list',
                name: 'destiny',
                message: 'What is the destination?',
                choices: [
                    { name: 'component', value: 'component' },
                    { name: 'view', value: 'view' },
                ],
            },
            {
                type: 'input',
                name: 'name',
                message: 'Enter a name',
            },
        ],
        actions: function (data) {
            let actions = []
            if (data.destiny === 'component') {
                actions.push({
                    type: 'add',
                    path: '../resources/views/components/{{ dashCase name }}.blade.php',
                    templateFile: 'templates/component.blade.php.hbs'
                })
            }
            if (data.destiny === 'view') {
                actions.push({
                        type: 'add',
                        path: '../resources/views/{{ dashCase name }}/index.blade.php',
                        templateFile: 'templates/component.blade.php.hbs'
                    },
                    {
                        type: 'add',
                        path: '../tests/cypress/integration/{{ dashCase name }}/{{ dashCase name }}.js',
                        templateFile: 'templates/test.js.hbs'
                    })
            }
            return actions
        }
        // actions: [
        //     {
        //         type: 'add',
        //         path: '../src/{{ destiny }}/{{pascalCase name}}/{{pascalCase name}}.tsx',
        //         templateFile: 'templates/component.tsx.hbs',
        //     },
        //     {
        //         type: 'add',
        //         path: '../src/{{ destiny }}/{{pascalCase name}}/styles.ts',
        //         templateFile: 'templates/styles.ts.hbs',
        //     },
        //     {
        //         type: 'add',
        //         path: '../src/{{ destiny }}/{{pascalCase name}}/index.ts',
        //         templateFile: 'templates/index.ts.hbs',
        //     },
        // ],
    });
};
