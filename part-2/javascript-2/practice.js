const gitDefinition =
  'a version control software used to track changes in our apps'

const gitHubDefinition =
  'a website used to hold git repositories.  Basically the cloud for code.'

const init = {
  description:
    'Used to initialize an empty git repository in the current directory',
  code: 'git init',
}

const clone = {
  description: 'Used to clone existing git repositories from a remote location',
  code: 'git clone [remote location]',
}

const status = {
  description: 'Used to check the status of files within the git repository',
  code: 'git status',
}

const add = {
  description: 'Used to tell git to track changes in certain files',
  code: 'git add [files to add]',
}

const commit = {
  description: 'Used to save changes in a git repository',
  code: 'git commit -m [commit message]',
}

const addRemote = {
  description: 'Links our local git repository with a remote location',
  code: 'git remote add origin [location]',
}

const push = {
  description: 'Used to send local changes to the remote location',
  code: 'git push [location]',
}
