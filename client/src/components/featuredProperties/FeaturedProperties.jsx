import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const {data , loading, error} = useFetch('/hotels?featured=true&limit=4')
  console.log(data?.result.map((res) => 
    res.photos[0]
  ))
  return (
    <div className="fp">
      {loading ? ("data is loading") : (
        data.result.map((item , index) =>(
          <div className="fpItem" key={item._id}>
          <img
            src={item.photos[0]}
            alt=""
            className="fpImg"
          />
          <span className="fpName">{item.name}</span>
          <span className="fpCity">{item.city}</span>
          {/* <span className="fpPrice">Starting from ${item.cheapestPrice}</span> */}
          {item.rating && (<div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>)}
        </div>
        ))
      )}
     
     
    </div>
  );
};

export default FeaturedProperties;
