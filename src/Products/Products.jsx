import "./products.scss";

export default function Products({ result }) {
  return (
    <>
      <section className="card-container">{result}</section>
    </>
  );
}
