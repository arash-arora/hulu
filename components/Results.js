import requests from "../utils/requests";
import Thumbnail from "./Thumbnail";

function Results({ data }) {
  console.log(data.results);
  return (
    <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
      {data.results.map((data) => {
        return <Thumbnail key={data.id} result={data} />;
      })}
    </div>
  );
}

export default Results;
