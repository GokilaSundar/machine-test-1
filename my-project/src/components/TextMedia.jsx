import InputField from "../common/InputField";
import TextArea from "../common/TextArea";
import DropDown from "../common/DropDown";
import Button from "../common/Button";
import { Link } from "react-router-dom";
// const people = [
//   {name:'Select a label that best suits your ad'},
// { name: 'Wade Cooper' },
// { name: 'Arlene Mccoy' },
// { name: 'Devon Webb' },

// ]
const TextMedia = () => {
  return (
    <div className="border-[1.5px] bg-white rounded-md mx-5 my-10 p-5 grid gap-20">
      <div className=" grid gap-y-4">
        <div className="font-medium text-base text-slate-700 tracking-wide">
          Create Text & Media
        </div>

        <div className="grid grid-cols-2 gap-x-6">
          <div className="grid gap-y-4">
            <InputField
            className='w-full'
              type="text"
              placeholder="Add a heading that would make user intrested"
              label="Heading 01"
            />
            <InputField
            className='w-full'
              type="text"
              placeholder="Add aheading that would make user intrested"
              label="Heading 02"
            />
          </div>
          <div className="grid gap-y-4">
            <TextArea
              label="Description 01"
              placeholder="Add primary text to help user understand more about your products, services or offers"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <InputField
          className='w-full'
            type="text"
            placeholder="Add the URL of the image you want to use for the ad"
            label="Landscape Marketing Image (1.9:1)"
          />
          <InputField
          className='w-full'
            type="text"
            placeholder="Add the URL of the image you want to use for the ad"
            label="Portrait Marketing Image (4:5)"
          />
          <InputField
          className='w-full'
            type="text"
            placeholder="Add the URL of the image you want to use for the ad"
            label="Square Marketing Image (1:1)"
          />
        </div>
        <InputField
        className='w-full'
          type="text"
          placeholder="Add the URL of the landing page you want to redirect users to"
          label="Video URL"
        />

        <div className="grid grid-cols-2 gap-6">
          <InputField
          className='w-full'
            type="text"
            placeholder="Add your business name"
            label="Business Name"
          />
          <DropDown
          // data={people}
            label="Button Label"
            placeholder="Select the label that best suits your add"
          />
        </div>
        <InputField
        className='w-full'
          type="text"
          placeholder="Add the URL of the landing page you want to redirect users to"
          label="Website URL"
        />
      </div>
      <div className="flex justify-end gap-5">
        <Link to="/CreateAds">
          <Button text="Back" className="border-[1.5px] text-black" />
        </Link>
        <Link to="">
          <Button
            text="Submit"
            className=" border-blue-500  bg-blue-500 text-white"
          />
        </Link>
      </div>
    </div>
  );
};

export default TextMedia;
