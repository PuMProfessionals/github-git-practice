# Github and Git Guide
This will give you a brief guide about how to use Github and Git, and how to go about a workflow of working as a software developer. This is briefly what basic React looks like!

To begin you will need to install these tools (you may or may not already have them):
* `git`: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git -> this is a version control system! you can read more about it but what this allows us to do is have many people simultaneously work on a project
---> Windows is so very different, here's a decent Youtube tutorial: https://www.youtube.com/watch?v=2j7fD92g-gE
* `node & npm`: https://nodejs.org/en/download/ -> install node (a JavaScript runtime you don't need to know what this is), but it comes with npm which is what you need it stands for node package manager and allows us to manage JavaScript packages. think of these as "plugins" from Wordpress.
* `VSCode`: https://code.visualstudio.com/download -> one of the most beginner friendly coding environments

Unfortunately, I can't give more specific installation instructions. Those read it the best! Be sure to remember if you're using Mac or Windows. It differs.

After we will begin the process of using GitHub and Git. I learned from: https://guides.github.com/activities/hello-world/ (HIGHLY RECOMMEND), but we can also practice with this repo! It will also give a brief view of React.

1. Clone a repo:
![assets](assets/Clone.png)
Click the green code button and make sure it is HTTPS (SSH is a bit more complicated to setup) and click the copy and paste button / icon on the right beside the link.

In your command line (terminal), type: `git clone https://github.com/PuMProfessionals/github-git-practice.git` where https://github.com/PuMProfessionals/github-git-practice.git is the link you just copied.

2. It should be cloned! As in you have a version on your local computer. Github acts as a "master copy" for everyone. Open up VSCode, and open up the project.
3. In your term also type: `npm install` -> this will install all the node packages you need! This is what allows us to run web applications by using third-party packages... for free!
4. Add a new branch. This is what you do to contribute your changes, so it doesn't affect everyone else's until after you code! Type in your command line `git checkout -b branchname` where branchname is your name. This basically checks you out of the main branch and creates a new branch called branchname.
5. Click into `src->App.js` and open this file.
6. Add your name to the array names so:
`const names = [
  'Sharon He', 
  'Name X' <--- Added name
]
`
6. To see if your changes have been made, save the file. In your command terminal, then type `npm start`. This will start up a local development environment, and you will see: 
7. If it is successful, go back to your command line and type: 
* `git status` -> this will help check if you actually changed your files. you will see what you added or deleted
* `git add .` -> this will add all your files to the branch
* `git commit -m "I have commited"` -> this is a brief message of what you did with what is in quotation marks as what you added
* `git push origin branchname` this will push your changes to the branch you created
8. Now we will make a pull request so your changes can be merged into the main branch (the master copy!)
9. 
 `
