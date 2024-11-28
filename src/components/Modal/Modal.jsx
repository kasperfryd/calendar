import style from "./Modal.module.scss";

export const Modal = ({ children, isModalOpen, setIsModalOpen }) => {
  return (
    isModalOpen && (
      <div
        onClick={() => setIsModalOpen(false)}
        className={style.modalBackgroundStyle}
      >
        <div className={style.modalStyle}>
          <article className={style.border}>
            <div>{children}</div>
            <span className={style.top}></span>
            <span className={style.right}></span>
            <span className={style.bottom}></span>
            <span className={style.left}></span>
          </article>
        </div>
      </div>
    )
  );
};
