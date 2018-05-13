import * as actionTypes from '../actionTypes';
import * as layoutTypes from '../../shared/UI/layoutTypes';

export const getLayoutType = () => {
      return {
          type: actionTypes.GET_LAYOUT_TYPE,
          layoutType: window.innerHeight > window.innerWidth ? layoutTypes.MOBILE : layoutTypes.DESKTOP
      }
}