/**
 * @jest-environment jsdom
 */
import {pushToHistory} from '../scripts/router.js';
describe('Test pushToHistory function', () => {
	let history; 
	test('push settings state', () => {
		history = pushToHistory('settings'); 
		expect(history.length).toBe(2); 
		expect(history.state.page).toBe('settings'); 
	});
	test('push entry state', () => {
		history = pushToHistory('entry', 1); 
		expect(history.length).toBe(3); 
		expect(history.state.page).toBe('entry1'); 
	});
	test('push empty state', () => {
		history = pushToHistory(); 
		expect(history.length).toBe(4); 
		expect(history.state).toStrictEqual({}); 
	});
});  
