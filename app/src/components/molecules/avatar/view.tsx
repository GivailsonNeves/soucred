import "./styles.scss";

export type AvatarProps = {
  avatarImage: string;
  date: string;
  name: string;
  job: string;
};

const Avatar: React.FC<AvatarProps> = ({ avatarImage, date, name, job }) => {
  return (
    <div className="avatar">
      <img src={avatarImage} alt="" />
      <div>
        <p>{date}</p>
        <p>
          Por <b>{name}</b> | {job}
        </p>
      </div>
    </div>
  );
};
export default Avatar;
