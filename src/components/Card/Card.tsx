import "./Card.css"
import type { Image } from "../../types/common";
interface CardProps{
    image:Image;
    title?:string;
    description?:string;
    additional_image?:Image
    additional_description?:string;
    additional_text?:string;
    show_additional?:boolean;
    show_last?:boolean;
    className: string;
}
const Card = ({image,title="$300000",description="Luxury Apartment in California",
    additional_image={source:"/assets/icons/locationcard.svg",alternative:"Location photo"},
    additional_description="1901 Thornridge Cir. Shiloh, Hawaii 81063",show_additional,show_last,className}:CardProps) => {
    return (
        <div className={className}>
                <div className="image_wrapper">
                    <img src={image.source} alt={image.alternative} />
                    {
                        show_last&&
                        <div className="features">
                            <span className="first_feature">Features</span>
                            <span className="second_feature">3D</span>
                        </div>
                    }
                </div>
                {
                    !show_last&&
                    <div className="info">
                        <h4 className="title">{title}</h4>
                        <p className="description">{description}</p>
                        {
                            show_additional&&
                            <div className="additional_info _flex _align_center">
                                <div className="image_container">
                                    <img src={additional_image.source} alt={additional_image.alternative} />
                                </div>
                                <p className="additional_text">{additional_description}</p>
                            </div>
                        }
                </div>
                }
        </div>
    )
}

export default Card