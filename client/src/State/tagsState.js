import {atom} from 'recoil' 

const tagsState = atom({
    key: 'tagsState', //serves as a unique identifier with respect to other atoms/selectors
    default: [], // this is where you declare the initial value of your state variable
  })

export {tagsState}