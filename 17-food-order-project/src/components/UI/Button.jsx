// reusable component
export default function Button({ children, textOnly, className, ...props }) {
  // text only button or button
  let cssClasses = textOnly ? "text-button" : "button";
  // button styling adjust from outside the component adding css classes
  cssClasses += " " + className;

  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
}
