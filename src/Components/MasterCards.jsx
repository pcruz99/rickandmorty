import { Card } from "./Card";

export const MasterCards = ({ info, setStateModal }) => {
    console.log(info)
  return (
    <>
      {info?.map((inf) => (
        <Card key={inf.id} obj={inf} setStateModal={setStateModal} />
      ))}
    </>
  );
};
