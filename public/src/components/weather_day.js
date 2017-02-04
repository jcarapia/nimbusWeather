import React from 'react';

export default (props) => {
	console.log('from the component', props)
	return (
		<div>
			<h1>Hello it is much {props.desc} outside</h1>
		</div>
	)
}