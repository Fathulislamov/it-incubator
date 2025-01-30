import { Pagination } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { nanoid } from "@reduxjs/toolkit";
import {
  useAddCardMutation,
  useGetCardsQuery,
} from "features/cards/service/cards.api";
import { ArgCreateCardType } from "features/cards/service/types";
// import { useLazyGetCardsQuery } from "features/cards/service/cards.api";
import { ChangeEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import s from "./styles.module.css";

export const Cards = () => {
  let { packId } = useParams<{ packId: string }>();

  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error, isFetching } = useGetCardsQuery(
    packId ?? ""
  );

  const [addCard, { isLoading: isAddLoading }] = useAddCardMutation();

  // const [getCards, { data, isLoading, isError, error }] =
  //   useLazyGetCardsQuery();

  if (isLoading || isAddLoading || isFetching) {
    return <LinearProgress color={"secondary"} />;
  }

  if (isError) {
    const err = error as any;
    return <h1>{err.data.error}</h1>;
  }
  // const fetchCardHandler = () => {
  //   // getCards(packId ?? "");
  //   setSkip(false);
  // };
  const addCardHandler = () => {
    if (packId) {
      const newCard: ArgCreateCardType = {
        cardsPack_id: packId,
        question: "🐱 question " + nanoid(),
        answer: "🐙 answer " + nanoid(),
      };
      addCard(newCard)
        .unwrap()
        .then((res) => {
          const cardQuestion = res.newCard.question;
          toast.success(`Карточка ${cardQuestion} успешно добавлена`);
        })
        .catch((err) => {
          toast.error(err.data.error);
        });
    }
    // addCard({ cardsPack_id: packId ?? "" });
  };

  const changePageHandler = (event: ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  return (
    <div>
      <h1>Cards</h1>
      <button onClick={addCardHandler}>add card</button>
      <div>
        {data?.cards.map((card) => {
          return (
            <div className={s.container} key={card._id}>
              <div>
                <b>Question: </b>
                <p>{card.question}</p>{" "}
              </div>
              <div>
                <b>Answer: </b>
                <p>{card.answer}</p>{" "}
              </div>
            </div>
          );
        })}
      </div>
      <Pagination count={data?.cardsTotalCount} onChange={changePageHandler} />
    </div>
  );
};
