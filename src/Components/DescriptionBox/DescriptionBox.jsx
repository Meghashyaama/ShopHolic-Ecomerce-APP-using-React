import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator" />
   <div className="flex">   <div className="descriptionbox-nav-box">Description</div>
      <div className="descriptionbox-nav-box-fade">Reviews (122)</div>
</div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sed
          corrupti ipsa perferendis possimus aliquid modi cupiditate officia
          voluptatem earum quasi atque magnam ab, harum eligendi adipisci
          impedit perspiciatis ipsum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nam
          voluptatem incidunt rerum, dolorem illo laudantium ducimus culpa
          impedit nostrum reprehenderit ullam laboriosam, possimus saepe
          perferendis assumenda accusantium, in nulla!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
