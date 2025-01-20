import { useQuery } from "@tanstack/react-query";
import { API } from "../../assets/api/api";
import {
  EpisodeType,
  LocationType,
  ResponseType,
} from "../../assets/api/rick-and-morty-api";
import { Header } from "../../components/Header/Header";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";

// export const getServerSideProps = async () => {};

const getLocations = () => {
  return fetch("https://rickandmortyapi.com/api/location", {
    method: "GET",
  }).then((res) => res.json());
};

const Locations = () => {
  const { data: locations } = useQuery<ResponseType<LocationType>>(
    ["locations"],
    getLocations
  );

  if (!locations) return null;

  const locationList = locations.results.map((location) => (
    <div key={location.id}>{location.name}</div>
  ));

  return (
    <PageWrapper>
      <Header />
      {locationList}
    </PageWrapper>
  );
};

export default Locations;
