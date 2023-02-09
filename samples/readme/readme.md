# ReadMe Generator
  


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Description
  Repository containing the code for the README Generator. This is a server side project using node.js where the user is asked a few questions. Once the user answers those questions, the program generates a README file using the information provided. The README file is broken down into the following sections:<br><br>- Title<br>- Description<br>- Table of Contents<br>- Installation<br>- Usage<br>- License<br>- Contributions to the project<br>- Credit to others<br>- Tests<br>- Questions<br><br>The user can provide as little or as much information as they desire for each section. Leaving a section blank (i.e. not entering data for a question) will leave that section out of the README file.



## Table of Contents
- [Installation](#installation)
- [Functionality](#functionality)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Credits](#credit)
- [Tests](#tests)
- [Questions](#questions)


## Installation
  RE-Requisite: you must have node.js version 16.* installed on your machine prior to proceeding<br><br>To run the program in your command line:<br>1. Download the source code<br>2. Navigate to the folder containing the package.json file<br>3. Run npm install<br><br>        $ npm install

## Functionality
  The following discusses at a high level about some of the features of the website. Detailed code implementation can be found as comments in the JS files.<br><br><br>### Node.js:<br><br>The entire porject is built on Node.js utilizing two of additional libraries:<br>- inquirer: to manage user input<br>- fs: to manage the file operations<br><br>The application write the README to a README.MD file along with a JSON copy of the responses to README.JSON.<br><br><br>### Command Line:<br><br>This is a command line application where user input can be questionable. As such there are a few items to be aware of:<br>- The application does not check for whether the user input is pertaining to the section as opposed to random keystrokes. This is especially important for things like the Github username and email address: those are not verified for correctness.<br>- Pressing the Enter (or Return) key does not cause a new line, but end of input. So there are cases where the use input is truncated. The new line to be used on the command line is < br ><br>- The formatting differs between a readme generated from the application and an actual readme generated from VS code (e.g. bullet point vs dashes).<br><br><br>### License Files:<br><br>The license options are taken from the options presented at Github when creating a new repository. The boilerplate text is stored in separate files under the<br><br>        ./utils/licenseBoilerplate<br><br>The boilerplate text is taken from the various organizations if they provide it; otherwise, only one or two paragraphs are taken. It is important to note that the focus of this application is the functionality behind it and not the full text of the licence file.<br><br>As the user selects the license option, the information from the file is pulled and added to the license section. That way the code is free from bulky text and any updates to the license text happen without "code change."

## Usage
  For accessing the application:<br><br>- using your command prompt navigate to the application<br>- type in <br><br>        $ node index.js<br><br>- provide information to the various prompts<br>- go to application_folder/samples/readme to view the readme file<br>- (optional) go to application_folder/samples/json to view the readme answers provided by the user

## License
  Copyright 2023 Stefan Marinov 

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  
  For more information, click on the license badge at the top of the document!

## Contributing
  Follow the "fork-and-pull" Git workflow.<br><br> 1. **Fork** the repo on GitHub<br> 2. **Clone** the project to your own machine<br> 3. **Commit** changes to your own branch<br> 4. **Push** your work back up to your fork<br> 5. Submit a **Pull request** so that we can review your changes<br><br>NOTE: Be sure to merge the latest from "upstream" before making a pull request!

## Credits
  Lukas-h for the repo on markdown licence badges found here: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

## Tests
  No automation test scripts have been developed and run. The application is tested manually by running it with varoius sets of inputs

## Questions
  View my profile on Github: [ScorpionFiko](https://github.com/ScorpionFiko)

Contact me via email: [stefan_marinov@rogers.com](mailto:stefan_marinov@rogers.com)


