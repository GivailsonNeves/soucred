import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import InfoCard from "../../molecules/info-card";
import Titles from "../../molecules/titles/view";

import "./styles.scss";

import titlePhoto from "../,,/../../../assets/images/caixaFrente.jpeg";
import middlePhoto1 from "../,,/../../../assets/images/caixa.png";
import middlePhoto2 from "../,,/../../../assets/images/caixa.png";
import { Link } from "react-router-dom";
import Avatar from "../../molecules/avatar";

interface BlogContentsProps {
  showNavigation?: boolean;
}

function BlogContents() {
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsum quidem eligendi fuga aperiam explicabo esse aspernatur facere ipsa. Iusto, animi totam! Quibusdam culpa sed temporibus deserunt delectus itaque atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsum quidem eligendi fuga aperiam explicabo esse aspernatur facere ipsa. Iusto, animi totam! Quibusdam culpa sed temporibus deserunt delectus itaque atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsum quidem eligendi fuga aperiam explicabo esse aspernatur facere ipsa. Iusto, animi totam!</p>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsum quidem eligendi fuga aperiam explicabo esse aspernatur facere ipsa. Iusto, animi totam! Quibusdam culpa sed temporibus deserunt delectus itaque atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsum quidem eligendi fuga aperiam explicabo esse aspernatur facere ipsa. Iusto, animi totam! Quibusdam culpa sed temporibus deserunt delectus itaque atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsum quidem eligendi fuga aperiam explicabo esse aspernatur facere ipsa. Iusto, animi totam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsum quidem eligendi fuga aperiam explicabo esse aspernatur facere ipsa. Iusto, animi totam! Quibusdam culpa sed temporibus deserunt delectus itaque atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsum quidem eligendi fuga aperiam explicabo esse aspernatur facere ipsa. Iusto, animi totam!</p>
            <img src={middlePhoto1} alt={t("general.appName")} />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsum quidem eligendi fuga aperiam explicabo esse aspernatur facere ipsa. Iusto, animi totam! Quibusdam culpa sed temporibus deserunt delectus itaque atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsum quidem eligendi fuga aperiam explicabo esse aspernatur facere ipsa. Iusto, animi totam! Quibusdam culpa sed temporibus deserunt delectus itaque atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsum quidem eligendi fuga aperiam explicabo esse aspernatur facere ipsa. Iusto, animi totam!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsum quidem eligendi fuga aperiam explicabo esse aspernatur facere ipsa. Iusto, animi totam! Quibusdam culpa sed temporibus deserunt delectus itaque atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsum quidem eligendi fuga aperiam explicabo esse aspernatur facere ipsa. Iusto, animi totam! Quibusdam culpa sed temporibus deserunt delectus itaque atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsum quidem eligendi fuga aperiam explicabo esse aspernatur facere ipsa. Iusto, animi totam!</p>
          <div>
            <img src={middlePhoto2} alt={t("general.appName")} />
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsum quidem eligendi fuga aperiam explicabo esse aspernatur facere ipsa. Iusto, animi totam! Quibusdam culpa sed temporibus deserunt delectus itaque atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsum quidem eligendi fuga aperiam explicabo esse aspernatur facere ipsa. Iusto, animi totam! Quibusdam culpa sed temporibus deserunt delectus itaque atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsum quidem eligendi fuga aperiam explicabo esse aspernatur facere ipsa. Iusto, animi totam!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsum quidem eligendi fuga aperiam explicabo esse aspernatur facere ipsa. Iusto, animi totam! Quibusdam culpa sed temporibus deserunt delectus itaque atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsum quidem eligendi fuga aperiam explicabo esse aspernatur facere ipsa. Iusto, animi totam! Quibusdam culpa sed temporibus deserunt delectus itaque atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsum quidem eligendi fuga aperiam explicabo esse aspernatur facere ipsa. Iusto, animi totam!</p>
            </div>
          </div>
        </div>
      </Container >
    </section>
  );
}

export default BlogContents;