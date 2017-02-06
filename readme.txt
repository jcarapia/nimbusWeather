Welcome to Nimbus, your 10-Day Weather Forecast Provider!

Visit me at: 

=== To Get Started ===
1. npm i
2. npm start
3. webpack -w
3. App is served on localhost:3000


=== To Run Tests === 
1. npm run test


=== Description === 
Nimbus is a simple weather forecast application built with React/Redux on the front-end and a simple Express server in the back end. The application fetches weather information via a YQL request to the Yahoo Weather API. 
Redux is used to update the state of the application upon retrieval of the data. Additionally, the latest city searched for is stored in localStorage. This allows the application to automatically render the weather forecast upon browser
refreshes by generating a new get request. Note that only the name of the city is stored - this way we get up-to-date weather information.

=== Testing Strategy === 
My strategy for testing the application is simple and allows for flexibility. I am testing that the application renders the expected components with when the appropriate information is passed in, which in the case of a React application is in the form of props. 
The app utilizes mocha and chai as testing libraries. 

=== Challenges === 
1. Yahoo Weather API - Documentation is very lacking; performance spotty. 
2. Data persistence - Solved by using localStorage with componentWillMount() and componentDidMount(). See 	  
	 search_field.js for implementation details.
3. Weather icons for various weather conditions - added classes to weather elements dynamically per the data retrieved 
	 from the weather api. Each class (sunny, rain, etc) referenced a distinct icon. 
4. Creating a responsive and mobile-frindly UI - Bootstrap and CSS

=== Future Modifications === 
1. Add a spinner tp notify user that weather data is being retrieved.
2. Add modal for bad city input (Bad city input currently falls back to Falmer, England, GB per Yahoo API) 
3. 


