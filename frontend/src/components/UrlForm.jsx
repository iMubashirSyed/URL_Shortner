import React, { useState } from "react";
import axios from "axios";
import { createShortUrl } from "../api/ShortUrl.api";

const UrlForm = () => {
  const [Url, setUrl] = useState("");
  const [ShortUrl, setShortUrl] = useState("");
  const [Copied, setCopied] = useState(false);
  console.log(Url);

  const handleCopy = () => {
    navigator.clipboard.writeText(ShortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    let shortUrl = await createShortUrl(Url);
    setShortUrl(shortUrl);
  };

  return (
    <>
      <form onSubmit={submitHandler} className="flex flex-col gap-4">
        <input
          onChange={(e) => setUrl(e.target.value)}
          value={Url}
          type="url"
          placeholder="https://www.example.com"
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 cursor-pointer text-white rounded-lg py-2 hover:bg-blue-600 transition">
          Shorten URL
        </button>
      </form>

      {ShortUrl && (
        <div className=" mt-7">
          <h1 className="text-2xl font-bold text-center mb-4">Shortend Url</h1>
          <input
            className="border border-gray-300 rounded w-78"
            type="url"
            readOnly
            value={ShortUrl}
          />
          <button
            className={`cursor-pointer border rounded px-3 transition inline text-md  ${
              Copied
                ? "bg-green-500 text-white "
                : "border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
            onClick={handleCopy}
          >
            {Copied ? "Copy" : "Copy"}
          </button>
        </div>
      )}
    </>
  );
};

export default UrlForm;
