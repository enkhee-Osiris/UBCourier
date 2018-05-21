import { createSelector } from 'reselect';

const getPostsIds = posts => posts.ids || [];
const getPostsEntities = posts => posts.byId || {};
const getUidForFiltering = (_, uid) => uid;

export const getUserPosts = createSelector(
  [
    getPostsIds,
    getPostsEntities,
    getUidForFiltering,
  ],
  (ids, entities, uid) => {
    const posts = [];
    ids.forEach((id) => {
      if (entities[id].userId === uid) {
        posts.push(entities[id]);
      }
    });

    return posts;
  },
);

export const getLocations = createSelector(
  [
    getPostsIds,
    getPostsEntities,
  ],
  (ids, entities) => {
    const newArray = [];
    ids.forEach((id) => {
      const location = entities[id].currentLocation;
      newArray.push(location);
    });

    return newArray;
  },
);

export const getUserTotalBalance = createSelector(
  [
    getPostsIds,
    getPostsEntities,
    getUidForFiltering,
  ],
  (ids, entities, uid) => {
    let totalPrice = 0;
    ids.forEach((id) => {
      const post = entities[id];
      if (post.userId === uid) {
        totalPrice += post.price;
      }
    });

    return totalPrice;
  },
);

export const getTotalDeliveriesOfUser = createSelector(
  [
    getPostsIds,
    getPostsEntities,
    getUidForFiltering,
  ],
  (ids, entities, uid) => {
    const deliveries = [];
    ids.forEach((id) => {
      const post = entities[id];
      if (post.delivererId === uid) {
        deliveries.push(post);
      }
    });

    return deliveries.length;
  },
);
