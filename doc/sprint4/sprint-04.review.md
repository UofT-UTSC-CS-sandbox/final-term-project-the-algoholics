# Pactify – The Algoholics

 > _Note:_ This document is meant to be written during (or shortly after) your review meeting, which should happen fairly close to the due date.      
 >      
 > _Suggestion:_ Have your review meeting a day or two before the due date. This way you will have some time to go over (and edit) this document, and all team members should have a chance to make their contribution.


## Iteration 04 - Review & Retrospect

 * When: Friday, August 2nd
 * Where: ONLINE on Discord

## Process - Reflection

(Optional) Short introduction

#### Decisions that turned out well

List process-related (i.e. team organization) decisions that, in retrospect, turned out to be successful.

 * 2 - 4 decisions.
 * Ordered from most to least important.
 * Explain why (i.e. give a supporting argument) you consider a decision to be successful.
 * Feel free to refer/link to process artifact(s).

Using an S3 AWS bucket to store PDFs and then connecting said bucket to Mongo is a lot easier to do than trying to store pdfs in google drive and then query from Mongo.

We are still testing GPT’s results and observing its consistency on its answer. We deemed it to be not consistent early on, so to get consistent contract results we have now created templates and have done some prompt engineering to help guide GPT in the right direction. 

#### Decisions that did not turn out as well as we hoped

List process-related (i.e. team organization) decisions that, in retrospect, were not as successful as you thought they would be.

 * 2 - 4 decisions.
 * Ordered from most to least important.
 * Feel free to refer/link to process artifact(s).

Focusing on coding and leaving documentation behind.
Not researching further on GPT where we started having issues and errors when trying to generate contracts.
We were also planning on using GCP for contract storage, but we instead pivoted to AWS as that seemed to be a better fit for us. 
Not focusing on prompt engineering.

#### Planned changes

List any process-related changes you are planning to make (if there are any)

 * Ordered from most to least important.
 * Explain why you are making a change.

We want to use JIRA more. 

## Product - Review

#### Goals and/or tasks that were met/completed:

 * From most to least important.
 * Refer/link to artifact(s) that show that a goal/task was met/completed.
 * If a goal/task was not part of the original iteration plan, please mention it.

We can now store contracts better!

We can now edit contracts in rich text!

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

This is the final iteration!