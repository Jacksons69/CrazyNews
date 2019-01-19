const initialState = {
  frNewsPart1: [],
  frNewsPart2: [],
  frNewsPart3: [],
  frNewsPart4: [],
  page: 0,
};

const GET_FRENCH_NEWS = 'GET_FRENCH_NEWS'
const GO_NEXT_PAGE = 'GO_NEXT_PAGE';
const GO_HOME = 'GO_HOME';

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_FRENCH_NEWS:
      return {
        ...state,
        frNewsPart1: [action.part1],
        frNewsPart2: [action.part2],
        frNewsPart3: [action.part3],
        frNewsPart4: [action.part4],
        page: 0,
      };

    case GO_NEXT_PAGE:
      if (action.next == true) {
        return {
          ...state,
          page: state.page + 1
        }
      } else {
        return {
          ...state,
          page: state.page - 1
        }
      }

    case GO_HOME:
      return {
        ...state,
        page: 0,
      }

    default:
      return state;
  }
};

export const getFrenchNews = (part1, part2, part3, part4) => ({
  type: GET_FRENCH_NEWS,
  part1,
  part2,
  part3,
  part4
});

export const goNextPage = next => ({
  type: GO_NEXT_PAGE,
  next,
});

export const goHome = () => ({
  type: GO_HOME,
});


export default reducer;
