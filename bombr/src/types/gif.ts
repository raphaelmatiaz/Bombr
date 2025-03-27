export default interface Gif {
  id: string;
  title: string;
  images: {
      fixed_height: {
          webp: string;
      };
  };
}