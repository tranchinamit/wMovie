interface IThumb {
  slug?: string;
  quality?: number;
}
export const THUMB_IMG = ({ slug = "dao-hai-tac-le-hoi-hai-tac-2019", quality = 75 }: IThumb): string => `https://ophim.cc/_next/image?url=https%3A%2F%2Fimg.ophim.tv%2Fuploads%2Fmovies%2F${slug}-thumb.jpg&w=192&q=${quality}`