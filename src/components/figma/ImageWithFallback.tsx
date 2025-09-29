"use client";

import * as React from "react";

type ImageWithFallbackProps = React.ImgHTMLAttributes<HTMLImageElement> & {
    fallbackSrc?: string;
};

const DEFAULT_FALLBACK =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='180' viewBox='0 0 320 180'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-family='Arial' font-size='14'%3EImage%20unavailable%3C/text%3E%3C/svg%3E";

export function ImageWithFallback({ fallbackSrc = DEFAULT_FALLBACK, onError, ...props }: ImageWithFallbackProps) {
    const [src, setSrc] = React.useState(props.src);

    const handleError = React.useCallback<React.ReactEventHandler<HTMLImageElement>>(
        (e) => {
            if (src !== fallbackSrc) {
                setSrc(fallbackSrc);
            }
            onError?.(e);
        },
        [src, fallbackSrc, onError]
    );

    return <img {...props} src={src} onError={handleError} />;
}


