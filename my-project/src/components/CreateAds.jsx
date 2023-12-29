import CreateAdsCheckbox from "../common/CreateAdsCheckbox";
import MovieAd from "../assets/movieAd.png";
import TextAd from "../assets/textAd.png";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
const CreateAds = () => {
  const [text, setText] = useState(false);
  const [media, setMedia] = useState(false);

  const handleText = () => {
    setText(!text);
  };

  const handleMedia = () => {
    setMedia(!media);
  };

  return (
    <div className="py-5">
      <div className="flex justify-center gap-10 px-32 py-10">
        <CreateAdsCheckbox
          checked={text}
          onChange={handleText}
          img={TextAd}
          text="Text Ad"
          alt="text"
          id="text"
          className="w-[360px] "
        />
        <CreateAdsCheckbox
          checked={media}
          onChange={handleMedia}
          img={MovieAd}
          text="Media Ad"
          alt="media"
          id="media"
          className="w-full "
        />
      </div>
      <div className="flex justify-end pr-5">
        <Link
          to={
            text && media
              ? "/TextMedia"
              : text
              ? "/TextAd"
              : media
              ? "/TextMedia"
              : ""
          }
        >
          <Button
            text="Next"
            className=" border-blue-500 bg-blue-500 text-white "
          />
        </Link>
      </div>
    </div>
  );
};

export default CreateAds;
