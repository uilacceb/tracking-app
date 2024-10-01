import { buttons } from "../lib/constants";

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
