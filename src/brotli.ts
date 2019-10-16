import { createReadStream, createWriteStream, PathLike, WriteStream } from "fs";
import { createBrotliCompress, createBrotliDecompress } from "zlib";

export const brotli = {
    compress: (source: PathLike, dest: PathLike): WriteStream =>
        createReadStream(source)
            .pipe(createBrotliCompress())
            .pipe(createWriteStream(dest)),
    decompress: (source: PathLike, dest: PathLike): WriteStream =>
        createReadStream(source)
            .pipe(createBrotliDecompress())
            .pipe(createWriteStream(dest)),
};
