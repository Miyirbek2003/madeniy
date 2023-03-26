import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./map.css";
export default function Mapp({ map0 }) {
  const dispatch = useDispatch();

  const { maps } = useSelector((state) => state.mapSlice);

  const local = document.querySelectorAll(".local");
  local.forEach((item) => {
    item.addEventListener("click", () => {
      local.forEach((i) => {
        i.classList.remove("active");
      });
    });
  });
  const [img, setImg] = React.useState("files/1.jpg");
  const [center, setCenter] = React.useState([
    maps[0]?.horizontal,
    maps[0]?.vertical,
  ]);
  const [title, setTitle] = React.useState(maps[0]?.title);
  return (
    <section className="map-m">
      <div className="inside">
        <div className="container">
          <div className="map-inner">
            <div className="container">
              <div className="map-title">
                <img
                  src={`https://www.madaniymeros.uz/img/gerb.deafcdd7.png`}
                  alt=""
                />
                <div className="title">
                  <span>Tariyxiy orinlar</span>
                  <p>
                    Qaraqalpaqstandag'i tariyxiy orinlar dizimine kirgizilgen
                    orinlar
                  </p>
                </div>
              </div>
              <div className="map-content">
                <iframe
                  width="500"
                  height="auto"
                  className="mpp"
                  src={`https://api.maptiler.com/maps/hybrid/?key=a0AOKhmzQPOR8hGiWtB5#10/${center[0]}/${center[1]}`}
                ></iframe>

                <div className="map-img">
                  <img
                    src={`https://admin.qr-madeniymiyras.uz/${img}`}
                    alt=""
                  />
                </div>
              </div>
              <div className="locations">
                <ul>
                  {maps?.map((item, index) => (
                    <li
                      className={`local`}
                      key={item.id}
                      onClick={(e) => {
                        setCenter((prev) => [
                          (prev.horizontal = item.horizontal),
                          (prev.vertical = item.vertical),
                        ]);
                        setImg(item?.image);
                        setTitle(item.title);
                        e.currentTarget.classList.add("active");
                      }}
                    >
                      <span>
                        {
                          item?.translations?.filter(
                            (el) =>
                              el.locale === localStorage.getItem("i18nextLng")
                          )[0].city
                        }
                      </span>
                      <div className="loc-title">
                        {
                          item?.translations?.filter(
                            (el) =>
                              el.locale === localStorage.getItem("i18nextLng")
                          )[0].title
                        }
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="title">{title}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
