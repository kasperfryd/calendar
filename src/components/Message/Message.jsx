import style from "./Message.module.scss";

export const Message = ({ content, title, link }) => {
  return (
    <article className={style.messageStyle}>
      <h2>{title}</h2>
      <p>{content}</p>
      {link && <a href={link}>Dagens jule småkage</a>}
    </article>
  );
};
