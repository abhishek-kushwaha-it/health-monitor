import { createStore } from "redux";

const STORAGE_KEY = 'healthPlannerData';
const AVATARS_KEY = 'userAvatars';

// Redux Actions (only used actions)
export const REDUX_ACTIONS = {
  SIGN_UP: 'SIGN_UP',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  UPDATE_NUTRITION: 'UPDATE_NUTRITION',
  UPDATE_USER_AVATAR: 'UPDATE_USER_AVATAR'
};

const INITIAL_STATE = {
  auth: { isLoggedIn: false, currentUser: null, users: [] },
  nutrition: {}
};

const loadInitialState = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error('Failed to load stored data:', e);
    }
  }
  return INITIAL_STATE;
};

// Helper to manage avatar storage separately
const saveAvatarToSessionStorage = (userId, avatarData) => {
  if (avatarData) {
    try {
      sessionStorage.setItem(`avatar_${userId}`, avatarData);
    } catch (e) {
      console.warn('Failed to save avatar to session storage:', e);
    }
  }
};

const getAvatarFromSessionStorage = (userId) => {
  try {
    return sessionStorage.getItem(`avatar_${userId}`);
  } catch (e) {
    return null;
  }
};

const dietPlannerReducer = (state = loadInitialState(), action) => {
  const newState = { ...state };
  const { currentUser, users } = newState.auth;
  const userIdx = currentUser ? users.findIndex(u => u.id === currentUser) : -1;

  switch (action.type) {
    case REDUX_ACTIONS.SIGN_UP: {
      const newUser = {
        id: Date.now().toString(),
        email: action.payload.email,
        password: action.payload.password,
        fullName: action.payload.fullName,
        username: action.payload.username,
        dateOfBirth: action.payload.dateOfBirth,
        avatar: null, // Don't store avatar in state
        createdAt: new Date().toISOString(),
        data: { 
          nutrition: {}, 
          exercisePlan: { 
            selectedPlan: 'beginner', 
            currentDay: 1,
            completedExercises: {}
          }
        }
      };
      // Save avatar to session storage instead
      if (action.payload.avatar) {
        saveAvatarToSessionStorage(newUser.id, action.payload.avatar);
        newUser.hasAvatar = true;
      }
      newState.auth.users = [...users, newUser];
      newState.auth.isLoggedIn = true;
      newState.auth.currentUser = newUser.id;
      break;
    }

    case REDUX_ACTIONS.LOGIN: {
      const user = users.find(
        u => u.email === action.payload.email && u.password === action.payload.password
      );
      if (user) {
        newState.auth.isLoggedIn = true;
        newState.auth.currentUser = user.id;
      }
      break;
    }

    case REDUX_ACTIONS.LOGOUT: {
      newState.auth.isLoggedIn = false;
      newState.auth.currentUser = null;
      break;
    }

    case REDUX_ACTIONS.UPDATE_NUTRITION: {
      if (userIdx >= 0) {
        newState.auth.users[userIdx].data.nutrition = action.payload;
      }
      newState.nutrition = action.payload;
      break;
    }

    case REDUX_ACTIONS.UPDATE_USER_AVATAR: {
      if (userIdx >= 0) {
        saveAvatarToSessionStorage(users[userIdx].id, action.payload);
        newState.auth.users[userIdx].hasAvatar = true;
      }
      break;
    }

    default:
      break;
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
  } catch (e) {
    if (e.name === 'QuotaExceededError') {
      console.error('localStorage quota exceeded. Clearing old data...');
      localStorage.removeItem(STORAGE_KEY);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
    } else {
      console.error('Failed to save to localStorage:', e);
    }
  }
  return newState;
};

const store = createStore(dietPlannerReducer);
export default store;