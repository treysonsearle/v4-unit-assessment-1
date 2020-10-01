/*
For this section of the skills check you will be putting together a cheat sheet for common git commands.  You'll provide the command as well as what it does.  
*/

//////////////////SETUP////////////////////
// Open the index.html file in javascript-2/DO_NOT_EDIT/index.html. You should see several boxes.

//////////////////PROBLEM 1////////////////////

//Create a variable called 'gitDefinition'.  It should be a string containing your best definition of what Git is

// CODE HERE

const gitDefinition =
  'a version control software used to track changes in our apps'

//////////////////PROBLEM 2////////////////////

//Create a variable called 'gitHubDefinition'.  It should be a string containing your best definition of what GitHub is

// CODE HERE

const gitHubDefinition =
  'a website used to hold git repositories.  Basically the cloud for code.'

//////////////////PROBLEM 3 - 8////////////////////

//For the next several problems you will be creating objects containing information about different git commands.  Each object should contain 'description' and 'code' properties.  The 'description' property will be a string with a description of what that git command does.  The 'code' property should be a string of the actual command (What you type into your terminal).

//////////////////PROBLEM 3////////////////////

//Create an object called 'init' with 'description' and 'code' properties following the guidelines above to describe the init command.

// CODE HERE

const init = {
  description:
    'Used to initialize an empty git repository in the current directory',
  code: 'git init',
}

//////////////////PROBLEM 4////////////////////

//Create an object called 'clone' with 'description' and 'code' properties following the guidelines above to describe the clone command.

// CODE HERE

const clone = {
  description: 'Used to clone existing git repositories from a remote location',
  code: 'git clone [remote location]',
}

//////////////////PROBLEM 5////////////////////

//Create an object called 'status' with 'description' and 'code' properties following the guidelines above to describe the status command.

// CODE HERE

const status = {
  description: 'Used to check the status of files within the git repository',
  code: 'git status',
}

//////////////////PROBLEM 6////////////////////

//Create an object called 'add' with 'description' and 'code' properties following the guidelines above to describe the add command.

// CODE HERE

const add = {
  description: 'Used to tell git to track changes in certain files',
  code: 'git add [files to add]',
}

//////////////////PROBLEM 7////////////////////

//Create an object called 'commit' with 'description' and 'code' properties following the guidelines above to describe the commit command.

// CODE HERE

const commit = {
  description: 'Used to save changes in a git repository',
  code: 'git commit -m [commit message]',
}

//////////////////PROBLEM 8////////////////////

//Create an object called 'addRemote' with 'description' and 'code' properties following the guidelines above to describe the command to add a remote location to your git repository.

// CODE HERE

const addRemote = {
  description: 'Links our local git repository with a remote location',
  code: 'git remote add origin [location]',
}

//////////////////PROBLEM 9////////////////////

//Create an object called 'push' with 'description' and 'code' properties following the guidelines above to describe the push command.

// CODE HERE

const push = {
  description: 'Used to send local changes to the remote location',
  code: 'git push [location]',
}