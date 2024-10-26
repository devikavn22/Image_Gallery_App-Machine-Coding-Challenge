


import React, { useEffect, useRef, useState } from 'react';
import styles from './ImageGallery.module.css'

interface Image {
    id: string;
    src: string;
    alt: string;
}

interface ImageGalleryProps {
    images: Image[] // array of Image objects.
}


const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {

    const [visibleImages, setVisibleImages] = useState<string[]>([]);
    const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const imgId = entry.target.getAttribute('data-id');
                    if (imgId && !visibleImages.includes(imgId)) {
                        setVisibleImages((prev) => [...prev, imgId]);
                    }
                }
            });
        }, { rootMargin: '0px 0px 200px 0px', threshold: 0.1 });

        imageRefs.current.forEach((img) => {
            if (img) observer.observe(img);
        });

        return () => {
            observer.disconnect();
        }

    }, [visibleImages]);

    return (
        <div className={styles.imgGallery}>
            <h1>Image Gallery with Lazy Loading ...</h1>
            {
                images.map((image, index) => (
                    <>
                        <img
                            key={image.id}
                            data-id={image.id}
                            ref={(el) => (imageRefs.current[index] = el)}
                            src={visibleImages.includes(image.id) ? image.src : ''}
                            alt={image.alt}
                            className={styles.imgContainer}
                            loading='lazy'
                        />
                    </>
                ))
            }</div>
    )
}

export default ImageGallery;