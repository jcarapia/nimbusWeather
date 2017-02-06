import { renderComponent , expect } from '../test_helper';
import SearchField from '../../public/src/containers/search_field';

describe('SearchField', () => {

	let component;
	
	beforeEach(() => {
		component = renderComponent(SearchField);
	});

	it('should exist', () => {
		expect(component).to.exist;
	});

	it('has an input field', () => {
		expect(component.find('input')).to.exist;
	});

	it('has a button', () => {
		expect(component.find('button')).to.exist;
	});

	describe('entering text in the input field', () => {

		beforeEach(() => {
			component.find('input').simulate('change', 'San Francisco');
		});

		it('shows the correct text in the input field', () => {
			expect(component.find('input')).to.have.value('San Francisco');
		});

		it('clears the input field when form is submitted', () => {
			component.simulate('submit');
			expect(component.find('input')).to.have.value('');
		});
	});
	
});
