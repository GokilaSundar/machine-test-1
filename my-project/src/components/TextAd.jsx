import InputField from "../common/inputField";
import TextArea from "../common/TextArea";
import DropDown from "../common/DropDown";
import Button from "../common/Button";
import { Link } from "react-router-dom";



const TextAd = () => {
  // const people = [
  //   {name:'Select a label that best suits your ad'},
  // { name: 'Wade Cooper' },
  // { name: 'Arlene Mccoy' },
  // { name: 'Devon Webb' },
  
  // ]
  return (
    <div className="border-[1.5px] mx-5 my-10 bg-white rounded-md p-5 grid gap-20">
      <div className=" grid gap-y-4">
        <div className="font-medium text-base text-slate-700 tracking-wide">
          Create Text & Media
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="grid gap-y-4">
            <InputField
              type="text"
              placeholder="Add a heading that would make user intrested"
              label="Heading 01"
            />
            <InputField
              type="text"
              placeholder="Add aheading that would make user intrested"
              label="Heading 02"
            />
            <InputField
              type="text"
              placeholder="Add your business name"
              label="Business Name"
            />
          </div>
          <div className="grid gap-y-4">
            <TextArea
              label="Description 01"
              placeholder="Add primary text to help user understand more about your products, services or offers"
            />
            <DropDown
            // data={people}
              label="Button Label"
              placeholder="Select the label that best suits your add"
            />
          </div>
        </div>
        <InputField
          type="text"
          placeholder="Add the URL of the landing page you want to redirect users to"
          label="Website URL"
        />
      </div>
      <div className="flex justify-end gap-5">
        <Link to="/CreateAds">
          <Button text="Back" className="border-[1.5px] text-black " />
        </Link>
        <Link to="">
          <Button
            text="Submit"
            className=" border-blue-500 bg-blue-500 text-white"
          />
        </Link>
      </div>
    </div>
  );
};

export default TextAd;
