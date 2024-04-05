import { useParams } from "react-router-dom";
import { fetchItem, setPizzaPage } from "../../redux/slices/descSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect } from "react";

export function PizzaPage() {
  const pizza = useSelector((state: RootState) => state.descSlice.item);
  const status = useSelector((state: RootState) => state.descSlice.status);

  const params = useParams();

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log(pizza);
    console.log(status);
  }, [pizza, status]);

  useEffect(() => {
    if (params.id) {
      dispatch(fetchItem(params.id));
    }

    return () => {
      dispatch(setPizzaPage());
    };
  }, []);

  if (!pizza) {
    return <>Загрузка...</>;
  }

  return (
    <div>
      <h1>{pizza.title}</h1>
      <img src={pizza.image}></img>
      <span>{pizza.price} руб</span>
    </div>
  );
}