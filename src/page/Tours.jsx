import "./Tour.css";
import SearchIcon from "@mui/icons-material/Search";
import ListProduct from "../components/product/ListProduct";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useProducts } from "../components/context/ProductContext";
import { Search } from "@mui/icons-material";
import Filterr from "../components/product/Filterr";

const Tours = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const { getProducts } = useProducts();
  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  return (
    <div className="container_tour">
      <div className="part-1">
        <div className="patr_1_text1">
          Выбери свой тур <br />
          <span className="patr_1_text1-1"> по Кыргызстану</span>
        </div>
        <div className="patr_1_text2">
          Лучшие маршруты и природные <br /> достопримечательности Кыргызстана
        </div>
        <img
          src="https://static.tildacdn.one/tild3739-3663-4835-b832-663538376264/line_dot.svg"
          alt=""
          className="patr_1_img1"
        />
        <img
          src="https://static.tildacdn.one/tild3435-3633-4439-a135-663332393637/location.png"
          alt=""
          className="patr_1_img2"
        />
      </div>
      <div className="search_section">
        <input
          type="text"
          placeholder="Поиск туров"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search_input"
        />
        <SearchIcon className="search" />
      </div>
      <Filterr />
      <ListProduct />
    </div>
  );
};

export default Tours;
