# FullStory.com Rage Click Integration
 
This project is a snippet of code used to listen for a "rage click" event from FullStory and to open a feedback form (survey).

This snippet was used in [WordPress](https://wordpress.org) with a [Typeform](https://www.typeform.com) form but can be adopted to any site and a variety of survey/feedback tools. It uses browser localstorage to prevent a visitor from being repeatedly given a survey.

## Requirements
You need a [FullStory.com](https://www.fullstory.com) account, with that snippet loaded on your site. You will need an account with a feedback or survey tool. Consult their instructions for creating a form with a hidden field for the FullStory URL.

## How to make it better
Due to limitation with the free version of Typeform, the form is opened in a new tab. Ideally it would be opened in an unobtrusive overlay on the page.