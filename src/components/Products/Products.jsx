import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Products.module.css";

const Products = ({ filter, loading }) => {

  if (loading) {
    return <div className={styles.loader}></div>;
  }

  const format = (num) => new Intl.NumberFormat("ru-RU").format(num);

  return (
    <>
      {window.location.search ? (
        <div className={styles.search_result}>Результаты поиска</div>
      ) : null}
      <div className={styles.product_conteiner}>
        {filter.length === 0 ? (
          <div className={styles.product_not_found}>Товар не найден</div>
        ) : (
          <>
            {filter.map((item) => {
              return (
                <div className={styles.product_card}>
                  <div className={styles.product_image}>
                    <img src={item.productPicture} alt="Product Image" />
                  </div>
                  <div className={styles.product_details}>
                    <NavLink
                      to={"/product/" + item._id}
                      className={styles.product_name}
                    >
                      <h3>{item.productName}</h3>
                    </NavLink>
                    <div className={styles.reviews_count}>
                      Отзывов ({item.reviews.length})
                    </div>
                    <span className={styles.product_price}>
                      {format(item.price)} ₽
                    </span>
                    <div className={styles.product_actions}>
                      <NavLink
                        to={`/product/${item._id}`}
                        className={styles.add_to_cart}
                      >
                        В корзину
                      </NavLink>

                      <button className={styles.buy_now}>Купить</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default Products;
