import React from "react";
import { DetailedCard } from "../../components/DetailedCard";
import { Layout } from "../../components/Layout";

export const MainPage = () => {
  return (
    <Layout nickName='Deraf' id={1}>
      <div>MainPage</div>
      <DetailedCard
        userName='Artem'
        userId={1}
        imgUrl='https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg'
        likes={10}
        isLikedByYou={true}
        comments={[{ text: "asdf", nickName: "Gerab" },{ text: "asdf", nickName: "Gerab" },{ text: "asdf", nickName: "Gerab" }]}
      />
    </Layout>
  );
};
