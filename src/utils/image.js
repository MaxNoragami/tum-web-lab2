import fs from "node:fs";
import path from "node:path";

/**
 * Given an image public path (e.g. "/section-gallery/cake1.webp"),
 * returns the path to its optimized version in the op/ subfolder
 * (e.g. "/section-gallery/op/cake1.webp") — but only if it actually
 * exists on disk. Returns null otherwise.
 */
export function getOptimizedSrc(publicPath) {
    const dir = path.dirname(publicPath);
    const file = path.basename(publicPath);
    const opPath = `${dir}/op/${file}`;
    const diskPath = path.join(process.cwd(), "public", opPath);

    if (fs.existsSync(diskPath)) {
        return opPath;
    }
    return null;
}
