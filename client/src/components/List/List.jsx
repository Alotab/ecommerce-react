import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ maxPrice, catId }) => {

  const { data, loading, error } = useFetch(
    `https://api.escuelajs.co/api/v1/products/?title=Generic&price_max=${maxPrice}&categoryId=${catId}`
  );

  return (
    <div className="list">
      {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;