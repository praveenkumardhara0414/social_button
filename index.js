const Button = (props) => {
  //  Write your code here.
  const { className, text } = props;
  return <button className={className}>{text}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <div>
      <h1 class="heading">Social Buttons</h1>
      <Button className="button-1" text="Like" />
      <Button className="button-2" text="Comment" />
      <Button className="button-3" text="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
