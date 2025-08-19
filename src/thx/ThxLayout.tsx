import { Typography } from "@alfalab/core-components/typography";
import { ButtonMobile } from "@alfalab/core-components/button/mobile";
import bigSmile from "../assets/bigSmile.png";
import { thxSt } from "./style.css";
import { appSt } from "../style.css.ts";
import { Gap } from "@alfalab/core-components/gap";

export const ThxLayout = () => {
  return (
      <>
        <div className={thxSt.container}>
          <img
              alt="Картинка ракеты"
              src={bigSmile}
              width={250}
              className={thxSt.rocket}
          />
          <Typography.TitleResponsive
              font="system"
              tag="h1"
              view="large"
              defaultMargins={false}
              weight="bold"
          >
            Сервис пока недоступен
          </Typography.TitleResponsive>
          <Gap size={8} />
          <Typography.Text tag="p" view="primary-medium">
            Вся команда очень старается, скоро всё заработает!
          </Typography.Text>
        </div>

        <div className={appSt.bottomBtn}>
          <ButtonMobile
              block
              view="primary"
              href="https://online.alfabank.ru/"
          >
            Спасибо, понятно!
          </ButtonMobile>
        </div>
      </>
  );
};
