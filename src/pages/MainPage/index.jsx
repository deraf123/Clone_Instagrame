import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "../../redux/actions/photos";
import { DetailedCard } from "../../components/DetailedCard";
import { Layout } from "../../components/Layout";
import InfiniteScroll from "react-infinite-scroll-component";
import "./style.scss";
import { Bars } from "react-loader-spinner";
export const MainPage = () => {
  const photos = useSelector((state) => state.photos.photos);
  const loading = useSelector((state) => state.photos.isPhotosLoading);
  const total = useSelector((state) => state.photos.totalPhotos);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(getPhotos(page));
  }, [page]);
  console.log(photos);
  const nextHandler = () => {
    setPage(page + 1);
  };
  return (
    <Layout nickName='Deraf' id={1}>
      <div className='cnMainPageRoot'>
        {loading ? (
          <div className='cnMainLoaderContainer'>
            <Bars color='#000BFF' height={80} width={80} />
          </div>
        ) : (
          <InfiniteScroll
            dataLength={photos.length}
            next={nextHandler}
            hasMore={photos.length < total}
            loader={
              <div className='cnMainLoaderContainer'>
                <Bars color='#000BFF' height={25} width={25} />
              </div>
            }
            endMessage={<p className='cnMainLoaderContainer'>Thats all!</p>}
          >
            {photos.map(({ author, imgUrl, id, likes, comments }) => (
              <DetailedCard
                key={id}
                userName={author.nickname}
                userId={author.id}
                imgUrl={imgUrl}
                likes={likes.length}
                isLikedByYou={true}
                comments={comments}
                className='cnMainPageCard'
                avatarUrl={author.avatarUrl}
              />
            ))}
          </InfiniteScroll>
        )}
      </div>
    </Layout>
  );
};
