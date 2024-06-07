import Button from "../../Buttons/Button";
import AuroraImage from "../../../assets/Images/Aurora.png";
import MarkIcon from "../../../assets/Icons/MarkIcon";
import ShareIcon from "../../../assets/Icons/ShareIcon";

const CommentCard = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-2xl">Iceland’s Highlights</h1>
        <div className="space-x-2.5 flex items-center">
          <Button startIcon={<MarkIcon />} label="Add to wishlist" />
          <Button startIcon={<ShareIcon />} label="Share" />
        </div>
      </div>

      <div className="flex flex-col gap-y-4">
        <div className="flex items-center space-x-3">
          <img
            className="w-8 h-8 rounded-full"
            src={AuroraImage}
            alt="avatar"
          />

          <div>
            <h3 className="font-semibold">Curated by Sandra</h3>
            <span className="text-sm text-gray-400">Fyno expert</span>
          </div>
        </div>

        <span>
          Welcome to Iceland, a land of breathtaking landscapes and unspoiled
          natural beauty. From its majestic waterfalls and geothermal wonders to
          the vibrant culture and rich history, Iceland promises an
          unforgettable adventure for every traveler.
        </span>
      </div>
    </div>
  );
};

export default CommentCard;
