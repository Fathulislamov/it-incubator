import LinearProgress from "@mui/material/LinearProgress";
import {
  useAddCardMutation,
  useGetCardsQuery,
} from "features/cards/service/cards.api";
// import { useLazyGetCardsQuery } from "features/cards/service/cards.api";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const Cards = () => {
  let { packId } = useParams<{ packId: string }>();
  const [skip, setSkip] = useState(true);

  const { data, isLoading, isError, error } = useGetCardsQuery(packId ?? "", {
    skip,
  });

  const [addCard, { isLoading: isAddLoading }] = useAddCardMutation();

  // const [getCards, { data, isLoading, isError, error }] =
  //   useLazyGetCardsQuery();

  if (isLoading || isAddLoading) {
    return <LinearProgress color={"secondary"} />;
  }

  if (isError) {
    const err = error as any;
    return <h1>{err.data.error}</h1>;
  }
  const fetchCardHandler = () => {
    // getCards(packId ?? "");
    setSkip(false);
  };
  const addCardHandler = () => {
    addCard({ cardsPack_id: packId ?? "" });
  };

  return (
    <div>
      <h1>Cards</h1>
      <button onClick={fetchCardHandler}>fetch card</button>
      <button onClick={addCardHandler}>add card</button>
      <div>
        {data?.cards.map((c) => {
          return <div>{c.question}</div>;
        })}
      </div>
    </div>
  );
};
