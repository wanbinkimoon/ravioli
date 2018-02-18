export default function(numb, val, store) {
  const params = numb => {
    switch (numb) {
      case 1:
        return (store.vals = {
            ...store.vals,
          ONE: val,
        });
      case 2:
        return (store.vals = {
          ...store.vals,
          TWO: val,
        });
      case 3:
        return (store.vals = {
          ...store.vals,
          THREE: val,
        });
      case 4:
        return (store.vals = {
          ...store.vals,
          FOUR: val,
        });
      case 5:
        return (store.vals = {
          ...store.vals,
          FIVE: val,
        });
      case 6:
        return (store.vals = {
          ...store.vals,
          SIX: val,
        });
      case 7:
        return (store.vals = {
          ...store.vals,
          SEVEN: val,
        });
      case 8:
        return (store.vals = {
          ...store.vals,
          EIGHT: val,
        });
    }
  };

  return params(numb);
}
