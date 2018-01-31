import { getCategoriesState } from './selectors';
import categoriesReducer from './reducer';

const fakeCategories = [
  {
    id: "9f8d8840-e22c-496f-b865-f5014710e234",
    decathlon_id: 309814,
    label: "Chaussettes"
  },
  {
    id: "98bbd88d-6e8c-4be6-8a2c-ef8e6ceca3af",
    decathlon_id: 735058,
    label: "Vêtements femme"
  },
  {
    id: "ee62f748-5efc-4c9f-97e8-4bd635296ba3",
    decathlon_id: 771006,
    label: "Amorçage carpe"
  }
]

const fakeProducts = [
  {
    id: "00591a96-a1bc-4dcb-aba5-1e8cc0cae925",
    decathlon_id: 8350534,
    title: "ARTENGO RS750 high x3 lineman",
    description: "le joueur occasionnel à la recherche d'une chaussette de sport (tennis, badminton, tennis de table, squash, padel etc)",
    rating: 4.4
  },
  {
    id: "108c5aaa-a844-4452-8899-4c539dace2c0",
    decathlon_id: 8379844,
    title: "RS 500 MIDX3 NOIR",
    description: "le joueur régulier pratiquant les sports de raquette (tennis, badminton, tennis de table, squash, padel et autres sports).",
    rating: 0
  }
]


describe('Selectors tests', () => {

  it('return state correctly',() => {

    const fakeState = {
      categories : fakeCategories,
      products: fakeProducts
    };

    expect(getCategoriesState(fakeState)).toEqual(fakeState);
  })

})

describe('Categories Reducer', () => {
  it('should add categories in state', () => {

    const fakeState = {
      categories : [],
      products: []
    };

    const action = {
      type: "FETCH_CATEGORIES",
      categories: fakeCategories
    }

    expect(categoriesReducer(fakeState, action)).toEqual({categories: fakeCategories, products: []})

  });


  it('should not update but replace all categories in state', () => {

    const initialState = {
      categories : [
        {
          id: "uuid-test-1111-11",
          decathlon_id: 111111,
          label: "sample category"
        }
      ],
      products: []
    };

    const action = {
      type: "FETCH_CATEGORIES",
      categories: fakeCategories
    }

    const expectedState = {
      categories: fakeCategories,
      products: []
    }

    expect(categoriesReducer(initialState, action)).toEqual(expectedState)
  });

  it('should add products in state', () => {
    const fakeState = {
      categories : [],
      products: []
    };

    const action = {
      type: "FETCH_PRODUCTS",
      products: fakeProducts
    }

    expect(categoriesReducer(fakeState, action)).toEqual({categories: [], products: fakeProducts})

  })

})
