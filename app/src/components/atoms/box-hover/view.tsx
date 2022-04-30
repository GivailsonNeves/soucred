import "./styles.scss";
export interface BoxHoverProps {
  title?: string;
  subTitle?: string;
  postData?: string;
  children: React.ReactNode;
}
const BoxHover: React.FC<BoxHoverProps> = ({
  title,
  subTitle,
  children,
  postData,
}) => {
  return (
    <div className="BoxHover">
      {children}
      <div className="hover"></div>
      {(title || subTitle) && (
        <div className="text-hover">
          {title && <h2>{title}</h2>}
          {subTitle && <p>{subTitle}</p>}
          {postData && <small>{postData}</small>}
        </div>
      )}
    </div>
  );
};

export default BoxHover;
