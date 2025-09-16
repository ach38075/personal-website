import "./index.css";

export default function Card() {
  return (
    <>
      <div className="flex flex-row bg-rose-200 rounded-2xl p-6">
        <img src="/headshot.jpg" className="h-72 w-72 rounded-full ring-6 ring-rose-400" />
        <div className="flex flex-col items-centered justify-start p-10 m-4" style={{ color: "#fb7185" }}>
            <h1 className="text-6xl">Audrey Holbrook</h1>
            <p className="text-xl">4th year undergrad Computer Science student at the University of Georgia</p>
            <p className="text-l italic">with a concentration in Computer Systems</p>
            <a href= "contact.html" className="text-xl pt-3 underline hover:text-rose-600">Contact me! </a> 
            <a href= "resume.html" className="text-xl underline hover:text-rose-600">Check out my resume! </a> 
        </div>
      </div>
    </>
  );
}
