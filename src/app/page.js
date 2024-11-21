"use client";
import { useState } from "react";
import { Music, Search } from "lucide-react";
import { Home } from "@/components/Home";

const SearchBar = () => (
  <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
    <input
      type="text"
      placeholder="Search"
      className="flex-grow outline-none text-sm text-gray-500"
    />
    <i className="fas fa-search text-gray-500"></i>
    <Search size={20} />
  </div>
);

const MusicList = ({ items, focusedItem, handleFocus }) => (
  <ul className="space-y-4">
    {items.map((item) => (
      <li
        key={item.label}
        className={`flex items-center space-x-3 py-2 px-2 rounded-lg cursor-pointer text-sm font-bold ${
          focusedItem === item.label
            ? "bg-purple-100 text-purple-600"
            : "text-gray-700"
        }`}
        onClick={() => handleFocus(item.label)}
      >
        <i
          className={`${item.icon} ${
            focusedItem === item.label ? "text-purple-600" : ""
          }`}
        >
          <item.Con2 size={20} />
        </i>
        <span>{item.label}</span>
      </li>
    ))}
  </ul>
);

const Playlist = ({ items, focusedItem, handleFocus }) => (
  <ul className="space-y-4">
    {items.map((item) => (
      <li
        key={item.label}
        className={`flex items-center space-x-3 py-2 px-2 rounded-lg cursor-pointer text-sm font-bold ${
          focusedItem === item.label
            ? "bg-purple-100 text-purple-600"
            : "text-gray-700"
        }`}
        onClick={() => handleFocus(item.label)}
      >
        <span>{item.label}</span>
      </li>
    ))}
  </ul>
);

const Button = ({ children, className, ...props }) => (
  <button
    className={`px-6 py-3 rounded-full text-sm font-semibold shadow-md ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default function Page() {
  const [focusedItem, setFocusedItem] = useState(null);

  const handleFocus = (item) => {
    setFocusedItem(item);
  };

  const musicItems = [
    { icon: "fas fa-music", label: "Subliminals", Con2: Music },
    { icon: "fas fa-compact-disc", label: "Playlist", Con2: Music },
    { icon: "fas fa-microphone", label: "Creators", Con2: Music },
    { icon: "fas fa-heart", label: "Favourite", Con2: Music },
  ];

  const playlistItems = [
    { icon: "fas fa-music", label: "Kottie Playlist" },
    { icon: "fas fa-compactsc", label: "I Want It I Got It" },
    { icon: "fas fa-compact-disc", label: "Aisf" },
    { icon: "fas fa-compact-3", label: "I Wtjij sfk" },
  ];

  return (
    <div className="flex">
      <div className="w-64 min-h-screen px-4 py-6 bg-white font-poppins">
        <SearchBar />
        <div className="mt-8">
          <p className="text-gray-400 text-sm mb-4">Music</p>
          <MusicList
            items={musicItems}
            focusedItem={focusedItem}
            handleFocus={handleFocus}
          />
        </div>
        <div className="mt-8">
          <p className="text-gray-400 text-sm mb-4">Your Playlists</p>
          <Playlist
            items={playlistItems}
            focusedItem={focusedItem}
            handleFocus={handleFocus}
          />
          <Button className="flex items-center gap-2 px-4 py-2 border rounded-xl border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-100 mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
            Create New
          </Button>
          <div className="my-6"></div>
          <Button className="bg-pink-500 text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 relative left-7">
            Download App
          </Button>
        </div>
      </div>
      <Home />
    </div>
  );
}
