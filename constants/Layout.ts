import { Dimensions } from 'react-native';

interface ILayouts {
  window: {
    width: number;
    height: number;
  },
  isSmallDevice: boolean;
};


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Layouts: ILayouts = {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};

export default Layouts;
