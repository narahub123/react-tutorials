export default function TabButton({ children, isSelected, ...props }) {
  console.log("tab component executing");
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
