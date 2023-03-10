import styles from "../mainHeader/mainHeader.module.css";
import lupa from "../mainHeader/Lupa.png";
import group from "../mainHeader/Group.svg";
import entrance from "../mainHeader/Entrance.png";
import group2 from "../mainHeader/Group2.png";
import yandex from "../mainHeader/Yandex.png";
import heart from "../mainHeader/Heart.png";
import setting from "../mainHeader/Setting.png";
import Bascet1 from "../mainHeader/Bascet1.png";
import Bascet from "../mainHeader/Basket.png";
import login from "../mainHeader/Login.svg";
import { Link } from "react-router-dom";
import { useSelect } from "@mui/base";
import { color } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProdsFromCart } from "../../features/cartSlice";
import { getProductsById } from "../../features/productsSlice";

const MainHeader = () => {

 const token = useSelector((state) => state.authReducer.token);
  const handleClick = () => {
    localStorage.removeItem("token");
  };
  const auth = useSelector((state) => state.authReducer.isAuth);
  let cart = useSelector(state => state.cartReducer.cartLength)
  let cart1 = useSelector(state => state.productsReducer.cartLength)

  let last = undefined;
  let lastsec = undefined;
  if(cart.length > 0){
 last = Number(String(cart.length)[String(cart.length).length - 1])
lastsec = Number((cart.length > 9 ? String(cart.length)[String(cart.length).length - 2] : "0") + String(cart.length)[String(cart.length).length - 1])
  }else{
 last = Number(String(cart1.length)[String(cart1.length).length - 1])
lastsec = Number((cart1.length > 9 ? String(cart1.length)[String(cart1.length).length - 2] : "0") + String(cart1.length)[String(cart1.length).length - 1])
  }





  const dispatch = useDispatch()
  useEffect(() => {
    if(auth){
        dispatch(getProdsFromCart())
    }else if(localStorage.getItem("cart") === null){
      localStorage.setItem("cart", JSON.stringify([]))

    }
    else if(localStorage.getItem("cart").length > 0 && (localStorage.getItem("cart")[0] + localStorage.getItem("cart")[localStorage.getItem("cart").length - 1]) !== "[]"){
      localStorage.setItem("cart", JSON.stringify([]))
      console.log("Msnd")
    }
    else if(localStorage.getItem("cart").length !== 0){

        dispatch(getProductsById({arr: JSON.parse(localStorage.getItem("cart"))}))
    }
    else{
      localStorage.setItem("cart", JSON.stringify([]))
    }
    
}, [auth]);
  return (
    <>
      <div className={styles.body}>
        <div className={styles.list}>
          <select className={styles.select}>
            <option>??????????????</option>
            <option>??????????-??????????????????</option>
          </select>
          <Link className={styles.delivery} to="/delivery">
            ????????????????
          </Link>
          <Link className={styles.delivery} to="/reviews">
            ????????????
          </Link>
          <Link className={styles.delivery} to="/buyers">
            ??????????????????????
          </Link>
        </div>
        <div className={styles.inputDiv}>
          <input
            className={styles.inputSearch}
            placeholder="?????????? ???? ??????????"
            type="text"
            name=""
            id=""
          />
          <img className={styles.imgLupa} src={lupa} alt="" />
        </div>
        <div className={styles.extranceDiv}>
          <img src={group} alt="" />
        </div>
        <div className={styles.entrance}>
          <img src={login} alt="" />
          {token === null ? (
            <Link to="/login" style={{ color: "black" }}>
              ??????????
            </Link>
          ) : (
            <div onClick={handleClick}>??????????</div>
          )}
        </div>

      </div>
      {/* ???????????? ???????????? */}
      <div className={styles.body2}>
        <div className={styles.group2}>
          <img className={styles.imgGropr2} src={group2} alt="" />
        </div>
        <div className={styles.yandex}>
          {" "}
          <img className={styles.yandexImg} src={yandex} alt="" />
        </div>
        <div className={styles.textDiv}>
          <div className={styles.workingTime}>?????????? ????????????:</div>
          <div className={styles.workingTime2}>????-????: c 09:00-20:00</div>
        </div>
        <div className={styles.callDiv}>
          <div className={styles.numberPhone}>8 (938) 020-16-96</div>
          <Link to="tel:89380201696" className={styles.call}>
            ???????????????? ????????????
          </Link>
        </div>
        <div className={styles.heart}>
          <img src={heart} alt="" />
        </div>
        <div className={styles.setting}>
          <img src={setting} alt="" />
        </div>
        <div className={styles.basketDiv}>
        <Link to="cart"><img src={Bascet1} alt="" />
          <div className={styles.basketDiv2}>
            <img src={Bascet} alt="" />
          </div></Link> 
        </div>
        <div className={styles.infBasketDiv}>
          <Link to="cart" className={styles.bask}> ??????????????</Link>
          <div className={styles.bask2}> {cart.length > 0 ? cart.length : cart1.length} {`??????????${ lastsec > 10 && lastsec < 20 ? "????" : last > 1 && last < 5 ? "a" : lastsec > 10 && lastsec < 20 ? "????" : last > 4 && last < 10 || last === 0 ? "????" : ""}`}</div>
        </div>
      </div>
    </>
  );
};
export default MainHeader;
