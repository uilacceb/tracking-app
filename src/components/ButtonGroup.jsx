//put this outside because we don't need this array to recreated when the page rerenders every time
const buttons = [
  "Mark all as complete",
  "Mark all as incomplete",
  "Reset to initial",
  "Remove all items",
];

const ButtonGroup = () => {
  return (
    <section className="button-group">
      {buttons.map((text, index) => {
        return (
          <Button key={index} className="btn btn--secondary" label={text} />
        );
      })}
    </section>
  );
};

export const Button = ({ label, className }) => {
  return <button className={className}>{label}</button>;
};

export default ButtonGroup;
