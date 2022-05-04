import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {
  default as middlePhoto1,
  default as middlePhoto2,
} from "../../../assets/images/caixa.png";
import titlePhoto from "../../../assets/images/caixaFrente.jpeg";
import Avatar from "../../molecules/avatar";
import "./styles.scss";

export interface BlogContentsProps {
  showNavigation?: boolean;
}

const BlogContents: React.FC<BlogContentsProps> = ({ showNavigation }) => {
  const [t] = useTranslation();

  return (
    <section className="blog-contents" id="blog-contents">
      <Container>
        <div className="title-photo">
          <img src={titlePhoto} alt={t("general.appName")} />
        </div>
        <div className="titles">
          <h2>Título do artigo</h2>
          <h4>Subtítulo do artigo</h4>
        </div>
        <Avatar
          avatarImage={titlePhoto}
          date="Hoje, 14:30"
          name="Ana Maria Loureiro"
          job="Economista"
        ></Avatar>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            ipsum quidem eligendi fuga aperiam explicabo esse aspernatur facere
            ipsa. Iusto, animi totam! Quibusdam culpa sed temporibus deserunt
            delectus itaque atque. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aliquid ipsum quidem eligendi fuga aperiam
            explicabo esse aspernatur facere ipsa. Iusto, animi totam! Quibusdam
            culpa sed temporibus deserunt delectus itaque atque. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Aliquid ipsum quidem
            eligendi fuga aperiam explicabo esse aspernatur facere ipsa. Iusto,
            animi totam!
          </p>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              ipsum quidem eligendi fuga aperiam explicabo esse aspernatur
              facere ipsa. Iusto, animi totam! Quibusdam culpa sed temporibus
              deserunt delectus itaque atque. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Aliquid ipsum quidem eligendi fuga
              aperiam explicabo esse aspernatur facere ipsa. Iusto, animi totam!
              Quibusdam culpa sed temporibus deserunt delectus itaque atque.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              ipsum quidem eligendi fuga aperiam explicabo esse aspernatur
              facere ipsa. Iusto, animi totam! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Aliquid ipsum quidem eligendi fuga
              aperiam explicabo esse aspernatur facere ipsa. Iusto, animi totam!
              Quibusdam culpa sed temporibus deserunt delectus itaque atque.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              ipsum quidem eligendi fuga aperiam explicabo esse aspernatur
              facere ipsa. Iusto, animi totam!
            </p>
            <img src={middlePhoto1} alt={t("general.appName")} />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            ipsum quidem eligendi fuga aperiam explicabo esse aspernatur facere
            ipsa. Iusto, animi totam! Quibusdam culpa sed temporibus deserunt
            delectus itaque atque. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aliquid ipsum quidem eligendi fuga aperiam
            explicabo esse aspernatur facere ipsa. Iusto, animi totam! Quibusdam
            culpa sed temporibus deserunt delectus itaque atque. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Aliquid ipsum quidem
            eligendi fuga aperiam explicabo esse aspernatur facere ipsa. Iusto,
            animi totam!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            ipsum quidem eligendi fuga aperiam explicabo esse aspernatur facere
            ipsa. Iusto, animi totam! Quibusdam culpa sed temporibus deserunt
            delectus itaque atque. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aliquid ipsum quidem eligendi fuga aperiam
            explicabo esse aspernatur facere ipsa. Iusto, animi totam! Quibusdam
            culpa sed temporibus deserunt delectus itaque atque. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Aliquid ipsum quidem
            eligendi fuga aperiam explicabo esse aspernatur facere ipsa. Iusto,
            animi totam!
          </p>
          <div>
            <img src={middlePhoto2} alt={t("general.appName")} />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                ipsum quidem eligendi fuga aperiam explicabo esse aspernatur
                facere ipsa. Iusto, animi totam! Quibusdam culpa sed temporibus
                deserunt delectus itaque atque. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Aliquid ipsum quidem eligendi fuga
                aperiam explicabo esse aspernatur facere ipsa. Iusto, animi
                totam! Quibusdam culpa sed temporibus deserunt delectus itaque
                atque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid ipsum quidem eligendi fuga aperiam explicabo esse
                aspernatur facere ipsa. Iusto, animi totam!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                ipsum quidem eligendi fuga aperiam explicabo esse aspernatur
                facere ipsa. Iusto, animi totam! Quibusdam culpa sed temporibus
                deserunt delectus itaque atque. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Aliquid ipsum quidem eligendi fuga
                aperiam explicabo esse aspernatur facere ipsa. Iusto, animi
                totam! Quibusdam culpa sed temporibus deserunt delectus itaque
                atque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid ipsum quidem eligendi fuga aperiam explicabo esse
                aspernatur facere ipsa. Iusto, animi totam!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BlogContents;
