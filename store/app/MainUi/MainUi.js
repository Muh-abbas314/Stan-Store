import logo from "../../public/p-1.jpeg";
import logo1 from "../../public/p-2.jpeg";
import logo2 from "../../public/p-3.jpeg";
import logo3 from "../../public/p-4.jpeg";
// import ReactImageMagnify from "react-image-magnify";
import "./Main.css";
import Image from "next/image";
import { useState, useRef } from "react";

const images = [logo, logo1, logo2, logo3];
// import { useState } from "react";
export default function MainUI() {
const [mainImage, setMainImage]=useState(images[0])
const [Desc_State,setDesc]=useState(false)
const [Feature_State,setFeat]=useState(false)
const [Info_State,setInfo]=useState(false)
const handler=()=>{
    setDesc(prev=>!prev)
}
const handlerFeature=()=>{
    setFeat(prev=>!prev)
}
const Info_Handler=()=>{
    setInfo(prev=>!prev)
}
  return (
    <>
      <div className="p-[2rem] ">
        <div className="grid grid-cols-3 place-items-stretch relative">
         
          <div className="  relative   col-span-3 flex justify-center items-center md:col-span-1  w-[100%]  ">
            <div className=" sticky  top-0 bottom-4">
            <Image src={mainImage} objectFit="cover" />
            </div>
          </div>

          <div className=" p-3 w-[100%]  col-span-5 md:col-span-2 ">
            <div>
              <h1 className="my-2 font-bold text-left md:text-xl text-md">
                Brand STANLEY Material Stainless Steel | Capacity 40 Fluid
                Ounces | Special Feature Durability,Reusable
              </h1>

              <div className="flex">
               
                {images.map((item,index)=>{
                    return(<div key={index} onClick={()=>setMainImage(images[index])} className="mx-2 w-[6rem] h-[6rem]  border relative">
                    <Image  className="" sizes="100px" src={item} objectFit="cover" fill={true}  />
                    </div>)
                })}
                {/* <div className="flex object-contain">{images.map(item=>{
                    return (<div className="w-[8em] h-[7rem] object-cover border-2">
                        <Image style={{objectFit:"cover"}} src={item} className="object-contain " alt="logo.jpeg" />
                    </div>)
                })}</div> */}
              </div>
              <hr className="my-4"/>
              {/* Description */}
              <div >
                <div>
               <div className="flex items-center"> <h1 className="italic font-bold text-md md:text-xl text-justify my-1">DESCRIPTION</h1> <button onClick={handler} className="mx-2 border border-black px-2">{Desc_State?"-":"+"}</button></div>
                {Desc_State?(<p className=" text-[14px] ">Constructed of recycled stainless steel for sustainable sipping, our 40 oz Quencher H2.0 offers maximum hydration with fewer refills. Commuting, studio workouts, day trips or your front porch—you’ll want this tumbler by your side. Thanks to Stanley’s vacuum insulation, your water will stay ice-cold, hour after hour. The advanced FlowState™ lid features a rotating cover with three positions: a straw opening designed to resist splashes while holding the reusable straw in place, a drink opening, and a full-cover top. The ergonomic handle includes comfort-grip inserts for easy carrying, and the narrow base fits just about any car cup holder.</p>):""}
                </div>

                <div>
                <hr className="my-4"/>
                    {/* Feature  */}
                <div className="flex items-center"><h1 className="font-bold text-md md:text-xl my-1 italic">FEATURES & DETAILS</h1> <button onClick={handlerFeature} className="mx-2 border border-black px-2">{Feature_State?"-":"+"}</button></div>
                {Feature_State?(<><p className="text-[14px]"><span className="font-bold text-md">YOUR DREAM TUMBLER:</span> <br/> Whichever way your day flows, the H2.0 FlowState tumbler keeps you refreshed with fewer refills. Double wall vacuum insulation means drinks stay cold, iced or hot for hours. Choose between our 14oz, 20oz, 30oz,40oz and 64oz options depending on your hydration needs. The narrow base on all sizes (except 64oz) fits just about any car cup holder, keeping it right by your side.</p>


<div>
<h1 className="font-bold my-1 text-[14px]">EARTH-FRIENDLY DURABILITY:</h1>
<p className="text-[14px]">Constructed of 90% recycled BPA free stainless steel for sustainable sipping, the Stanley Quencher H2.0 has the durability to stand up to a lifetime of use. Eliminate the use of single-use plastic bottles and straws with a travel tumbler built with sustainability in mind.</p>
</div>
<div>
<h1 className="font-bold my-1 text-[14px]">DISHWASHER SAFE:</h1>
<p className="text-[14px]">Spend less time hunched over the sink and more time doing the things you love. Cleaning your tumbler and lid couldn't be easier, just pop them into the dishwasher. Unlike plastic bottles that retain stains & smells, this metallic beauty comes out pristine</p>
</div>
<div>
<h1 className="font-bold my-1 text-[14px]">LIFETIME WARRANTY:</h1>
<p className="text-[14px]">Constructed of 90% recycled BPA free stainless steel for sustainable sipping, the Stanley Quencher H2.0 has the durability to stand up to a lifetime of use. Eliminate the use of single-use plastic bottles and straws with a travel tumbler built with sustainability in mind.</p>
</div></>):""}
</div>
<hr className="my-4"/>
              {/* Specs */}
              <div>
              <div className="flex items-center "><h1 className="font-bold text-md md:text-xl    my-2 italic">PRODUCT INFORMATION</h1><button onClick={Info_Handler} className="mx-2 border border-black px-2">{Info_State?"-":"+"}</button></div>
              {Info_State?(<div className="text-[13px]">
               
               <div className="flex ">
                   {/* <h1 className="font-bold "></h1> <br/> */}
                   <p className=""><span className="font-bold">Item Package Dimensions L x W x H: </span>12.76 x 5.94 x 4.25 inches</p>
               </div>
               <div className="flex">
                   {/* <h1 className="font-bold"></h1> */}
                   <p className=""><span className="font-bold">Package Weight: </span>0.67 Kilograms</p>
               </div>
               <div className="flex">
                   <p className=""><span className="font-bold">Item Dimensions L x W x H: </span>5.82 x 5.82 x 12.3 inches</p>
               </div>
               <div className="flex">
                   {/* <h1 className="font-bold"> </h1> */}
                   <p className=""><span className="font-bold">Brand Name: </span> STANLEY</p>
               </div>
               <div className="flex">
                   {/* <h1 className="font-bold">Warranty Description:</h1> */}
                   <p className=""><span className="font-bold">Warranty Description: </span>Lifetime Warranty</p>
               </div>
               <div className="flex">
                   {/* <h1 className="font-bold"></h1> */}
                   <p className=""><span className="font-bold">Model Name: </span>The Quencher H2.O FlowState™ Tumbler</p>
               </div>
               <div className="flex">
                   {/* <h1 className="font-bold"></h1> */}
                   <p className=""><span className="font-bold">Suggested Users: </span>Unisex-Adult</p>
               </div>
               <div className="flex">
                   {/* <h1 className="font-bold"></h1> */}
                   <p className=""><span className="font-bold">Manufacturer: </span>Stanley</p>
               </div>
               <div className="flex">
                   {/* <h1 className="font-bold"></h1> */}
                   <p className=""><span className="font-bold">Size: </span>40 Oz</p>
               </div>
               <div className="flex">
                   {/* <h1 className="font-bold"></h1> */}
                   <p className=""><span className="font-bold">Theme: </span>Floral</p>
               </div>
               <div className="flex">
                   {/* <h1 className="font-bold">Recommended Uses for Product</h1> */}
                   <p className=""><span className="font-bold">Recommended Uses for Product: </span>Travel, Hot and Cold Drinks</p>
               </div>
               <div className="flex">
                   {/* <h1 className="font-bold"> </h1> */}
                   <p className=""><span className="font-bold">Occassion: </span>Work</p>
               </div>
               <div className="flex">
                   {/* <h1 className="font-bold"> </h1> */}
                   <p className="">
                   <span className="font-bold">Included Components: </span>
                   Tumbler, Reusable Straw, Screw on 3-position lid
                   </p>
               </div>
               <div className="flex">
                   {/* <h1 className="font-bold"></h1> */}
                   <p className=""><span className="font-bold">Specific Uses for Product: </span>Cold Drinks</p>
               </div>
               <div className="flex">
                   {/* <h1 className="font-bold"></h1> */}
                   <p className=""><span className="font-bold">Pattern: </span>Solid</p>
               </div>
               <div className="flex">
                   {/* <h1 className="font-bold"></h1> */}
                   <p className=""><span className="font-bold">Product care Instructions: </span>Machine Wash, Hand Wash Only</p>
               </div>
               <div className="flex">
                   {/* <h1 className="font-bold">Material Feature: </h1> */}
                   <p className=""><span className="font-bold">Material Feature: </span>Insulated</p>
               </div>
               <div className="flex">
                   {/* <h1 className="font-bold">Reuseability: </h1> */}
                   <p className=""><span className="font-bold">Reuseability: </span>Reuseable</p>
               </div>
               <div className="flex">
                   {/* <h1 className="font-bold">Unit Count: </h1> */}
                   <p className=""><span className="font-bold">Unit Count: </span>1.0 Count</p>
               </div>
               <div className="flex">
                   {/* <h1 className="font-bold">Item Weight: </h1> */}
                   <p className=""><span className="font-bold">Item Weight: </span>1.43 Pounds</p>
               </div>
               <div className="flex">
                   {/* <h1 className="font-bold"></h1> */}
                   <p className=""><span className="font-bold">Product Dimensions: </span>5.82"W x 12.3"H</p>
               </div>
               <div className="flex">
                   {/* <h1 className="font-bold"></h1> */}
                   <p className=""><span className="font-bold">Number of Items: </span>1</p>
               </div>
             </div>):""}
              </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
