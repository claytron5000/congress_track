# Congress Track
## congress_track
The application is one that helps users keep track of their congressional representatives, how they have voted on what bills. The idea is to have a dashboard that shows your particular Representative, the bills they've recently voted on, and how the voted. An obvious expansion to the app is to show the Senators as well. A more ambitious and probably out of reach of this phase would be to also have your state representatives, and state senators on the dashboard. That last one would be a challenge on many levels, not least of which is that each state has a different form of state government.

## Install and run locally
- pull repo down to local folder 
- in the folder `npm install`
- currently there are a couple of apps in place that will be combined in order to run the US congressional one `npm run us_congress`
  - to view a single House Representative got to `localhost:3000/{state}/{district}`, eg. `http://localhost:3000/ma/1`
  - there is a view of all Senators at `http://localhost:3000/upcoming`
- massachusetts general court is similar `npm run mass_gen_court`
  - got to `localhost:3000/massachusetts-general-court` fill out your address (carefully) and you should view a json string of your state senator.
  
## To Do
So much.
- Create a filtering system of the list of Senators, include House Reps.
  - Upcoming election date
  - Party
  - Sort by seniority
  - Committee
- Display votes on bills (huge one because it includes making the bills readable or sortable or understandable)
- For the Mass General court, create a similar filters to votes/bills/committees
- ?Save data?
