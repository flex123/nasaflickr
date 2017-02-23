const initialState = [
  {id: '24662369@N07', name: 'Goddard'},
  {id: '108488366@N07', name: 'Kennedy'},
  {id: '35067687@N04', name: 'HQ'},
  {id: '50196521@N03', name: 'Langley'},
  {id: '29988733@N04', name: 'Johnson'},
  {id: '71175941@N05', name: 'Orion'}
];

export default function sites(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
