import Card from "./Card";

const users = [
  { id: 1, name: "Daniel" },
  { id: 2, name: "Jorge" },
  { id: 3, name: "Facundo" },
  { id: 4, name: "David" },
];
const Cards = () => {
  return (
    <div>
      {users.map((user) => {
        return <Card id={user.id} name={user.name} />;
      })}
    </div>
  );
};

export default Cards;
