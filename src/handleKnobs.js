export default function(numb, val, store) {
  const params = numb => {
    switch (numb) {
      case 1:
        return (store.vals = {
            ...store.vals,
          one: val,
        });
      case 2:
        return (store.vals = {
          ...store.vals,
          two: val,
        });
      case 3:
        return (store.vals = {
          ...store.vals,
          three: val,
        });
      case 4:
        return (store.vals = {
          ...store.vals,
          four: val,
        });
      case 5:
        return (store.vals = {
          ...store.vals,
          five: val,
        });
      case 6:
        return (store.vals = {
          ...store.vals,
          six: val,
        });
      case 7:
        return (store.vals = {
          ...store.vals,
          seven: val,
        });
      case 8:
        return (store.vals = {
          ...store.vals,
          eight: val,
        });
    }
  };

  console.table(store)

  return params(numb);
}
