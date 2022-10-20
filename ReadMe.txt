Project playaround is an assignment project to automate the APIs and web elements
    API Swagger: https://petstore.swagger.io/#/
    UI Automation: http://www.uitestingplayground.com/
This project contains 3 UI automated tests and 4 API tests 
The 3 UI tests are automated using webdriver io and Typescript
The wdio.conf.ts contains all the configurations of the Webdriverio 
To run the tests use the command(do not copy hyhens) --  npm run wdio  --. It runs all the spec.ts files found under the specs folder. 
The results of the tests are published using a free trial software tesults. We can also see the temporary test results files under the tesults-temporary-files folder
    - URL: https://www.tesults.com/results/rsp/view/results/project/b313f0ca-c07e-44f1-8c9e-fd1aae9b407e

THe APIs are all automated using Postman for CRUD operations on Pet Object
    - Add Pet Object to store
    - Update Pet Object to Store
    - Find Pet by ID
    - Delete Pet by ID
See the scripts for postman in folder "Postman Collections" with test validations done on the each of the response for these API calls 