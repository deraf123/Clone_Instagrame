import { api } from "../../api";
import {
  getPhotosFailed,
  getPhotosStarted,
  getPhotosSuccess,
  mutatePhotosFailed,
  mutatePhotosStarted,
  mutatePhotosSuccess,
  setPhotosTotal,
} from "../actionCreates/photos";

export const getPhotos = (page = 1) => {
  return async (dispatch, getState) => {
    try {
      const store = getState();
      if (page === 1) {
        dispatch(getPhotosStarted);
      }
      const response = await api.photos.getPhotos({
        params: {
          _page: page,
          _limit: 5,
        },
      });
      if (page === 1) {
        dispatch(setPhotosTotal(response.headers["x-total-count"]));
        dispatch(getPhotosSuccess([...response.data]));
      } else {
        dispatch(getPhotosSuccess([...store.photos.photos, ...response.data]));
      }
    } catch (error) {
      dispatch(getPhotosFailed(error));
    }
  };
};

export const mutatePhoto = (userId, photoId) => {
  return async (dispatch, getState) => {
    dispatch(mutatePhotosStarted());
    const state = getState();
    const photo = state.photos.photos.find((elem) => elem.id === photoId);
    const newPhoto = {
      ...photo,
      likes: [...photo.likes],
    };
    if (newPhoto.likes.includes(userId)) {
      newPhoto.likes = newPhoto.likes.filter((like) => like !== userId);
    } else {
      newPhoto.likes.push(userId);
    }
    try {
      await api.photos.mutatePhoto({
        data: newPhoto,
      });
      dispatch(mutatePhotosSuccess());
    } catch (error) {
      dispatch(mutatePhotosFailed(error));
    }
  };
};
