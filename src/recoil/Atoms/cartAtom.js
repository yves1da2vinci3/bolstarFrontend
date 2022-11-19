import {atom} from 'recoil'
const CaartAtom = atom({
    key: 'cart', // unique ID (with respect to other atoms/selectors)
    default: [], // valeur par défaut (alias valeur initials)
  });

  export default CaartAtom