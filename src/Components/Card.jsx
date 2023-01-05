export const Card = ({ obj, setStateModal }) => {
  /* const handleStateModel = () => {
    setStateModal(true)
  }; */

  return (
    <div>
      <img src={obj.image} alt="image" />
      <button onClick={setStateModal(true)}>{obj.name}</button>
      <p>
        {obj.status} - {obj.species}
      </p>
      <h3>Ultimo Lugar Visto:</h3>
      <a href={obj.location.url}>{obj.location.name}</a>
      <h3>Visto Primera vez en:</h3>
      <a href={obj.episode[0]}>nombre</a>
    </div>
  );
};
