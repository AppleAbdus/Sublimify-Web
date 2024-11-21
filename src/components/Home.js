import React from "react";
import Image from "next/image";

export const Home = () => {
  return (
    <div className="flex flex-col w-full p-6 space-y-6">
      {/* Banner */}
      <div className="flex">
        <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-6 text-white">
          <h2 className="text-3xl font-bold">
            mind<span className="font-medium">the</span> musics
          </h2>
          <div className="absolute bottom-0 right-4">
            <img
              src="https://source.unsplash.com/100x100/?music,dancing"
              alt="Music"
              className="w-20 h-20"
            />
          </div>
        </div>

        {/* User Widget */}
        <div className="flex  w-[240px] h-[140px] bg-white rounded-lg shadow">
          <div className="flex ">
            <Image
              src="/profile.webp"
              alt="User"
              className="rounded-full w-12 h-12"
              width={50}
              height={50}
            />
          </div>

          <div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Calvin Russell</h3>
              <p className="text-sm text-gray-500">Premium</p>
            </div>
            <div className="flex space-x-2 relative left-[14px]">
              <p className="text-sm text-gray-500">
                <span className="font-bold">120</span> Tracks
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-bold">1.5K</span> Followers
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Popular Section */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Popular</h3>
        <div className="flex space-x-4 overflow-x-auto scrollbar-hidden">
          {/* Cards */}
          <div className="w-32 bg-yellow-100 rounded-lg p-4 shadow text-center">
            <p className="font-bold">KEXP 90.3 FM</p>
            <p className="text-sm text-gray-500">Seattle</p>
            <span className="text-sm bg-yellow-500 text-white px-2 py-1 rounded-full mt-2 inline-block">
              4.7
            </span>
          </div>
          <div className="w-32 bg-teal-100 rounded-lg p-4 shadow text-center">
            <p className="font-bold">KCRW 89.9 FM</p>
            <p className="text-sm text-gray-500">Santa Monica</p>
            <span className="text-sm bg-blue-500 text-white px-2 py-1 rounded-full mt-2 inline-block">
              3.2
            </span>
          </div>
          <div className="w-32 bg-blue-100 rounded-lg p-4 shadow text-center">
            <p className="font-bold">WWPR 105.1 FM</p>
            <p className="text-sm text-gray-500">New York</p>
            <span className="text-sm bg-blue-500 text-white px-2 py-1 rounded-full mt-2 inline-block">
              4.8
            </span>
          </div>
          {/* Add more cards as needed */}
        </div>
      </div>

      {/* Local Radio */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Local Radio</h3>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://source.unsplash.com/40x40/?album"
                alt="Album"
                className="rounded-lg"
              />
              <div className="ml-4">
                <h4 className="font-semibold">Aye Dil Hai Mushkil</h4>
                <p className="text-sm text-gray-500">ADHM</p>
              </div>
            </div>
            <p className="text-sm text-gray-500">9:52</p>
          </div>
          {/* Repeat the local radio entries as needed */}
        </div>
      </div>

      {/* Recommended for You */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Recommended for You</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <p className="font-semibold">Music</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <p className="font-semibold">Sports</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <p className="font-semibold">News</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <p className="font-semibold">Movies</p>
          </div>
          {/* Add more categories */}
        </div>
      </div>
    </div>
  );
};
