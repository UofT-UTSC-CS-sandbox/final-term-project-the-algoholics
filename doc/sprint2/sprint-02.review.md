# Pactify – The Algoholics

 > _Note:_ This document is meant to be written during (or shortly after) your review meeting, which should happen fairly close to the due date.      
 >      
 > _Suggestion:_ Have your review meeting a day or two before the due date. This way you will have some time to go over (and edit) this document, and all team members should have a chance to make their contribution.


## Iteration 02 - Review & Retrospect

 * When: Friday, July 5th
 * Where: ONLINE on Discord

## Process - Reflection

(Optional) Short introduction

#### Decisions that turned out well

List process-related (i.e. team organization) decisions that, in retrospect, turned out to be successful.

 * 2 - 4 decisions.
 * Ordered from most to least important.
 * Explain why (i.e. give a supporting argument) you consider a decision to be successful.
 * Feel free to refer/link to process artifact(s).

Getting thorough research on each type of contract (NDA, rental agreement etc.) on what components are needed/popular to have before coding in the format of each contract form. This saved us the hassle of reformatting and making sure we have accurate real-life representation of contracts.
Creating different branches for features like feature/create-contract etc. instead of having everyone pushing onto one branch
Testing the GPT’s results and observing its consistency on its answer. We deemed it to be not consistent early on which allows us to have time to start generating a template for it to follow, to get consistent contract results.


#### Decisions that did not turn out as well as we hoped

List process-related (i.e. team organization) decisions that, in retrospect, were not as successful as you thought they would be.

 * 2 - 4 decisions.
 * Ordered from most to least important.
 * Feel free to refer/link to process artifact(s).

Focusing on coding and leaving documentation behind
Not researching further on GPT where we started having issues and errors when trying to generate contracts


#### Planned changes

List any process-related changes you are planning to make (if there are any)

 * Ordered from most to least important.
 * Explain why you are making a change.

N/A

## Product - Review

#### Goals and/or tasks that were met/completed:

 * From most to least important.
 * Refer/link to artifact(s) that show that a goal/task was met/completed.
 * If a goal/task was not part of the original iteration plan, please mention it.

Connect with GPT and understand its API
Formulate contracts and feed necessary info to the GPT to generate well-written contracts
Edit account info
Implementing drop-down on profile picture

#### Goals and/or tasks that were planned but not met/completed:

 * From most to least important.
 * For each goal/task, explain why it was not met/completed.      
   e.g. Did you change your mind, or did you just not get to it yet?

N/A, we’ve met all goals and tasks we wanted to complete this sprint


## Meeting Highlights

Going into the next iteration, our main insights are:

 * 2 - 4 items
 * Short (no more than one short paragraph per item)
 * High-level concepts that should guide your work for the next iteration.
 * These concepts should help you decide on where to focus your efforts.
 * Can be related to product and/or process.

Figure Out Contract Storage: Determine how to store contracts as different file types such as pdf, doc, docx, etc. We will be using GCP or AWS to handle file storage and management. Which should hopefully ensure scalability and security for our users' data.
Finish Contract Generation API: Finishing the API for our contract generation will allow us to implement generating the different types of contracts.
