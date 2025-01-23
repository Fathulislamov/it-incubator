import { GetStaticPaths, GetStaticProps } from "next";
import { API } from "../../assets/api/api";
import {
  CharacterType,
  ResponseType,
} from "../../assets/api/rick-and-morty-api";
import { CharacterCard } from "../../components/Card/CharacterCard/CharacterCard";
import { Header } from "../../components/Header/Header";
import { getLayout } from "../../components/Layout/BaseLayout/BaseLayout";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { useRouter } from "next/router";
import styled from "styled-components";

export const getStaticPaths: GetStaticPaths = async () => {
  const { results } = await API.rickAndMorty.getCharacters();
  const paths = results.map((character) => ({
    params: { id: String(character.id) },
  }));
  return {
    paths,
    // fallback: "blocking",
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params || {};

  const character = await API.rickAndMorty.getCharacter(id as string);

  if (!character) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      character,
    },
  };
};

type PropsType = {
  character: CharacterType;
};

const Character = (props: PropsType) => {
  const { character } = props;

  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  const characterId = router.query.id;

  const goToCharacters = () => router.push("/characters");

  return (
    <PageWrapper>
      <Container>
        <IdText>ID: {characterId}</IdText>
        <CharacterCard key={character.id} character={character} />;
        <Button onClick={goToCharacters}>GO TO CHARACTERS</Button>
      </Container>
    </PageWrapper>
  );
};

Character.getLayout = getLayout;
export default Character;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const IdText = styled.div`
  font-size: 40px;
`;

const Button = styled.button`
  width: 330px;
  height: 60px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid rgba(131, 134, 135, 0);
  background-color: #fa52d3;
  color: #fff;
  font-size: 20px;
  &:hover {
    background-color: #ff7aff;
    color: #fff;
  }
`;
