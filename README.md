
# LIVE  BETTING  PAGE  TEST  ASSIGNMENT  PROJECT

## Technical details

##### 1. The solution is built using front-end technologies only (JavaScript, HTML, CSS, React, xState).
##### 2. Main js code is located in /live-matches-assignment/src/js/ folder.
##### 3. UI react components located in /live-matches-assignment/src/components folder.
###### Note: main html has been splitted between react components for better tracability, readability and keeping the code clean, modularized and reusable in case of future extention.
##### 4. State machine is located in /live-matches-assignment/src/machine/ folder.
##### 5. Helper methods/utils incapsulated and stored in utils.js file under /live-matches-assignment/src/js/utils/ folder for better tracability, readability and keeping code clean.
##### 6. Constants stored in constants.js file under /live-matches-assignment/src/js/ folder for better tracability, readability and keeping code clean.
##### 7. Both UI and unit testing are in place with relatively medium coverage.
###### Note: in real world scenario 'cypress' framework would be used to compensate main ui and integration test coverage.
##### 8. @flow is added to main files to provide props typing.
##### 9. Optimization is in-built in used react version feature where manification and chunk splitting technologies used for app perfomance optimization. Extra configs has been added to rollup config file.
##### 9. All code of the project is formatted and adjusted per the most commonly used eslint and prettier rules, based on expierence of every day work in Kindred.
##### 10. setupTests.js file has extra logic to make the testing of components with 3rd party libs like(Slidrer/carousel) be compatible with other technologies used in this project.
##### 11. html, css, assets like images/icons and basic html file are stored in /live-matches-assignment/src/ folder with the original asssignment structure.


## Available Main Scripts

### `npm start`
### `npm build`
### `npm test`
### `npm eslint`
### `npm flow`


## Project structure

├──**public** folder

├──├──**index.html** file

├──**src** folder

├──├──**css** folder

├──├──├──**main.css** file

├──├──**images** folder

├──├──├──**icons** folder with sposrt icons for live evnts

├──├──├──**unibet-logo.png** file

├──├──**instructions** folder

├──├──├──**design.png** file

├──├──├──**index.html** file

├──├──**js** folder

├──├──├──**components** folder with UI react components

├──├──├──**machine** folder

├──├──├──├──**liveMatchesMachine.js** file

├──├──├──**utils** folder

├──├──├──├──**tests** folder with unit and UI tests

├──├──├──├──**utils.js** file

├──├──├──**constants.js** file

├──├──**index.js** file

├──├──**setupTests.js** file

├──**babelrc.js** file

├──**eslintignore** file

├──**eslintrc** file

├──**flowconfig** file

├──**gitignore** file

├──**prettierrc** file

├──**package-lock.json** file

├──**package.json** file

├──**README.md** file

├──**rollup.config.js** file