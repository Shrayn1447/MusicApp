"use client";
import Link from "next/link";
import { useDispatch } from "react-redux";
export default function PlayList({item}) {
  const id = item.uri.substring(item.uri.lastIndexOf(":") + 1)
  const dispatch = useDispatch();
  return (
    <Link
      href={`/playlist/${id}`}
      className="max-w-[200px] transition-all cursor-pointer hover:-translate-y-1 hover:tracking-wider hover:text-green-500"
      key={item.name}
    >
      <div>
        <img width={200} height={200} className=" rounded-lg w-full" src={item.images[0].url} alt="" />
      </div>
      <p className="font-bold text-lg p-2">{item.name}</p>
    </Link>
  );
}
