export default function Panel({ onShow, children, title, isActive }) {
  let render = <button onClick={onShow}>show</button>;
  if (isActive) {
    render = <p>{children}</p>;
  }

  return (
    <div>
      <h3>{title}</h3>

      {isActive ? <p>{children}</p> : <button onClick={onShow}>show</button>}
    </div>
  );
}
