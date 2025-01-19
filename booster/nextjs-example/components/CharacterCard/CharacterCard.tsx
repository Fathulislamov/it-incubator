import Image from "next/image";
import styles from "./CharacterCard.module.scss";
import { CharacterType } from "@/assets/hooks/useCharacters";

type PropsType = {
	character: CharacterType
}

export const CharacterCard = (props: PropsType) => {
	const { character } = props;
	return (
		<div className={styles.card}>
			<div>{character.name}</div>
			<Image
				src={character.image}
				alt={`Picture of ${character.name}`}
				width={300}
				height={300}
			/>

		</div>
	)
};
