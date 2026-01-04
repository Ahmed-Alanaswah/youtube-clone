import Button from "./Button";

const infoList = [
  "All",
  "Music",
  "Songs",
  "Favorites",
  "Movies",
  "Recommended",
  "All",
  "Music",
  "Songs",
  "Favorites",
  "Movies",
  "Recommended",
];
const ButtonList = () => {
  return (
    <div className="flex gap-3">
      {infoList.map((info) => (
        <Button info={info} />
      ))}
    </div>
  );
};

export default ButtonList;
