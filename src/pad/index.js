export default function(numb, store) {
  const toLoad = numb => {
    switch (numb) {
      case 36:
        return 1;
      case 37:
        return 2;
      case 38:
        return 3;
      case 39:
        return 4;
      case 40:
        return 5;
      case 41:
        return 6;
      case 42:
        return 7;
      case 43:
        return 8;
    }
  };

  store.state = {
    set: toLoad(numb),
  };

  return store.state;
}
