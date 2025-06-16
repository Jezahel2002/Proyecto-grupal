const Ingredient = ({ name }) => {
  return (
    <div
      justify="center"
      align="center"
      style={{
        border: "1px solid black",
        borderRadius: "8px",
        padding: "5px",
      }}
    >
      <h1 style={{ margin: 0 }}>{name}</h1>
      </div>
  );
};

export { Ingredient };