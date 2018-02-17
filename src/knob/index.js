import SetOne from './SetOne/index';
import SetTwo from './SetTwo/index';
// import SetThree from './SetThree/index';
// import SteFour from './SteFour/index';
// import SetFive from './SetFive/index';
// import SetSix from './SetSix/index';
// import SetSevet from './SetSevet/index';
// import SetEight from './SetEight/index';

export default function(numb, val, set) {
  const setSwitcher = set => {
    switch (set) {
      case 1:
        return SetOne(numb, val);
      case 2:
        return SetTwo(numb, val);
      case 3:
        return console.log(numb, val, set);
      case 4:
        return console.log(numb, val, set);
      case 5:
        return console.log(numb, val, set);
      case 6:
        return console.log(numb, val, set);
      case 7:
        return console.log(numb, val, set);
      case 8:
        return console.log(numb, val, set);
    }
  };

  return setSwitcher(set);
}
