import * as ActionTypes from './ActionTypes'
import * as actions from './auth'

describe('setCurrentUser', () => {
  it('sends back an action with type SET_CURRENT_USER and user object', () => {
    expect(
      actions.setCurrentUser({name: 'John', email: 'john@example.com'})
    ).toEqual(
      {
        type: ActionTypes.SET_CURRENT_USER,
        user: {
          name: 'John',
          email: 'john@example.com',
        }
      }
    )
  })
})
