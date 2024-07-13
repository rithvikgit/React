import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {
    const{resData} = props;


    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla,
      } = resData?.info;

    return(
        <div className="m-4 p-4 w-[270px] bg-slate-50 rounded-lg min-h-[550px] hover:bg-slate-300">
            <img alt="res-logo" className="rounded-lg"  src={CDN_URL  + cloudinaryImageId} />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4 className="my-1">{cuisines.join(', ')}</h4>
            <h4 className="my-1">{avgRating} stars</h4>
            <h4 className="my-1">{costForTwo}</h4>
            <h4 className="my-1">{sla?.deliveryTime} minutes</h4>
        </div>
    );
};

// Higher Order Component

// import - RestaurantCard => ResataurantCardPromoted

export const withPromtedLabel = (RestaurantCard) => {
    return(props)=>{
        return(
            <div>
                <label className="absolue bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard; 