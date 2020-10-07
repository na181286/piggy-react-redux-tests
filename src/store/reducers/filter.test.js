import reducer from './filter';
import * as actionTypes from "../actions/actionTypes";

describe('filter reducer', () =>{
    it('should return initial state', ()=>{
        expect(reducer(undefined, {})).toEqual(
            {
                color: ["purple", "red", "green", "blue", "yellow", "grey"],
                shape: ["round", "oval", "rectangle", "square", "triangle"],
              }
        )
    })

    it('should remove red after click on red filter', ()=>{
        expect(reducer(  {
            color: ["purple", "red", "green", "blue", "yellow", "grey"],
            shape: ["round", "oval", "rectangle", "square", "triangle"],
          }, {
              type: actionTypes.SET_COLOR,
              color:'red'
          })).toEqual(
            {
                color: ["purple", "green", "blue", "yellow", "grey"],
                shape: ["round", "oval", "rectangle", "square", "triangle"],
              }
        )
    })
})