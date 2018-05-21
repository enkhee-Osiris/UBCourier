import { createSelector } from 'reselect';

const getReviewsIds = reviews => reviews.ids || [];
const getReviewsEntities = reviews => reviews.byId || {};
const getUserIdForFiltering = (_, uid) => uid;

export const getReviewsForUser = createSelector(
  [
    getReviewsIds,
    getReviewsEntities,
    getUserIdForFiltering,
  ],
  (ids, entities, uid) => {
    const reviews = [];
    ids.forEach((id) => {
      if (entities[id].userId === uid) {
        reviews.push(entities[id]);
      }
    });

    return reviews;
  },
);

export const getAvaragePointOfUser = createSelector(
  [
    getReviewsIds,
    getReviewsEntities,
    getUserIdForFiltering,
  ],
  (ids, entities, uid) => {
    const points = [];
    ids.forEach((id) => {
      if (entities[id].userId === uid) {
        points.push(entities[id].point);
      }
    });
    const sumPoints = points.reduce((sum, x) => sum + x, 0);

    return Math.round((sumPoints / points.length) * 10) / 10;
  },
);
