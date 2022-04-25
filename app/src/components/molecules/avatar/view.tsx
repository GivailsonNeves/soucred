import { useTranslation } from "react-i18next";

import "./styles.scss";

export type AvatarProps = {
  avatarImage: string;
  date: string;
  name: string;
  job: string;
};

const Avatar: React.FC<AvatarProps> = ({
  avatarImage,
  date,
  name,
  job,
}) => {

  const [_, i18n] = useTranslation();

  return (
    <div className="avatar">
      <img src={avatarImage} />
      <div>
        <p>{date}</p>
        <p>Por <b>{name}</b> | {job}</p>
      </div>
    </div >
  );
};
export default Avatar;
