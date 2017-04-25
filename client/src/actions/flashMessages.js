import { ADD_FLASH_MESSAGE } from './types';

export const addFlashMessage = (message) => ({
  type: ADD_FLASH_MESSAGE,
  message
})
