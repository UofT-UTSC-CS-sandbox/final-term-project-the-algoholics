# Pactify

Welcome to **Pactify**, a quick, easy, and affordable way to generate a contract, or update an existing contract. With our AI-powered contract generation, users can choose from one of our predefined templates or upload their own PDF, give us some additional information, and **Pactify** will do the rest. After generating your contract, you can freely edit, download, share, and save your contract to your account.

## Running the app

Instructions to run the app

1. Put the following lines into a file called config.env in the pactify-server directory

    ATLAS_URI="mongodb+srv://username:algoholics24@pactify.ru1ugju.mongodb.net/Pactify?retryWrites=true&w=majority&appName=Pactify"

    OPENAI_API_KEY="sk-proj-icrMOtIYZidC7uJG7iiGT3BlbkFJWuPY4HWXSDUDfj37Qy5L"

    JWT_SECRET="934a9c82fb55edf39a8fd98fa2f0686e9ab8819fadc064d31f623fbd26349a26a85af0"

    PORT=5050

1. Put the following lines into a file called config.env 

2. In a shell, run the following:

    cd pactify-server
    
    npm install
    
    npm start

    cd ..
    
    cd pactify-app
    
    npm install
    
    npm start

## Getting Started

![Image of the Pactify Landing Page](https://github.com/UofT-UTSC-CS-sandbox/final-term-project-the-algoholics/blob/759dcaed133f9196e12468d39f722ec1cfa80b79/Interface/Login.png)

##### The Pactify Login Screen

To get started, all you have to do is go to our website (URL HERE) and sign up. After signing up, you can freely use **Pactify** for all your contract generation needs, or go for **Pactify Premium** to gain some additional features!

## Creating a New Contract

![Image of Creating a New Contract](https://github.com/UofT-UTSC-CS-sandbox/final-term-project-the-algoholics/blob/759dcaed133f9196e12468d39f722ec1cfa80b79/Interface/Generate.png)

##### The Contract Creation Screen

![Image of Uploading a PDF](https://github.com/UofT-UTSC-CS-sandbox/final-term-project-the-algoholics/blob/759dcaed133f9196e12468d39f722ec1cfa80b79/Interface/UploadPDF.png)

##### The PDF Upload Screen

To create a contract, first log in to **Pactify**. Once you're logged in, simply click on the "Create New" button. From there, choose whether you want to create an all new contract or upload your existing contract!

## Updating an Existing Contract

![Image of Editing Contract](https://github.com/UofT-UTSC-CS-sandbox/final-term-project-the-algoholics/blob/759dcaed133f9196e12468d39f722ec1cfa80b79/Interface/FinalEdits.png)

##### The View/Edit Contract Screen

To update a contract, first log in to **Pactify**. Once you're logged in, simply click on the contract you'd like to edit. From there, edit however you want, then save or download!

## Deleting a Contract

![Image of Home Screen](https://github.com/UofT-UTSC-CS-sandbox/final-term-project-the-algoholics/blob/759dcaed133f9196e12468d39f722ec1cfa80b79/Interface/HomeScreen.png)

##### The Home Screen

To delete a contract, first log in to **Pactify**. Once you're logged in, simply click "Delete" on the contract you'd like to delete.

## Editing your Account

![Image of Account Screen](https://github.com/UofT-UTSC-CS-sandbox/final-term-project-the-algoholics/blob/759dcaed133f9196e12468d39f722ec1cfa80b79/Interface/AccountInfo.png)

##### The Account Screen

To edit your account, first log in to **Pactify**. Once you're logged in, simply click your profile in the top right and then click the edit symbol on whatever you'd like to edit.

## Deleting your Account

![Image of Account Screen](https://github.com/UofT-UTSC-CS-sandbox/final-term-project-the-algoholics/blob/759dcaed133f9196e12468d39f722ec1cfa80b79/Interface/AccountInfo.png)

##### The Account Screen

To delete your account, first log in to **Pactify**. Once you're logged in, simply click your profile in the top right and then click "Delete Account". Thanks for using **Pactify**!

# Contributing to Pactify 

### 1. Do you use git flow?

Yes, we use Git Flow for managing our branches and releases! In short, Git Flow should allow us to structure our workflow and maintain a clean, organized history of our codebase. Here’s a quick overview of our branching strategy:

Main: The main branch **ONLY** contains production-ready code. **ONLY** thoroughly tested and stable code is merged here.

Develop: The develop branch contains the latest delivered development changes for the next release. It’s where integration of features will occur.

Feature Branches: Feature branches are created from develop and used to work on new features. Only once the feature is complete and tested, it’s merged back into develop.

### 2. What do you name your branches?

We will be following a clear and descriptive naming conventions for our branches to make it easier to understand the purpose of each branch. The conventions we shall be following are as follows:

Feature Branches: 'feature/short-description'

Release Branches: 'release/version-number'

### 3. Do you use github issues or another ticketing website?

We will be using Jira for tracking tasks, bugs, and feature requests. Each issue is labeled appropriately and assigned to team members. Our labels include:

_bug_: For bug reports.

_enhancement_: For new features or improvements.

_documentation_: For documentation-related tasks.

_question_: For questions or clarifications.

_help wanted_: For tasks where we need additional input or help.

### 4. Do you use pull requests?

We will try to follow this pull request workflow: 

Create a Branch: Start by creating a new branch based on the task or feature you are working on.

Develop and Test: Implement your changes and **thoroughly** test said changes. 

Open a Pull Request: Once the changes are ready, open a pull request against the develop branch. And then provide a clear and descriptive title and description of the changes you have made.

Code Review: Team members will review the code you wrote. And then provide feedback, and request changes if necessary.

Merge: After two members from the group approve the changes they are then merged into the develop branch. If it’s a hotfix, it will be merged into the main branch after the **entire** group approves the request.

Hopefully, by following these steps, we ensure that our project remains organized, collaborative, and of high quality.



