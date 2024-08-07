# Pactify - The Algoholics

 > _Note:_ This document is meant to be written during (or shortly after) your initial planning meeting.     
 > It does not really make sense for you to edit this document much (if at all) while working on the project - Instead, at the end of the planning phase, you can refer back to this document and decide which parts of your plan you are happy with and which parts you would like to change.


## Iteration 04 (Sprint 3) 

 * Start date: July 9, 2024
 * End date: July 19, 2024

## Process

Quick Introduction to the process

#### Changes from previous iteration

List the most significant changes you made to your process (if any).

 * At most 3 items
 * Start with the most significant change
 * For each change, explain why you are making it and what you are hoping to achieve from it
 * Ideally, for each change, you will define a clear success metric (i.e. something you can measure at the end of the iteration to determine whether the change you made was successful)

 > *Note:* If you are not making any changes to your process, it means that you are happy with all of the decisions you made in the previous iterations.
 > In this case, list what you consider to be the most significant process decisions your team made. For each decision, explain why you consider it successful, and what success metric you are using (or could use) to assert that the decision is successful.

We will be using the Jira board more actively in order to track our progress this sprint and assign people to tickets to achieve accountability. By actively using the Jira board, we aim to improve task visibility and streamline the workflow.  We will know we are successful if the burndown chart accurately represents the work we complete throughout the sprint.






#### Roles & responsibilities

Describe the different roles on the team and the responsibilities associated with each role.

Front End role 
Build and implement user-friendly, responsive web interfaces using HTML, Tailwind, JavaScript, and React
Connect front end with back end services using APIs
Back End role
Develop server-side business logic and maintain APIs for front end communication
Manage data storage and retrieval, implement security measures, and ensure data integrity.
Database role
Design efficient database schemas, manage database instances, and perform regular maintenance tasks.




#### Events

Describe meetings (and other events) you are planning to have:

 * When and where? In-person or online?
Online on Discord, every other day evening at 7pm. We will also meet in-person after class.
 * What's the purpose of each meeting?
Update each other on completed work, struggles and challenges, and what we each want to try to get done by the next meeting



#### Artifacts

List/describe the artifacts you will produce in order to organize your team.       

 * Artifacts can be To-do lists, Task boards, schedule(s), etc.
 * We want to understand:
   * How do you keep track of what needs to get done?
   * How do you prioritize tasks?
   * How do tasks get assigned to team members?

JIRA board
Discord server

#### Git / GitHub workflow

Describe your Git / GitHub workflow.     
Essentially, we want to understand how your team members share a codebase and avoid conflicts.

 * Be concise, yet precise.      
For example, "we use pull-requests" is not a precise statement since it leaves too many open questions - Pull-requests from where to where? Who reviews the pull-requests? Who is responsible for merging them? Etc.

 * If applicable, specify any naming conventions or standards you decide to adopt.

 * Don't forget to **explain why** you chose this workflow.

For our branching strategy, we are using the main branch for stable, production-ready code. In contrast, the development branch (develop) is more of an integration branch for all features and fixes. We are also going to branching off the develop branch when implementing sole features. 

Bugfix branches will be branched out from develop for non-critical bugs, and hotfix branches will be branched from main for critical fixes. Release branches will prepare for new releases.

Each PR requires at least one reviewer for quality and conflict resolution. Approved PRs are merged into develop or main. This workflow will hopefully ensure clear code separation, structured collaboration, and efficient conflict resolution.

## Product

_This entire section is mandatory._

#### Goals and tasks

 * Describe your goals for this iteration and the tasks that you will have to complete in order to achieve these goals.
 * Order the items from most to least important.
 * Feel free (but not obligated) to specify some/all tasks as user stories.

Implement storage system to store the contracts
Extract/export a contract into a pdf file
Add a signature pad that users can immediately sign their contracts and have the option to save their signature into their account

#### Artifacts

List/describe the artifacts you will produce in order to present your project idea.

 * Artifacts can be text, code, images, videos, interactive mock-ups and/or any other useful artifact you can think of.
 * Make sure to explain the purpose of each artifact (i.e. Why is it on your to-do list? Why is it useful for your team?)
 * Be concise, yet precise.         
   For example: "Build the website" is not precise at all, but "Build a static home page and upload it somewhere, so that it is publicly accessible" is much clearer.

Contract templates
Contract storage mechanism
Contract download mechanism
Signatures
