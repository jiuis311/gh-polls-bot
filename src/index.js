// // @flow
// const { addPollListener } = require('./listener');

// module.exports = (robot /* : Robot */) => {
//   robot.on(['issues.opened', 'issues.edited'], addPollListener);
// };

/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Application} app
 */
module.exports = app => {
  // Your code here
  app.log('Yay, the app was loaded!')
  app.log("here");

  app.on('issues.edited', async context => {
    app.log("here2");
    const issueComment = context.issue({ body: 'Thanks for opening this issue!' })
    return context.github.issues.createComment(issueComment)
  })

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}
