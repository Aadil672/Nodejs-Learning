# Addition Nodejs Program
Step 1) Create a file called "Addition.js" and include the below code. This file will contain the logic for your module.

Below is the code which would go into this file; 

var exports=module.exports={};
exports.AddNumber=function(a,b)
{
return a+b;
};

    The "exports" keyword is used to ensure that the functionality defined in this file can actually be accessed by other files.
    We are then defining a function called 'AddNumber'. This function is defined to take 2 parameters, a and b. The function is added to the module "exports" to make the function as a public function that can be accessed by other application modules.
    We are finally making our function return the added value of the parameters.

Now that we have created our custom module which has the functionality of adding 2 numbers. It's now time to create an application, which will call this module.

In the next step, we will actually see how to create the application which will call our custom module.

Step 2) Create a file called "app.js," which is your main application file and add the below code 

var Addition=require('./Addition.js');
console.log(Addition.AddNumber(1,2));

    We are using the "require" keyword to include the functionality in the Addition.js file.
    Since the functions in the Addition.js file are now accessible, we can now make a call to the AddNumber function. In the function, we are passing 2 numbers as parameters. We are then displaying the value in the console.

Output:

    When you run the app.js file, you will get an output of value 3 in the console log.
    The result is because the AddNumber function in the Addition.js file was called successfully and the returned value of 3 was displayed in the console.

Note: - We are not using the "Node package manager" as of yet to install our Addition.js module. This is because the module is already part of our project on the local machine. The Node package manager comes in the picture when you publish a module on the internet which we see in the subsequent topic. 
