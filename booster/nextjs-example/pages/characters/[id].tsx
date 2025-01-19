import { useCharacter } from "@/assets/hooks/useCharacter";
import { CharacterCard } from "@/components/CharacterCard/CharacterCard";
import { HeadMeta } from "@/components/HeadMeta/HeadMeta";
import { getLayout } from "@/components/Layout/Layout";


function Character() {

	const character = useCharacter();

	return (
		<>
			<HeadMeta title="Characters" />
			{character && < CharacterCard character={character} />}
		</>
	);
}
Character.getLayout = getLayout;
export default Character;
