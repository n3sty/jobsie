"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function AppCard({ name, summary, repo, img }: any) {
  const router = useRouter();
  return (
    <div className="grid-item">
      <figure>
        <Image
          src={`/images/${img}`}
          alt={`${name} project on vercel`}
          width={800}
          height={400}
          className="border-[4px] border-transparent rounded-t-box"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <button
            onClick={() => router.push(`/projects/${name}`)}
            className="btn btn-ghost hover:bg-white hover:shadow-lg btn-sm text-xl"
          >
            {name}
          </button>
        </h2>
        <p className="card-description font-mono p-1">{summary}</p>
        <div className="card-actions mt-2">
          <a
            href={`https://github.com/n3sty/${repo}`}
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-ghost btn-sm btn-circle"
          >
            <Image
              src="/logos/github-mark-white.png"
              alt="GitHub Logo"
              width={150}
              height={150}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AppCard;
