"use client";

import { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

import { FaWindowClose } from "react-icons/fa";

interface ImgInfo {
    src: string;
    alt: string;
}

interface Props {
    galleryImages: ImgInfo[];
}
export default function Gallery({ galleryImages }: Props) {
    const [previewImage, setPreviewImage] = useState<string | null>();

    return (
        <>
            {previewImage && (
                <div onClick={() => setPreviewImage(null)} className={styles.preview}>
                    <div className={styles.controlPanel}>
                        <div onClick={() => setPreviewImage(null)} className={styles.closeBtn}>
                            <FaWindowClose className={styles.icon} />
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <Image alt="preview-image" src={previewImage} fill></Image>
                    </div>
                </div>
            )}
            <div className={styles.gallery}>
                <h3>Ukázky naší práce</h3>
                <div className={styles.galleryContent}>
                    {galleryImages.map((image, i) => (
                        <div className={styles.imageContainer} key={`gImage-` + i}>
                            <Image onClick={() => setPreviewImage(image.src)} alt={image.alt} src={image.src} fill />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
