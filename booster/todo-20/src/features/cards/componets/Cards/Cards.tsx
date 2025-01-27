import LinearProgress from "@mui/material/LinearProgress";
import { useGetCardsQuery } from "features/cards/service/cards.api";
import { useParams } from "react-router-dom";

export const Cards = () => {
  let { packId } = useParams<{ packId: string }>();

  const { data, isLoading, isError, error } = useGetCardsQuery(packId ?? "");

  if (isLoading) {
    return <LinearProgress color={"secondary"} />;
  }

  if (isError) {
    const err = error as any;
    return <h1>{err.data.error}</h1>;
  }

  return (
    <div>
      <h1>Cards</h1>
      <div>
        {data?.cards.map((c) => {
          return <div>{c.question}</div>;
        })}
      </div>
    </div>
  );
};
