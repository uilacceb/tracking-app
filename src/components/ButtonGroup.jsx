const ButtonGroup = () => {
  return (
    <section className="button-group">
      <Button className="btn btn--secondary" label="Mark all as complete" />
      <Button className="btn btn--secondary" label="Mark all as incomplete" />
      <Button className="btn btn--secondary" label="Reset to initial" />
      <Button className="btn btn--secondary" label="Remove all items" />
    </section>
  );
};

export const Button = ({ label, className }) => {
  return <button className={className}>{label}</button>;
};

export default ButtonGroup;
