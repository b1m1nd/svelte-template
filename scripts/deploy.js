const ghpages = require('gh-pages')

ghpages.publish(
  '__sapper__/export/svelte-template',
  {
    branch: 'master',
    repo: '<your-githubrepo.git>',
    user: {
      name: '<Your-username>',
      email: '<Your-github-emailId>',
    },
  },
  () => {
    console.log('Deploy Complete!')
  },
)
