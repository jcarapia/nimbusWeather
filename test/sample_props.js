/*
This is a sample response sent back from Yahoo Weather API for a
10-Day weather query for Oakland, CA. 

Use for app testing purposes. 

NOTE: The response is an object, but since the state of the application as it
				pertains to this response is stored in an array, the response is placed inside an 
				array here as well
*/

module.exports = [
	{
	  "query": {
	    "count": 10,
	    "created": "2017-02-06T01:33:31Z",
	    "lang": "en-US",
	    "results": {
	      "channel": [
	        {
	          "title": "Yahoo! Weather - Oakland, CA, US",
	          "item": {
	            "forecast": {
	              "code": "12",
	              "date": "05 Feb 2017",
	              "day": "Sun",
	              "high": "58",
	              "low": "50",
	              "text": "Rain"
	            }
	          },
	          "units": {
	            "temperature": "F"
	          }
	        },
	        {
	          "title": "Yahoo! Weather - Oakland, CA, US",
	          "item": {
	            "forecast": {
	              "code": "12",
	              "date": "06 Feb 2017",
	              "day": "Mon",
	              "high": "58",
	              "low": "56",
	              "text": "Rain"
	            }
	          },
	          "units": {
	            "temperature": "F"
	          }
	        },
	        {
	          "title": "Yahoo! Weather - Oakland, CA, US",
	          "item": {
	            "forecast": {
	              "code": "11",
	              "date": "07 Feb 2017",
	              "day": "Tue",
	              "high": "61",
	              "low": "58",
	              "text": "Showers"
	            }
	          },
	          "units": {
	            "temperature": "F"
	          }
	        },
	        {
	          "title": "Yahoo! Weather - Oakland, CA, US",
	          "item": {
	            "forecast": {
	              "code": "39",
	              "date": "08 Feb 2017",
	              "day": "Wed",
	              "high": "61",
	              "low": "58",
	              "text": "Scattered Showers"
	            }
	          },
	          "units": {
	            "temperature": "F"
	          }
	        },
	        {
	          "title": "Yahoo! Weather - Oakland, CA, US",
	          "item": {
	            "forecast": {
	              "code": "11",
	              "date": "09 Feb 2017",
	              "day": "Thu",
	              "high": "60",
	              "low": "57",
	              "text": "Showers"
	            }
	          },
	          "units": {
	            "temperature": "F"
	          }
	        },
	        {
	          "title": "Yahoo! Weather - Oakland, CA, US",
	          "item": {
	            "forecast": {
	              "code": "11",
	              "date": "10 Feb 2017",
	              "day": "Fri",
	              "high": "58",
	              "low": "51",
	              "text": "Showers"
	            }
	          },
	          "units": {
	            "temperature": "F"
	          }
	        },
	        {
	          "title": "Yahoo! Weather - Oakland, CA, US",
	          "item": {
	            "forecast": {
	              "code": "34",
	              "date": "11 Feb 2017",
	              "day": "Sat",
	              "high": "59",
	              "low": "49",
	              "text": "Mostly Sunny"
	            }
	          },
	          "units": {
	            "temperature": "F"
	          }
	        },
	        {
	          "title": "Yahoo! Weather - Oakland, CA, US",
	          "item": {
	            "forecast": {
	              "code": "30",
	              "date": "12 Feb 2017",
	              "day": "Sun",
	              "high": "61",
	              "low": "47",
	              "text": "Partly Cloudy"
	            }
	          },
	          "units": {
	            "temperature": "F"
	          }
	        },
	        {
	          "title": "Yahoo! Weather - Oakland, CA, US",
	          "item": {
	            "forecast": {
	              "code": "28",
	              "date": "13 Feb 2017",
	              "day": "Mon",
	              "high": "63",
	              "low": "48",
	              "text": "Mostly Cloudy"
	            }
	          },
	          "units": {
	            "temperature": "F"
	          }
	        },
	        {
	          "title": "Yahoo! Weather - Oakland, CA, US",
	          "item": {
	            "forecast": {
	              "code": "30",
	              "date": "14 Feb 2017",
	              "day": "Tue",
	              "high": "64",
	              "low": "50",
	              "text": "Partly Cloudy"
	            }
	          },
	          "units": {
	            "temperature": "F"
	          }
	        }
	      ]
	    }
	  }
	}
];