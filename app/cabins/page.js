export const metadata = {
  title: "Cabins",
};

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return (
    <div>
      <h1>Cabins</h1>
    </div>
  );
}
