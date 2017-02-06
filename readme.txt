Welcome to Nimbus, your 10-Day Weather Forecast Provider!

Visit me at: https://nimbusweather.herokuapp.com/

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
My strategy for testing the application is simple and allows for flexibility. I am testing that the application renders the expected components when the appropriate information is passed in, which in the case of a React application is in the form of props. The following is the current testing strategy for the app:

*** Components *** 
a) App
	i) Expect the app to render.
	ii) Expect the app to render with a SearchField component.
	iii) Expect the app to render with a WeatherList component. 
b) WeatherDay
	i) Expect the component to render.
	ii) Expect the component to render with the correct weather data for the day
	    City, Date, High Temp, Low Temp, and Weather Description.

*** Containers *** 
a) SearchField
	i) Expect the container to render. 
	ii) Expect the container to have an input box.
	iii) Expect the container to have a button. 
	iii) Expect the input field to contain the correct text - since it is a controlled element. 
	iv) Expect the input field to clear when the form is submitted. 
b) WeatherList
	i) Expect the container to exist.
	ii) It should render 10 WeatherDay components when data from Yahoo API is 
	    passed in as props.

*** Actions *** 
a) Index 
	i) Expect it to be the correct type (GET_WEATHER).
	ii) Expect it to successfully retreive data from the Yahoo Weather API.

*** Reducers *** 
a) Weather
	i) Expect it to return at least an empty array if an incorrect action is passed in. 
	ii) Expect it to properly handle the correct action type (GET_WEATHER) and return the correct state.

To expand upon the current testing strategy I would consider the following: 
a) Utilize unit testing in order to test that individual methods within the components or container are being called as 	 required. 
b) Integration testing to ensure that as a whole, the application is behaving as required. For example, upon submitting 	 the form in the SearchField component, I expect the method onFormSubmit() to be called, followed by the index action, 
	 followed by the weather reducer. These should be working cohesively and proper testing check for that. 

=== Challenges === 
1. Yahoo Weather API -> Documentation is very lacking; performance spotty; A bit of research required. 
2. Data persistence -> Solved by using localStorage with componentWillMount() and componentDidMount(). See 	  
	 search_field.js for implementation details.
3. Weather icons for various weather conditions -> added classes to weather elements dynamically per the data retrieved 
	 from the weather api. Each class (sunny, rain, etc) referenced a distinct icon. 
4. Creating a responsive and mobile-freindly UI -> Utilized Bootstrap and CSS.

=== Future Modifications === 
1. Add a spinner tp notify user that weather data is being retrieved.
2. Add modal for incorrect city input (Incorrect city input currently falls back to Falmer, England, GB per Yahoo API) 
3. 


