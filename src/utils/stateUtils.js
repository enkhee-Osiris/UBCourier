const omit = (obj, keys) => (
  Object.entries(obj)
    .filter(([key]) => !keys.includes(key))
    .reduce((ob, [key, val]) => Object.assign(ob, { [key]: val }), {})
);

export const insert = (state, item) => {
  const { byId = {}, ids = [] } = state;
  const id = item.key;

  return {
    byId: {
      ...byId,
      [id]: { ...item },
    },
    ids: [id, ...ids],
  };
};

export const insertAll = (state, items) => (
  items.reduce((acc, item) => insert(acc, item), state)
);

export const update = (state, id, props) => {
  const { byId } = state;
  const item = byId[id];

  return item ? {
    ...state,
    byId: {
      ...byId,
      [id]: { ...item, ...props },
    },
  } : state;
};

export const remove = ({ byId, ids }, id) => ({
  byId: omit(byId, [id]),
  ids: ids.filter(n => n !== id),
});
