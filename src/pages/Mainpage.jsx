import { useEffect, useState } from "react";
import { Calendar } from "../components/Calendar/Calendar";
import { CalendarHatch } from "../components/CalendarHatch/CalendarHatch";
import { Modal } from "../components/Modal/Modal";
import { calendarScheme } from "../lib/calendarScheme";
import { RandomChristmasFact } from "../components/RandomChristmasFact/RandomChristmasFact";
import { checkDate } from "../lib/checkDate";
import { Message } from "../components/Message/Message";
import { RandomChristmasJoke } from "../components/RandomChristmasJoke/RandomChristmasJoke";

export const Mainpage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [content, setContent] = useState("");
  const [openedHatches, setOpenedHatches] = useState(
    localStorage.getItem("calendar")
      ? JSON.parse(localStorage.getItem("calendar"))
      : []
  );

  const handleModal = (message, link, day) => {
    setContent({message: message, title: "Julemandens Besked", link: link});
    setIsModalOpen(!isModalOpen);
    handleOpenHatch(day);
  };

  const handleOpenHatch = (day) => {
    if (!openedHatches.includes(day))
    setOpenedHatches((prev) => [...prev, day]);
  };

  useEffect(() => {
    const loadPreviousState = () => {
      let state = JSON.parse(localStorage.getItem("calendar"));
      setOpenedHatches(state);
    };
    loadPreviousState();
  }, []);

  useEffect(() => {
    localStorage.setItem("calendar", JSON.stringify(openedHatches));
  }, [openedHatches]);

  return (
    <>
      <h1>Glædelig Josefineste Jul</h1>
      <Calendar>
        {calendarScheme.map((item) => {
          return (
            <CalendarHatch
              key={item.day}
              callback={handleModal}
              message={item.message}
              link={item.link}
              day={item.day}
              icon={item.icon}
              isOpen={
                openedHatches.findIndex((element) => {
                  return element == item.day;
                }) !== -1
              }
              isAvailable={checkDate(item.day)}
            />
          );
        })}
      </Calendar>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <Message link={content.link} content={content.message} title={content.title} />
        <RandomChristmasFact />
        <RandomChristmasJoke />
      </Modal>
    </>
  );
};
