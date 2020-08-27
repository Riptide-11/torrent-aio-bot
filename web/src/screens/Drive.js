import React from "react";
import { useParams, Link } from "react-router-dom";
import DriveItem from "../components/DriveItem";
import useSWR from "swr";

export default function Drive() {
  const { folderId } = useParams();
  const { data, error } = useSWR(`/api/v1/drive/folder?id=${folderId || ""}`, url => fetch(url).then(res => res.json()));

  return (
    <>
      <h1 className="d-flex align-items-center">
        {folderId && (
          <Link to="/drive" style={{ marginRight: 8, cursor: "pointer", color: "var(--color)", display: "inline-block" }}>
            <i className="d-flex align-items-center">
              <ion-icon name="home-outline" />
            </i>
          </Link>
        )}
        Drive Index
      </h1>
<b>For streaming files register on our <a href="https://www.bingersbrowse.ml">Site</a></b><hr>
<i>And ping any admin to get access or join <a href="https://tx.me/bingersbrowse">telegram group</a></i>
  
      {!data && !error && <div className="loading-div" />}
      {!!error && <div style={{ color: "red" }}>{`${error}`}</div>}
      {data && data.map(item => <DriveItem key={item.id} item={item} />)}
    </>
  );
}
