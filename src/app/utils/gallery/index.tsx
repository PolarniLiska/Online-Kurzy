export const getGalleryImagePaths = (imageCount: number, alt: string, prePath: string, pastPath: string) => {
    const images = [];
    for (let i = 0; i < imageCount; i++) {
        images.push({
            alt,
            src: prePath + i.toString().padStart(2, "0") + pastPath,
        });
    }

    return images;
};
