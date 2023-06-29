import shortid from "shortid";

//action value
const ADD_COMMENT = "ADD_COMMENT";

//action creator
export const addComment = (payload) => {
  return { type: ADD_COMMENT, payload };
};

//initial state
const initialState = [
  {
    commenterName: "이안진",
    commentBody: "타임어택 무서워요",
  },
];

//reducer
const comments = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return [...state, action.payload];

    default:
      return state;
  }
};

export default comments;
