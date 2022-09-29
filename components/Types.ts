export type HelmetTypes = {
  title: string;
  metaName: string;
  metaContent: string;
  favicon: string;
};

export type ArticalType = {
  title: string;
  id: number;
  userId: number;
};

export type ArticalsType = {
  articals: ArticalType[];
};
