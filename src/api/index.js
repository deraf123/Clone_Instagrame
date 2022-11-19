import { getPhotos, mutatePhoto } from "./photos";
import { getUser } from "./user";

export const api = {
  photos: {
    getPhotos,
    mutatePhoto,
  },
  users: {
    getUser,
  },
};
