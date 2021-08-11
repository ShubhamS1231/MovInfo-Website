import React from "react";

function Moviecard(props) {
  const {
    image,
    name,
    status,
    language,
    rating,
    genres,
    premiered,
    officialSite,
    url,
  } = props.data;
  let statuses = "";
  if (status === "Running")
    statuses = <span className="text-success">{status}</span>;
  else if (status === "Ended")
    statuses = <span className="text-danger">{status}</span>;
  else statuses = <span className="text-primary">{status}</span>;

  return (
    <div className="container mt-5 p-4 d-flex justify-content-center align-items-center alert alert-primary">
      <img
        src={image && image.original}
        style={{ height: "300px" }}
        alt="{image}"
      />
      <div style={{ marginLeft: "3rem" }} className="container text-dark">
        <h1 style={{ fontSize: "1.5rem" }}>{name}</h1>
        <h1 style={{ fontSize: "1.5rem", marginTop: "1rem" }}>
          Language- {language}
        </h1>
        <h1 style={{ fontSize: "1.5rem", marginTop: "1rem" }}>
          Rating- {rating.average}
        </h1>
        <h3 style={{ fontSize: "1rem", marginTop: "1rem" }}>
          {genres && genres.map((g) => g + ", ")}
        </h3>
        <h3 style={{ fontSize: "1rem", marginTop: "1rem" }}>
          Premiered on : {premiered || "not available"}
        </h3>
        <h3 style={{ fontSize: "1rem", marginTop: "1rem" }}>
          Status : {statuses}
        </h3>

        <a
          href={officialSite || url}
          rel="noreferrer"
          target="_blank"
          className="btn btn-primary"
        >
          Official Website
        </a>
      </div>
    </div>
  );
}

export default Moviecard;
