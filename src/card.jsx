import "./index.css";

export default function Card() {
  return (
    <>
      <div className="flex flex-row bg-emerald-500 rounded-2xl p-6">
        <img src="/avatar.jpg" className="h-72 w-72 rounded-full" />
        <div className="flex flex-col items-centered justify-start p-10 m-4">
            <h1 className="text-6xl">Audrey Holbrook</h1>
            <p className="text-xl">3rd year undergrad Computer Science student at UGA</p>
        </div>
      </div>
    </>
  );
}
