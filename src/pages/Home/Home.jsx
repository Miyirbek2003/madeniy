import Agency from "../../components/HomeComponents/Agency/Agency";
import HomeNews from "../../components/HomeComponents/HomeNews/HomeNews";
import HomeSlide from "../../components/HomeComponents/HomeSlider/MainSlider";
import Mapp from "../../components/HomeComponents/Map/Map";
import TopM from "../../components/HomeComponents/Top/TopM";
import { getSlider } from "../../store/mainSlider";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { getLastNews, getGalery } from "../../store/newsSlice/newSlice";
import { getMuzey } from "../../store/muzeySlice/muzeySlice";
import Stats from "../../components/Stats/Stats";
import Galery from "../../components/HomeComponents/Galery/Galery";
import "aos/dist/aos.css";
import AOS from "aos";
import Usefull from "../../components/HomeComponents/Usefull/Usefull";
import Loading from "../../components/Loading/Loading";
import { getMap } from "../../store/mapSlice/mapSlice";
export default function Home() {
  const dispatch = useDispatch();
  const { slides, isLoading } = useSelector((state) => state.mainSlider);
  React.useEffect(() => {
    window.scroll(0, 0)
    dispatch(getSlider());
    dispatch(getLastNews());
    dispatch(getMuzey());
    dispatch(getGalery());
    dispatch(getMap())
    AOS.init();
  }, []);
  const { maps } = useSelector(state => state.mapSlice)
  const { mainLoading } = useSelector((state) => state.newSlice);
  if (isLoading){
    document.body.style.overflow = 'hidden'
  }
  else{
    document.body.style.overflow = 'auto'
  }

  return (
    <main>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <HomeSlide slides={slides} />
          <HomeNews />
          <Agency />
          <TopM />
          <Mapp map0={maps[0]} />
          <Stats />
          <Galery />
          <Usefull />
        </>
      )}
    </main>
  );
}
