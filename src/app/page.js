import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen w-screen">
      <div className="flex-col h-screen bg-slate-500 p-">
        <div id="search">
          <input
            type="text"
            className="px- py-2 rounded-xl border bg-none border-slate-500"
          />
        </div>
      </div>
    </div>
  );
}
