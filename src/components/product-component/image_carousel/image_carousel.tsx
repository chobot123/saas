import Image from 'next/image';
import { useState, useEffect } from 'react';

type imageUrlList = {
    urls: Array<string>
}

export default function Image_Carousel(): JSX.Element {

    const urls: string[] = [
        "https://files.stripe.com/links/MDB8YWNjdF8xTVNRQ3dDWEx2dXFYd1FLfGZsX3Rlc3RfQTBlQmxEVGtBR0dGRUExRXp4Q1RoQ0Jr006IpZMy3p",
        "https://files.stripe.com/links/MDB8YWNjdF8xTVNRQ3dDWEx2dXFYd1FLfGZsX3Rlc3RfQTBlQmxEVGtBR0dGRUExRXp4Q1RoQ0Jr006IpZMy3p",
        "https://files.stripe.com/links/MDB8YWNjdF8xTVNRQ3dDWEx2dXFYd1FLfGZsX3Rlc3RfQTBlQmxEVGtBR0dGRUExRXp4Q1RoQ0Jr006IpZMy3p",
        "https://files.stripe.com/links/MDB8YWNjdF8xTVNRQ3dDWEx2dXFYd1FLfGZsX3Rlc3RfQTBlQmxEVGtBR0dGRUExRXp4Q1RoQ0Jr006IpZMy3p",
    ];

    return (
        <div className="image_carousel container">
            <ul className='flex flex-nowrap gap-1 overflow-x-auto snap-x snap-mandatory h-100 aspect-square' id="carousel-wrapper">
                {
                    urls.map((imgUrl, index) => {
                        return (
                            <li className='slide relative flex snap-start justify-center items-center grow-0 shrink-0 basis-full' key={index}>
                                
                                <Image 
                                    src={imgUrl} 
                                    fill
                                    alt="product_image"
                                    style={
                                        {
                                            objectFit: 'cover'
                                        }
                                    }
                                />
                            </li> 
                        )
                    })
                }
            </ul>
        </div>
    )
}