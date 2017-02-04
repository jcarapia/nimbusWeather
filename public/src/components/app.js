import React, { Component } from 'react';

import SearchField from '../containers/search_field';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
      React-Redux Template for Heroku
      <SearchField />
      <WeatherList />
      </div>
    );
  }
}
